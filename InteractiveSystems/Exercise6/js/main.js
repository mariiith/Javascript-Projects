function dragPanel(id){
    $( "#draggable" + id).draggable();
}

function collapse(){
    $('#1').collapse();
}

var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/group?id=2885679,2953312,2192362,3369157,2950686&units=metric&appid=cdf7bf072b181822b4e2408de0489363', true);
weatherRequest.onload=function(){
    var data = JSON.parse(this.response)
            var txt = '';
        for (var x = 0; x <= data.list.length-1; x++){
            txt = '';
            txt += '<h4>'+data.list[x].name +'</h4>'+ '<br>' + 
                    'Description: ' +data.list[x].weather[0].main + '<br>' + 
                    'Visibility: ' + data.list[x].visibility + '<br>' +
                    'WindSpeed: ' + data.list[x].wind.speed + '<br>' +
                    'Temperature: ' + data.list[x].main.temp + '<br>' +
                    'Maximum Temperature: ' + data.list[x].main.temp_max + '<br>' +
                    'Minimum Temperature: ' + data.list[x].main.temp_min + '<br>' +
                    'Feels like: ' + data.list[x].main.feels_like + '<br>';


            for(var r in data.list[x].clouds){
                txt += 'Clouds: '+data.list[x].clouds[r] + '<br>'
            }

            var div = document.getElementById("drag" + x);
            var dav = document.createElement('div');

            div.innerHTML = '';
            dav.innerHTML = txt;
            div.appendChild(dav);


            var temp = data.list[x].main.temp;
            console.log(temp);
            temp = temp/30 *100;
            $('#draggable' + x).css("backgroundColor", 'hsl(0,'+ temp+'%,70%');


            
        } 
}
weatherRequest.send();


function hideWeather(id){
    var check = document.getElementById('st'+ id);
    var hider = document.getElementById('draggable'+ id);
    if (check.checked){
       hider.style.display = 'block';
    } else{
        hider.style.display = 'none';
    }
}

function hidePanel(ids){
    var hdPanel = document.getElementById('c'+ ids);
    hdPanel.style.display = 'none';
}

function showPanel(id){
    var hdPanel = document.getElementById('c'+ id);
    hdPanel.style.display = 'block';
}
