var entrada2 = document.querySelectorAll("#nomeatos");
console.log(entrada2);
entrada2.innerHTML= "ASDAD";



function go(){

var b = document.getElementById("botao-scroll");

b.addEventListener('click', event => {

	event.preventDefault();
	b.current.scrollIntoView("#container-sobre-mim",{behavior:'smooth'});

});
}

window.addEventListener("scroll",function (event){
	event.preventDefault();
	var scrollTec = window.scrollY;
	if (scrollTec>1100){

	 	var tecnolo = document.querySelectorAll(".container-tecnologias");
	 	console.log("asdadd");
	 	var classList = "classList" in tecnolo;
	 	for (var i=0; i <tecnolo.length;i++){
	 		var child= tecnolo[i];
	 		child.classList.add("tecnologias-animation-class");
	 	}


	 }
	else{
		var tecnolo1 = document.querySelectorAll(".container-tecnologias");
		console.log("asdadd");
		var classList1 = "classList" in tecnolo1;
		for (var i=0; i <tecnolo1.length;i++){
			var child1= tecnolo1[i];
			child1.classList.remove("tecnologias-animation-class");
		}
	}



});