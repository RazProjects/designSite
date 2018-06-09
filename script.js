var body 	= document.querySelector('body');
var color1	= document.querySelector('#color1');
var color2	= document.querySelector('#color2');
var cssCode	= document.querySelector('p');

backgroundChange();
color1.addEventListener('input', backgroundChange);
color2.addEventListener('input', backgroundChange);


//function to change the background to  gradient
function backgroundChange(){
	body.style.background = 'linear-gradient(to right, '
	+color1.value
	+', '
	+color2.value
	+')';
	
	cssCode.innerHTML = "background : "+body.style.background+";";

}


var str = body.style.background;

"linear-gradient(to right, rgb(33, 147, 176), rgb(109, 213, 237))";



var menuLogo = document.querySelector('#menu').children[0];
menuLogo.addEventListener('click', function(){
	document.querySelector("#menu").children[1].classList.toggle('show');
}) 