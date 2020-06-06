document.addEventListener("DOMContentLoaded",function(){
	var nut1 = document.querySelector('.nut1');
	var nut2 = document.querySelector('.nut2');
	var menudown = document.querySelector('.menudown');
	nut1.addEventListener('click',function(){
		this.classList.add('hien');
		nut2.classList.add('close');
		menudown.classList.add('down');
	},false);
	nut2.addEventListener('click',function(){
		nut1.classList.remove('hien');
		nut2.classList.remove('close');
		menudown.classList.remove('down');

	},false);
	

},false);