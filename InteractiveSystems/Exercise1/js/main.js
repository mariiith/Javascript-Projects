function results(){
       
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var street = document.getElementById('street').value;
    var housenumber = document.getElementById('housenumber').value;
    var plz = document.getElementById('plz').value;
    var city = document.getElementById('city').value;

    var interests = document.getElementById('message').value;
    var email = document.getElementById('exampleFormControlInput1').value;
    var birthday = document.getElementById('birthday').value;
    var birthmonth = document.getElementById('birthmonth').value;
    var birhtyear = document.getElementById('birthyear').value;
    

    if(document.getElementById('inlineRadio1').checked){
        gender = document.getElementById('inlineRadio1').value;
    } else if(document.getElementById('inlineRadio2').checked){
        gender = document.getElementById('inlineRadio2').value;
    } else if(document.getElementById('inlineRadio3').checked){
        gender = document.getElementById('inlineRadio3').value;
    } else {
        var gender = "I am Genderless"
    }


    if(document.getElementById('customControlAutosizing').checked == true){
        var newsletter = "Yes, I want to be spamed by your newsletter";
    } else {
        var newsletter = "No, I want to miss out on your very nice deals";
    }

    selectElement = document.querySelector('#inlineFormCustomSelect');
    country = selectElement.value;

    alert("You are now being tracked by me!!!"+"\n First Name: " + fname + "\n Second Name: " + lname + "\n Street: " + street + "\n Housenumber: " + housenumber
    + "\n PLZ: " + plz + "\n City: " + city + "\n Interests: " + interests + "\n Email: " + email + "\n Birthdate: " +
    birthday +"."+birthmonth +"."+ birhtyear + "\n Gender: " + gender + "\n Newsletter: " + newsletter);
    
}