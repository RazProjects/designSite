var body 	= document.querySelector('body');
var color1	= document.querySelector('#color1');
var color2	= document.querySelector('#color2');
var cssCode	= document.querySelector('p');

backgroundChange();
color1.addEventListener('input', backgroundChange);
color2.addEventListener('input', backgroundChange);



// var menuLogo = document.querySelector('#menu').children[0];
// menuLogo.addEventListener('click', function(){
// 	document.querySelector("#menu").children[1].classList.toggle('show');
// }) ;

//function to change the background to  gradient
function backgroundChange(){
	body.style.background = 'linear-gradient(to right, '
	+color1.value
	+', '
	+color2.value
	+')';
	
	cssCode.innerHTML = "background : "+body.style.background+";";
	color1.title = color1.value;
	color2.title = color2.value;

};
