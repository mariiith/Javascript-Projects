// const URL = "images/images.txt"
var json = {"items":[{
    "id": 1,
    "img": 'https:\/\/picsum.photos\/200\/300'
}, {
    "id": 2,
    "img": 'https:\/\/picsum.photos\/201\/301'
},
{
    "id": 3,
    "img": 'https:\/\/picsum.photos\/202\/302'
},
{
    "id": 4,
    "img": 'https:\/\/picsum.photos\/203\/303'
}
, {
    "id": 5,
    "img": 'https:\/\/picsum.photos\/204\/304',
},{
    "id": 6,
    "img": 'https:\/\/picsum.photos\/205\/305',
},{
	"id": 7,
    "img": 'https:\/\/picsum.photos\/206\/306',
},{
	"id": 8,
    "img": 'https:\/\/picsum.photos\/207\/307',
},{
    "id": 9,
    "img": 'https:\/\/picsum.photos\/208\/308'
}, {
    "id": 10,
    "img": 'https:\/\/picsum.photos\/209\/309'
},
{
    "id": 11,
    "img": 'https:\/\/picsum.photos\/210\/310'
},
{
    "id": 12,
    "img": 'https:\/\/picsum.photos\/211\/311'
}
, {
    "id": 13,
    "img": 'https:\/\/picsum.photos\/212\/312',
},{
    "id": 14,
    "img": 'https:\/\/picsum.photos\/213\/313',
},{
	"id": 15,
    "img": 'https:\/\/picsum.photos\/214\/314',
},{
	"id": 16,
    "img": 'https:\/\/picsum.photos\/215\/315',
}
]}

getData();

function getData(){

	let main = document.querySelector("main");
	console.log("fetch some data");
	
	// fetch(jeson)
	json.items.forEach(item => {
			let fig = document.createElement("figure");
			let img = document.createElement("img");	
			//img.src = item.img;
            img.src = "https://picsum.photos/200/300?" + (Math.random() *100);
            
			fig.appendChild(img);
			main.appendChild(fig);
		});
}

// $(window).on("load",function(){
// 	$(".loader-wrapper").fadeOut("slow");
// });

$(document).ready(function(){
	$(".button").click(function(){
		$(this).addClass("active");

		setTimeout(function(){
			$(".button").removeClass("active");
		},2000);
	});
});

