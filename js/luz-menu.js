console.log("sim");
window.addEventListener("scroll",function (event) {
	event.preventDefault();

	var menuSobre=document.getElementById("sobremim-id");
	var menuTecnologias=document.getElementById("tecnologias-id");
	var menuProjetos=document.getElementById("projetos-id");
	var menuFalecomigo=document.getElementById("falecomigoli-id");
	var sobrecontainer=document.getElementById("container-sobre-mim");


	var scrollMenu = window.scrollY;
	console.log(scrollMenu);
	if (scrollMenu >100){


		menuSobre.classList.remove("menu-aceso");

	}
	if (scrollMenu >350){

		console.log("acender");
		menuSobre.classList.add("menu-aceso");
		menuTecnologias.classList.remove("menu-aceso");

	}
	if (scrollMenu >1310){
		menuSobre.classList.remove("menu-aceso");
		//console.log("acender");
		menuTecnologias.classList.add("menu-aceso");
		menuProjetos.classList.remove("menu-aceso");
	}
	if (scrollMenu >2150){
		menuTecnologias.classList.remove("menu-aceso");
		//console.log("acender");
		menuProjetos.classList.add("menu-aceso");
		menuFalecomigo.classList.remove("menu-aceso");

	}
	if (scrollMenu >2409){
		menuProjetos.classList.remove("menu-aceso");
		//console.log("acender");
		menuFalecomigo.classList.add("menu-aceso");

	}



});