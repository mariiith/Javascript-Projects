$( document ).ready(function() {

// Your code

});
var current_fs, next_fs, previous_fs;
var opacity; 
var animating;

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	$(".progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			opacity = 1 - now;
			current_fs.css({
        'position': 'absolute'
      });
            next_fs.css({'opacity': opacity});
        }, 
		duration: 500, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
	$(".progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			opacity = 1 - now;
			previous_fs.css({
                'opacity': opacity});
		}, 
		duration: 500, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
    location.reload()
});

// --------- HIDE BUTTON ---------

$('.rmv').hide();

function addSomething(id){
    $('#add' + id).hide();
    $('#rmv' + id).show();
    $('#pic'+id).addClass('imgBorder');
    let ul = document.querySelector('#myUL');
    let li = document.createElement('li');
    li.innerHTML = '<div class="' + document.getElementById('add' + id).value + '">' 
    +  document.getElementById('add' + id).value + "</div>";
    ul.appendChild(li);


    let div = document.querySelector('#foodDIV');
    let dov = document.createElement('div');
    dov.setAttribute('class', 'row ' + document.getElementById('add' + id).value);
    dov.setAttribute('data-vale', $('#add' + id).attr('data-food'));
    

    let food = $('#add' + id).val();
    let foodPrize = $('#add' + id).attr('data-food');
    dov.innerHTML = food+" "+'+'+foodPrize+'€';
    div.appendChild(dov);
}

//---------- SHOW BUTTON ---------

function rmvSomething(id){
    $('#add' + id).show();
    $('#rmv' + id).hide();
    $('#pic' +id).removeClass('imgBorder');

    var classToRemove = document.getElementById('add' + id).value;
    $('.' + classToRemove)[1].parentNode.remove();
    $('.' + classToRemove)[0].parentNode.remove();

}

//-------- size -------------

function sumTotal(){
    var total =0;
    var sumBelag = document.querySelector('#lastDIV').childNodes[0].childNodes;
    for (var x = 0; x<sumBelag.length; x++){
        total += parseFloat(sumBelag[x].getAttribute('data-vale'),10);
        //console.log(sumBelag[x].getAttribute('data-vale'));
    }
    
    var sumToppings = document.querySelector('#foodDIV').childNodes;
    console.log(sumToppings);
    for(var i = 1; i<sumToppings.length;i++){
        total += parseFloat(sumToppings[i].getAttribute('data-vale'),10);
        //console.log(sumToppings[i].getAttribute('data-vale'));
    }
    console.log(total);
    $('#essen').html('Gesamtkosten: '+total +'€');
}


function selection(){
    
    var div = document.querySelector('#lastDIV');
    var dav = document.createElement('div');
    
    var size = $('#size').children('option:selected').val();
    var dough = $('#dough').children('option:selected').val();
    var sauce = $('#sauce').children('option:selected').val();

    var sizePrize = $('#size').children('option:selected').attr('data-values');
    var doughPrize = $('#dough').children('option:selected').attr('data-values');
    var saucePrize = $('#sauce').children('option:selected').attr('data-values');

    div.innerHTML = '';
    dav.innerHTML = '<div class="row" data-vale="'+$('#size').children('option:selected').attr('data-values')+'">'+size+ " " +'+'+sizePrize +'€'+'</div>' +
    '<div class="row" data-vale="'+$('#dough').children('option:selected').attr('data-values')+'">'+dough+ " " +'+'+doughPrize +'€'+'</div>' +
    '<div class="row" data-vale="'+$('#sauce').children('option:selected').attr('data-values')+'">'+sauce+ " " +'+'+saucePrize +'€'+'</div>';
    div.appendChild(dav);



     
//    var duv = document.createElement('div');
//    duv.innerHTML=sum;
//    div.appendChild(duv);

}

//-------------adresse------------

$('input[type|="radio"]').change(function() {
    if($(this).val()=='option2') {
        $('#formular').show();
    } else {
        $('#formular').hide();
    } 
});

function onTheWay(){
    alert('Ihre Pizzabestellung ist nun abgeschlossen und wird in wenigen Minuten geliefert.');
}