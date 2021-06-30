firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
      location.href = '../index.html';
    }
  });

function logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    location.href = '../index.html';
  }).catch(function(error) {
    // An error happened.
  });
}

function changePsw(){
    var user = firebase.auth().currentUser;

    var psw0 = document.getElementById('psw0').value;
    var psw1 = document.getElementById('psw1').value;
    var psw2 = document.getElementById('psw2').value;

    var credential = firebase.auth.EmailAuthProvider.credential(
        user.email, 
        psw0
    );

    // Prompt the user to re-provide their sign-in credentials

    user.reauthenticateWithCredential(credential).then(function() {
        if (psw1 == psw2){

            user.updatePassword(psw1).then(function() {
                window.alert("Update successful");
                // Update successful.
                }).catch(function(error) {
                    // An error happened.
                    var errorMessage = error.message;
                    window.alert('Error: ' + errorMessage);
                });
        } else {
            window.alert("Wrong Password or not identical.")
        }  
        // User re-authenticated.
        }).catch(function(error) {
        // An error happened.
        var errorMessage = error.message;
        window.alert('Error: ' + errorMessage);
    }); 
}


function cycle(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = date+' '+time;

    var db = firebase.database().ref();
    var length = document.getElementById('cycleLength').value;
    var data = {length, date};

    if(length != ""){
        db.child('cycleLength').update(data);
        window.alert('Length of Cycle updated to ' + length + ' days.');
    } else {
        window.alert('Error: Please enter a number');
    }
}


//Halbe Stunden hinzufügen
function setNotifications(){
    var countAM = document.getElementById('countAM').value;
    var countPM = document.getElementById('countPM').value;

    var fromAM = document.getElementById('fromAM').value;
    var fromPM = document.getElementById('fromPM').value;

    var toAM = document.getElementById('toAM').value;
    var toPM = document.getElementById('toPM').value;

    var fromAMSplit = fromAM.split(':');
    var fromPMSplit = fromPM.split(':');
    var toAMSplit = toAM.split(':');
    var toPMSplit = toPM.split(':');


    var hours = parseInt(fromAMSplit[0], 10);
    var minutes = fromAMSplit[1] ? parseInt(fromAMSplit[1], 10) : 0;
    var resultFrAM = hours + minutes/60;

    var hours = parseInt(fromPMSplit[0], 10);
    var minutes = fromPMSplit[1] ? parseInt(fromPMSplit[1], 10) : 0;
    var resultFrPM = hours + minutes/60;

    var hours = parseInt(toAMSplit[0], 10);
    var minutes = toAMSplit[1] ? parseInt(toAMSplit[1], 10) : 0;
    var resultToAM = hours + minutes/60;

    var hours = parseInt(toPMSplit[0], 10);
    var minutes = toPMSplit[1] ? parseInt(toPMSplit[1], 10) : 0;
    var resultToPM = hours + minutes/60;

    var db = firebase.database().ref();
    var dataAM = {countAM, fromAM, toAM};
    var dataPM = {countPM, fromPM, toPM};

    //Am Intervall

    // count AM toAM - frAM times 2
    if(resultFrAM < resultToAM && resultFrAM >= 0 && resultToAM < 12){
        if(countAM != "" && countAM <= 48 && countAM <= 48 - countPM){
            if(countAM <= (resultToAM - resultFrAM)*2){
                window.alert('Data has been updated')
            db.child('cycleStorage').update(dataAM);
            } else {
                window.alert('Error. Too many notifications between ' + toAM + ' and ' + fromAM)
            }
            
        } else {
            window.alert('Error. Too many notifications.');
        }

    } else {
        window.alert('Error! False time intervall.');
    }

    //PM Intervall
    if(resultFrPM < resultToPM && resultFrPM >= 12 && resultToPM < 24){
        if(countPM != "" && countPM <= 48 - countAM){
            if(countPM <= (resultToPM - resultFrPM)*2){
                //upload to firebase
                db.child('cycleStorage').update(dataPM);
            } else {
                window.alert('Error. Too many notifications between ' + toPM + ' and ' + fromPM)
            }        
        } else {
            window.alert('Error. Too many notifications.');
        }
    } else {
        window.alert('Error! False time intervall.');
    }

    //check if a radio button has been checked

    var random = {typeNotification: 'random'};
    var sameTime = {typeNotification: 'same time'};

    if(document.getElementById('random').checked){
        db.child('cycleStorage').update(random);

    } else if( document.getElementById('sameTime').checked){
        db.child('cycleStorage').update(sameTime);
    } 

}


$('#file').on('change',function(){
    var fileName = $(this).val().replace('C:\\fakepath\\', "");
    $(this).next('#fileLabel').html(fileName);
})


//Knoten mit highest version
function consentForm(){
    var selectedFile = document.getElementById('file').files[0];
    var reader = new FileReader();
    reader.onload = function(){
        var result = reader.result;

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        //VERSION anlegen, Datum muss drin bleiben

        var db = firebase.database().ref();
        var dbRef = db.child('consentFormStorage');

        dbRef.orderByKey().limitToLast(1).once('value').then(function(snapshot){
            snapshot.forEach(function(data) {
                var version = data.key;
                version++;
                var verRef = dbRef.child(version);
                verRef.set({date: dateTime, form: result});
                
                dbRef.child('-1').set({higestVersion: version});

                window.alert('Data added');
            });
        });
    }
    reader.readAsText(selectedFile);
}

function downloadData(){
    date1 = document.getElementById('date1').value;
    date2 = document.getElementById('date2').value;
    if(date1 != "" && date2 != ""){
        if(date1 <= date2){
            downloadDatas();
        } else {
            window.alert('Error. Wrong data input')
        }
    } else {
        window.alert('Error. Please enter Date')
    }
}



function downloadDatas(){
    date1 = document.getElementById('date1').value;
    date2 = document.getElementById('date2').value;
 

    var db = firebase.database().ref();
    var dbRef = db.child('records');
    var userRef = db.child('user');
    var compRef = db.child('companion');
    
    //records reference
    dbRef.once('value', function(snapshot) {
        var ids = snapshot.val();
        
        var num = snapshot.numChildren();

        var compLength = [];
        var testRecords = [];//für die dynamic headings 
        var rec_mood = []; //actuall array mit mood stress usw
        var rec_moodCopy = [];

        //ids
        snapshot.forEach(function(child){
            recordIDS = child.key;
            records = child.val();

                testRecords.push(Object.keys(records)); //für dynamic headings

                var compLength0 = [];
                var z = [];
                var ok = [];

                //record entries
                child.forEach(function(child0){
                    date = child0.key;
                    dateDt = child0.val();
                    mood = child0.val()['mood'];
                    stress = child0.val()['stress'];
                    companionID = child0.val()['companionDist'];
                    companionS = child0.val()['companionId']
                    voluntary = child0.val()['voluntary'];
                    

                    compLength0.push(Object.keys(companionID).length);

                    let zen = [];
                    for(i=0; i< 1; i++){
                        for(j=0; j<companionID.length; j++){
                            zen.push(companionID[j].split(' '));
                        }
                    }
                    
                    z.push(dateDt);
                    specialSituation = child0.val()['specialSituation'];

                    ok.push(date, voluntary, mood, stress,specialSituation, zen);

                })
                rec_mood.push(ok);
                rec_moodCopy.push(ok);
                compLength.push(compLength0);                
                
        })
        
        //A date filtered version of rec_mood
        filtered = [];
        for(i=0; i< rec_mood.length; i++){

            zwischen = [];

            for(j=0; j< rec_mood[i].length; j=j+6){
                
               //get every 6th starting at index 0
                storage = [];
                if(rec_mood[i][j].split(' ')[0] <= date2 && rec_mood[i][j].split(' ')[0] >= date1){  
                    for(k=0; k< 6; k++){
                        x = k + j;
                        storage.push(rec_mood[i][x]);
                    }  
                }
                if(storage.length > 0){
                    zwischen.push(storage);
                }
            }

            if(zwischen.length > 0){
                filtered.push(zwischen);
            }
        }

        for(i=0; i< filtered.length; i++){
            platz = filtered[i][0];
            for(j=0; j < filtered[i].length-1; j++){
                platz = platz.concat(filtered[i][j+1]);
            }
            filtered[i] = platz;
        }
        
        

        //all about companions
        compRef.once('value', function(snapshot1){
            compKey =  snapshot1.key;
            compData = snapshot1.val();
            

            let cData = [];
            snapshot1.forEach(function(childSnapshot1){
                childCompKey = childSnapshot1.key;
                childCompData = childSnapshot1.val();

                
                
                let allData = [childCompKey];
                childSnapshot1.forEach(function(child2){
                    childCompData2 = child2.val();
                    childCompKey2 = child2.key;
                    publicID2 = child2.val()['id'];
                    type = child2.val()['type'];


                    allData.push(publicID2, type);
                })
                cData.push(allData);
            })            

            //user reference
            userRef.once('value', function(snapshot){
                var userNum = snapshot.numChildren();
                userIDS = snapshot.val();
                //simple data + csv-array
                var blub = [];
                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var publicID = childSnapshot.child('publicId').val();
                    var childData = childSnapshot.val();
                    let join_date = childSnapshot.child('joinDate').val();
                    let exit_date = childSnapshot.child('exitDate').val();
                    let consent_version = childSnapshot.child('consentVersion').val();
                    let consent_accepted = childSnapshot.child('cosentAccepted').val();
                    let questionnaire1 = childSnapshot.child('EmotionalContagionQuestionnaireAnswers').key;
                    let answer1 = childSnapshot.child('EmotionalContagionQuestionnaireAnswers').val();
                    let questionnaire2 = childSnapshot.child('PersonalityQuestionnaireAnswers').key;
                    let answer2 = childSnapshot.child('PersonalityQuestionnaireAnswers').val();
                    let questionnaire3 = childSnapshot.child('demographicAnswers').key;
                    let answeri3 = childSnapshot.child('demographicAnswers').val();


                    //Not used, since all rows of csv file will be destroyed
                    let allcdData = [];
                    for(i=0;i<cData.length;i++){
                        if(cData[i][0]==childKey){
                            removal = cData[i].splice(0,1);
                            allcdData.push(cData[i]);
                            
                        }
                    }
                    // console.log(Object.keys(childCompData));

                    let answer3 = Object.values(answeri3);

                    answer1.splice(0,0,"Text_Question_0");
                    answer1.splice(2,0,"Text_Question_1"); answer1.splice(4,0,"Text_Question_2");
                    answer1.splice(6,0,"Text_Question_3"); answer1.splice(8,0,"Text_Question_4");
                    answer1.splice(10,0,"Text_Question_5"); answer1.splice(12,0,"Text_Question_6");
                    answer1.splice(14,0,"Text_Question_7"); answer1.splice(16,0,"Text_Question_8");
                    answer1.splice(18,0,"Text_Question_9"); answer1.splice(20,0,"Text_Question_10");
                    answer1.splice(22,0,"Text_Question_11"); answer1.splice(24,0,"Text_Question_12");
                    answer1.splice(26,0,"Text_Question_13"); answer1.splice(28,0,"Text_Question_14");

                    answer2.splice(0,0,"Text_Question_0");
                    answer2.splice(2,0,"Text_Question_1"); answer2.splice(4,0,"Text_Question_2");
                    answer2.splice(6,0,"Text_Question_3"); answer2.splice(8,0,"Text_Question_4");
                    answer2.splice(10,0,"Text_Question_5"); answer2.splice(12,0,"Text_Question_6");
                    answer2.splice(14,0,"Text_Question_7"); answer2.splice(16,0,"Text_Question_8");
                    answer2.splice(18,0,"Text_Question_9"); answer2.splice(20,0,"Text_Question_10");
                    answer2.splice(22,0,"Text_Question_11"); answer2.splice(24,0,"Text_Question_12");
                    answer2.splice(26,0,"Text_Question_13"); answer2.splice(28,0,"Text_Question_14");

                    answer3.splice(0,0,"age"); answer3.splice(2,0,"gender");
                    answer3.splice(4,0,"livingSituation"); answer3.splice(6,0,"motherTongue");
                    answer3.splice(8,0,"nationality"); answer3.splice(10,0,"occupation");
                    


                    versuch = [childKey, join_date, exit_date, consent_version, consent_accepted, questionnaire1,answer1, questionnaire2,answer2, questionnaire3, answer3];
                    let datas = versuch;
                    
                    var testerino;
                    let z = [];
                    for(i=0; i < filtered.length; i++){
                        if(datas[0] == Object.keys(ids)[i]){
                            testerino = [datas, filtered[i]]; 
                        }
                    }
                    blub.push(testerino);
                    
                });


                //CSV is created here
                var filtered1 = blub.filter(x => x !== undefined);
                
                let answer1Heading = ['questionnaire_1_Q_0', 'questionnaire_1_ans_0', 'questionnaire_1_Q_1', 'questionnaire_1_ans_1','questionnaire_1_Q_2', 'questionnaire_1_ans_2','questionnaire_1_Q_3', 'questionnaire_1_ans_3','questionnaire_1_Q_4', 'questionnaire_1_ans_4','questionnaire_1_Q_5', 'questionnaire_1_ans_5',
                'questionnaire_1_Q_6', 'questionnaire_1_ans_6', 'questionnaire_1_Q_7', 'questionnaire_1_ans_7', 'questionnaire_1_Q_8', 'questionnaire_1_ans_8','questionnaire_1_Q_9', 'questionnaire_1_ans_9','questionnaire_1_Q_10', 'questionnaire_1_ans_10','questionnaire_1_Q_11', 'questionnaire_1_ans_11',
                'questionnaire_1_Q_12', 'questionnaire_1_ans_12','questionnaire_1_Q_13', 'questionnaire_1_ans_13','questionnaire_1_Q_14', 'questionnaire_1_ans_14']

                let answer2Heading = ['questionnaire_2_Q_0', 'questionnaire_2_ans_0','questionnaire_2_Q_1', 'questionnaire_2_ans_1','questionnaire_2_Q_2', 'questionnaire_2_ans_2','questionnaire_2_Q_3', 'questionnaire_2_ans_3','questionnaire_2_Q_4', 'questionnaire_2_ans_4','questionnaire_2_Q_5', 'questionnaire_2_ans_5',
                'questionnaire_2_Q_6', 'questionnaire_2_ans_6','questionnaire_2_Q_7', 'questionnaire_2_ans_7','questionnaire_2_Q_8', 'questionnaire_2_ans_8','questionnaire_2_Q_9', 'questionnaire_2_ans_9','questionnaire_2_Q_10', 'questionnaire_2_ans_10','questionnaire_2_Q_11', 'questionnaire_2_ans_11',
                'questionnaire_2_Q_12', 'questionnaire_2_ans_12','questionnaire_2_Q_13', 'questionnaire_2_ans_13','questionnaire_2_Q_14', 'questionnaire_2_ans_14']

                let answer3Heading = ['questionnaire_3_Q_0', 'questionnaire_3_ans_0','questionnaire_3_Q_1', 'questionnaire_3_ans_1','questionnaire_3_Q_2', 'questionnaire_3_ans_2','questionnaire_3_Q_3', 'questionnaire_3_ans_3','questionnaire_3_Q_4', 'questionnaire_3_ans_4','questionnaire_3_Q_5', 'questionnaire_3_ans_5',
                ]

                //calculate maximum of total records for headings
                let maxi = [];
                for(i=0; i < num; i++){
                    maxi.push(testRecords[i].length);
                }
                var maxRec = Math.max(...maxi);
                

                let recordHeading = [];
                for(i=1; i<= maxRec; i++){
                    var vtnHead = "input_"+i+"_voluntary";
                    var Datum = "input_"+i+"_ans_time";
                    var headMood = "input_"+i+"_mood";
                    var headStress = "input_"+i+"_stress";
                    var headSpecial = "input_"+i+"_specialSituation";

                    // for each array[i] get max
                    let lastTry = [];
                    for(j=1;j<= 20;j++){ 

                        var headComp = "comp" + i + "_" + j;
                        var headCompGps = "gps" + i+ "_" + j;
                        lastTry.push(headComp,headCompGps);
                    }

                    recordHeading.push(Datum, vtnHead, headMood, headStress,headSpecial, lastTry);
                }

                
                let arrayHeader = ["user_id", "join_date", "exit_date", "consent_form_version", "consent_accepted", 
                                    "questionnaire_1_id",answer1Heading, "questionnaire_2_id",answer2Heading, "questionnaire_3_id",answer3Heading, recordHeading];
                            let header = arrayHeader.join(',') + '\n';
                                let csv = header;
                                filtered1.forEach( array => {
                                    csv += array.join(',')+"\n";
                                });
                
                            let csvData = new Blob([csv], { type: 'text/csv' });  
                            csvUrl = URL.createObjectURL(csvData);


                            //TEST
                            // console.log(csv);

                
                let hiddenElement = document.createElement('a');
                hiddenElement.href = csvUrl;
                hiddenElement.target = '_blank';
                hiddenElement.download = 'data.csv';
                hiddenElement.click();
            }) 
        })
    });
    downloadConsentForm();
   
}

//download all data
function downloadData1(){
    
    var db = firebase.database().ref();
    var dbRef = db.child('records');
    var userRef = db.child('user');
    var compRef = db.child('companion');
    
    //records reference
    dbRef.once('value', function(snapshot) {
        var ids = snapshot.val();
        
        var num = snapshot.numChildren();

        var compLength = [];
        var testRecords = [];//für die dynamic headings
        var rec_mood = []; //actuall array mit mood stress usw

        snapshot.forEach(function(child){
            recordIDS = child.key;
            records = child.val();

                testRecords.push(Object.keys(records)); //für dynamic headings

                var compLength0 = [];
                var z = [];
                var ok = [];
                child.forEach(function(child0){
                    date = child0.key;
                    dateDt = child0.val();
                    mood = child0.val()['mood'];
                    stress = child0.val()['stress'];
                    companionID = child0.val()['companionDist'];
                    companionS = child0.val()['companionId']
                    voluntary = child0.val()['voluntary'];                 
                    

                    compLength0.push(Object.keys(companionID).length);

                    let zen = [];
                    for(i=0; i< 1; i++){
                        for(j=0; j<companionID.length; j++){
                            zen.push(companionID[j].split(' '));
                        }
                    }

                    z.push(dateDt);
                    specialSituation = child0.val()['specialSituation'];
                    ok.push(voluntary, date, mood, stress,specialSituation, zen);
                })

                rec_mood.push(ok);
                compLength.push(compLength0);
                
        })


        //all about companions
        compRef.once('value', function(snapshot1){
            compKey =  snapshot1.key;
            compData = snapshot1.val();
            

            let cData = [];
            snapshot1.forEach(function(childSnapshot1){
                childCompKey = childSnapshot1.key;
                childCompData = childSnapshot1.val();

                
                
                let allData = [childCompKey];
                childSnapshot1.forEach(function(child2){
                    childCompData2 = child2.val();
                    childCompKey2 = child2.key;
                    publicID2 = child2.val()['id'];
                    type = child2.val()['type'];


                    allData.push(publicID2, type);
                })
                cData.push(allData);
            })

            //user reference
            userRef.once('value', function(snapshot){
                var userNum = snapshot.numChildren();
                userIDS = snapshot.val();


                //simple data + csv-array
                var blub = [];
                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var publicID = childSnapshot.child('publicId').val();
                    var childData = childSnapshot.val();
                    let join_date = childSnapshot.child('joinDate').val();
                    let exit_date = childSnapshot.child('exitDate').val();
                    let consent_version = childSnapshot.child('consentVersion').val();
                    let consent_accepted = childSnapshot.child('cosentAccepted').val();
                    let questionnaire1 = childSnapshot.child('EmotionalContagionQuestionnaireAnswers').key;
                    let answer1 = childSnapshot.child('EmotionalContagionQuestionnaireAnswers').val();
                    let questionnaire2 = childSnapshot.child('PersonalityQuestionnaireAnswers').key;
                    let answer2 = childSnapshot.child('PersonalityQuestionnaireAnswers').val();
                    let questionnaire3 = childSnapshot.child('demographicAnswers').key;
                    let answeri3 = childSnapshot.child('demographicAnswers').val();


                    //Not used, since rows of csv file will be destroyed if companions data is added
                    let allcdData = [];
                    for(i=0;i<cData.length;i++){
                        if(cData[i][0]==childKey){
                            // console.log(cData[i]);
                            removal = cData[i].splice(0,1);
                            allcdData.push(cData[i]);
                            
                        }
                    }

                    let answer3 = Object.values(answeri3);

                    answer1.splice(0,0,"Text_Question_0");
                    answer1.splice(2,0,"Text_Question_1"); answer1.splice(4,0,"Text_Question_2");
                    answer1.splice(6,0,"Text_Question_3"); answer1.splice(8,0,"Text_Question_4");
                    answer1.splice(10,0,"Text_Question_5"); answer1.splice(12,0,"Text_Question_6");
                    answer1.splice(14,0,"Text_Question_7"); answer1.splice(16,0,"Text_Question_8");
                    answer1.splice(18,0,"Text_Question_9"); answer1.splice(20,0,"Text_Question_10");
                    answer1.splice(22,0,"Text_Question_11"); answer1.splice(24,0,"Text_Question_12");
                    answer1.splice(26,0,"Text_Question_13"); answer1.splice(28,0,"Text_Question_14");

                    answer2.splice(0,0,"Text_Question_0");
                    answer2.splice(2,0,"Text_Question_1"); answer2.splice(4,0,"Text_Question_2");
                    answer2.splice(6,0,"Text_Question_3"); answer2.splice(8,0,"Text_Question_4");
                    answer2.splice(10,0,"Text_Question_5"); answer2.splice(12,0,"Text_Question_6");
                    answer2.splice(14,0,"Text_Question_7"); answer2.splice(16,0,"Text_Question_8");
                    answer2.splice(18,0,"Text_Question_9"); answer2.splice(20,0,"Text_Question_10");
                    answer2.splice(22,0,"Text_Question_11"); answer2.splice(24,0,"Text_Question_12");
                    answer2.splice(26,0,"Text_Question_13"); answer2.splice(28,0,"Text_Question_14");

                    answer3.splice(0,0,"age"); answer3.splice(2,0,"gender");
                    answer3.splice(4,0,"livingSituation"); answer3.splice(6,0,"motherTongue");
                    answer3.splice(8,0,"nationality"); answer3.splice(10,0,"occupation");
                    


                    versuch = [childKey, join_date, exit_date, consent_version, consent_accepted, questionnaire1,answer1,questionnaire2,answer2,questionnaire3,answer3];
                    let datas = versuch;

                    var testerino;
                    let z = [];
                    for(i=0; i < num; i++){
                        if(datas[0] == Object.keys(ids)[i]){
                            testerino = [datas, rec_mood[i]]; 
                        }
                    }
                    blub.push(testerino);
                    
                });


                //CSV is created here
                var filtered1 = blub.filter(x => x !== undefined);
                
                let answer1Heading = ['questionnaire_1_Q_0', 'questionnaire_1_ans_0', 'questionnaire_1_Q_1', 'questionnaire_1_ans_1','questionnaire_1_Q_2', 'questionnaire_1_ans_2','questionnaire_1_Q_3', 'questionnaire_1_ans_3','questionnaire_1_Q_4', 'questionnaire_1_ans_4','questionnaire_1_Q_5', 'questionnaire_1_ans_5',
                'questionnaire_1_Q_6', 'questionnaire_1_ans_6', 'questionnaire_1_Q_7', 'questionnaire_1_ans_7', 'questionnaire_1_Q_8', 'questionnaire_1_ans_8','questionnaire_1_Q_9', 'questionnaire_1_ans_9','questionnaire_1_Q_10', 'questionnaire_1_ans_10','questionnaire_1_Q_11', 'questionnaire_1_ans_11',
                'questionnaire_1_Q_12', 'questionnaire_1_ans_12','questionnaire_1_Q_13', 'questionnaire_1_ans_13','questionnaire_1_Q_14', 'questionnaire_1_ans_14']

                let answer2Heading = ['questionnaire_2_Q_0', 'questionnaire_2_ans_0','questionnaire_2_Q_1', 'questionnaire_2_ans_1','questionnaire_2_Q_2', 'questionnaire_2_ans_2','questionnaire_2_Q_3', 'questionnaire_2_ans_3','questionnaire_2_Q_4', 'questionnaire_2_ans_4','questionnaire_2_Q_5', 'questionnaire_2_ans_5',
                'questionnaire_2_Q_6', 'questionnaire_2_ans_6','questionnaire_2_Q_7', 'questionnaire_2_ans_7','questionnaire_2_Q_8', 'questionnaire_2_ans_8','questionnaire_2_Q_9', 'questionnaire_2_ans_9','questionnaire_2_Q_10', 'questionnaire_2_ans_10','questionnaire_2_Q_11', 'questionnaire_2_ans_11',
                'questionnaire_2_Q_12', 'questionnaire_2_ans_12','questionnaire_2_Q_13', 'questionnaire_2_ans_13','questionnaire_2_Q_14', 'questionnaire_2_ans_14']

                let answer3Heading = ['questionnaire_3_Q_0', 'questionnaire_3_ans_0','questionnaire_3_Q_1', 'questionnaire_3_ans_1','questionnaire_3_Q_2', 'questionnaire_3_ans_2','questionnaire_3_Q_3', 'questionnaire_3_ans_3','questionnaire_3_Q_4', 'questionnaire_3_ans_4','questionnaire_3_Q_5', 'questionnaire_3_ans_5',
                ]

                //calculate maximum of total records for headings
                let maxi = [];
                for(i=0; i < num; i++){
                    maxi.push(testRecords[i].length);
                }
                var maxRec = Math.max(...maxi);
                

                let recordHeading = [];
                for(i=1; i<= maxRec; i++){
                    var vtnHead = "input_"+i+"_voluntary";
                    var Datum = "input_"+i+"_ans_time";
                    var headMood = "input_"+i+"_mood";
                    var headStress = "input_"+i+"_stress";
                    var headSpecial = "input_"+i+"_specialSituation";

                    // for each array[i] get max
                    let lastTry = [];
                    for(j=1;j<= 20;j++){
                        var headComp = "comp" + i + "_" + j;
                        var headCompGps = "gps" + i+ "_" + j;
                        lastTry.push(headComp,headCompGps);
                    }

                    recordHeading.push(vtnHead, Datum, headMood, headStress,headSpecial, lastTry);
                }

                
                let arrayHeader = ["user_id", "join_date", "exit_date", "consent_form_version", "consent_accepted", 
                                    "questionnaire_1_id",answer1Heading, "questionnaire_2_id",answer2Heading, "questionnaire_3_id",answer3Heading, recordHeading];
                    let header = arrayHeader.join(',') + '\n';
                    let csv = header;
                    filtered1.forEach( array => {
                        csv += array.join(',')+"\n";
                    });
    
                    let csvData = new Blob([csv], { type: 'text/csv' });  
                    csvUrl = URL.createObjectURL(csvData);


                    //TEST
                    // console.log(csv);

                    let hiddenElement = document.createElement('a');
                    hiddenElement.href = csvUrl;
                    hiddenElement.target = '_blank';
                    hiddenElement.download = 'data.csv';
                    hiddenElement.click();
            }) 
        })
    });

    downloadConsentForm();
}

function downloadConsentForm(){
    var db = firebase.database().ref();
    var dbRef = db.child('consentFormStorage');
    array = []
    //records reference
    dbRef.once('value', function(snapshot) {

        snapshot.forEach(function(child){
            if(child.key>=0){
                placeholder = [];
                placeholder.push(child.key);
                placeholder.push(child.val().form);
                placeholder.push(child.val().ids);
                array.push(placeholder + "\n");
                
            }
        });
        //creates txt file
        let csvData = new Blob([array], { type: 'text/plain;charset=utf-8' });  
            csvUrl = URL.createObjectURL(csvData);
                
            let hiddenElement = document.createElement('a');
            hiddenElement.href = csvUrl;
            hiddenElement.target = '_blank';
            hiddenElement.download = 'data.txt';
            hiddenElement.click();
    });
}

function archive(){
    var archive1 = document.getElementById('archive1').value;
    var archive2 = document.getElementById('archive2').value;
    if(archive1 != "" && archive2 != ""){
        if(archive1 <= archive2){
            archive();
        } else {
            window.alert('Error. Wrong Data Input!')
        }
    } else {
        window.alert('Error. Please Enter Date!')
    }
}


function archives(){
    
    var archive1 = document.getElementById('archive1').value;
    var archive2 = document.getElementById('archive2').value;
    
    var db = firebase.database().ref();
    var dbRef = db.child('records');
    
        //records reference
        dbRef.once('value', function(snapshot) {
            
            snapshot.forEach(function(child){
                
                   child.forEach(function(child2){ 
                       var date1 = child2.key;
                       var date = child2.key.split(' ');
                       var archive = child2.val()['archived'];
                       if(date[0] <= archive2 && date[0] >= archive1){
                            flagSet = {archived: 'true'}
                            dbRef.child(child.key).child(child2.key).update(flagSet);
                    
                        };
                    })
            })
        })
 
}



function addQuestion(){
    var divider = document.createElement('div');
    divider.setAttribute('class', 'draggable');
    divider.setAttribute('draggable', 'true');
    var quest = document.getElementById('questions').value;
    console.log(quest);

    var ul = document.getElementById('ulID');
    divider.innerHTML = `<li class="list-group-item">
    <div class="form-row">
        <div class="col-8">
            <div contenteditable="true">`+quest+`</div>
        </div>
        <div class="col-2">
            <form class="form2" action="">
                <div class="form-group row">
                    <div class="custom-control custom-radio" style="margin-right: 10px;">
                        <input class="form-check-input radio-inline qrbtA" type="radio" name="exampleRadios" value="option1" checked>
                        <label class="form-check-label" for="exampleRadios1">
                            A
                        </label> 
                    </div>
                    <div class="custom-control custom-radio">
                        <input class="form-check-input radio-inline qrbtB" type="radio" name="exampleRadios" value="option2">
                        <label class="form-check-label" for="exampleRadios1">
                            B
                        </label> 
                    </div>
                </div>
            </form>
        </div>
        <div class="col-2 default">
            <span onclick="deleteQuestion(event);" class="material-icons">delete</span>
            <span class="material-icons moveUp">keyboard_arrow_up</span>
            <span class="material-icons moveDown">keyboard_arrow_down</span>
        </div>
    </div>
</li>`;
    
    if(quest != ""){
        ul.appendChild(divider);
    } else {
        window.alert('Error');
    }
}


function deleteQuestion(event){
    let remove = event.target.parentNode;
    remove.parentNode.parentNode.remove();
    event.stopPropagation();
}

$(document).on('click', '.moveUp', function(){
    $(this).parents('.draggable').insertBefore($(this).parents('.draggable').prev());
})
$(document).on('click', '.moveDown', function(){
    $(this).parents('.draggable').insertAfter($(this).parents('.draggable').next());
})




function updateQuestions(){

    
    var list = document.getElementById("ulID").getElementsByTagName("li");
    var contenteditable = document.querySelectorAll('[contenteditable]');
    

    var radioA = document.getElementsByClassName('qrbtA');
    var radioB = document.getElementsByClassName('qrbtB');

    var db = firebase.database().ref();
    var dbRef = db.child('questionStorage/questions');
    dbRef.remove();

    for(j=0; j< list.length; j++){

        console.log(j+1);
        var item = contenteditable[j].innerText;
        console.log(item);
        var newRef = dbRef.child(j+1);

        if(radioA[j].checked){
            newRef.set({text: item, kind: 'A'})
        } else if(radioB[j].checked){
            newRef.set({text: item, kind: 'B'})
        } 
    }

    var always = {appearance: 'always'};
    var once = {appearance: 'once'};

    if(document.getElementById('always').checked){
        db.child('questionStorage').update(always);
        window.alert('Data has been updated');
    } else if( document.getElementById('once').checked){
        db.child('questionStorage').update(once);
        window.alert('Data has been updated');
    }
}
