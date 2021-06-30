function clear1() {
    document.getElementById("name").value="";
}

function clear2(){
    document.getElementById("email").value="";
}

$(document).ready(function () {
    $('#click1').click(function (){
        $('html, body').animate({
        scrollTop: $("#1").offset().top
        }, 1300, 'swing')
        $('#click1').css('background-color','rgb(224, 184, 184)');
        $('#click2').css('background-color','');
        $('#click3').css('background-color','');
        $('#click4').css('background-color','');
    })
    $('#click2').click(function (){
        $('html, body').animate({
        scrollTop: $("#2").offset().top
        }, 1300, 'swing')
        $('#click1').css('background-color','');
        $('#click2').css('background-color','rgb(224, 184, 184)');
        $('#click3').css('background-color','');
        $('#click4').css('background-color','');
    })
    $('#click3').click(function (){
        $('html, body').animate({
        scrollTop: $("#3").offset().top
        }, 1300, 'swing')
        $('#click1').css('background-color','');
        $('#click2').css('background-color','');
        $('#click3').css('background-color','rgb(224, 184, 184)');
        $('#click4').css('background-color','');
    })
    $('#click4').click(function (){
        $('html, body').animate({
        scrollTop: $("#4").offset().top
        }, 1300, 'swing')
        $('#click1').css('background-color','');
        $('#click2').css('background-color','');
        $('#click3').css('background-color','');
        $('#click4').css('background-color','rgb(224, 184, 184)');
    })

    //NOT DYNAMIC
    var ab1 = $('#c1').height() + $('#1').height();
    var ab2 = $('#c2').height();
    var ab3 = $('#c3').height();
    var ab4 = $('#c4').height();
    // console.log(ab1);
    // console.log(ab2);
    // console.log(ab3);
    // console.log(ab4);

    $(window).resize(function() {
        var ab1 = $('#c1').height() + $('#1').height();
        var ab2 = $('#c2').height();
        var ab3 = $('#c3').height();
        var ab4 = $('#c4').height();
        console.log(ab1);
        console.log(ab2);
        console.log(ab3);
        console.log(ab4);
    });

    $(window).on('scroll', function(){
        var scroll = $(document).scrollTop();
        if (scroll < ab1){
            $('#click1').css('background-color','rgb(224, 184, 184)');
            $('#click2').css('background-color','');
            $('#click3').css('background-color','');
            $('#click4').css('background-color','');
        }
        if (scroll > ab1){
            $('#click1').css('background-color','');
            $('#click2').css('background-color','rgb(224, 184, 184)');
            $('#click3').css('background-color','');
            $('#click4').css('background-color','');    
        }
        if (scroll > ab2 + ab3){
            $('#click1').css('background-color','');
            $('#click2').css('background-color','');
            $('#click3').css('background-color','rgb(224, 184, 184)');
            $('#click4').css('background-color','');

        }
        if (scroll > ab1 + ab2 + ab3 + ab4){
            $('#click1').css('background-color','');
            $('#click2').css('background-color','');
            $('#click3').css('background-color','');
            $('#click4').css('background-color','rgb(224, 184, 184)');
        }
    })

});

function hamburger(){
    var burger = document.getElementById('navi');
    if (burger.className === 'navigation'){
       burger.classList.add('ham');
    } else {
        burger.className = 'navigation';
    }
}

var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
		console.log('Element is fully visible in screen');
}, { threshold: [1] });

