window.addEventListener("scroll",function (event) {
	event.preventDefault();
	var scrollTop = window.scrollY;
	var t;
	if (scrollTop){
		var barraPreta = document.querySelector(".barra-preta");
		var menuLista = document.querySelector(".nav-bar");
		var teste1 = document.getElementById("container-sobre-mim");


		var sobre1 = document.getElementById("caixa-principal-sobre");

		var sobre2 = document.getElementById("caixa-sobre2");

		// sobre2.innerHTML="asdad";
		var sobre3 = document.getElementById("caixa-sobre3");

		barraPreta.classList.add("barra-preta-comprimida");
		menuLista.classList.add("menu-comprimido");

			if (scrollTop>252){
			barraPreta.classList.replace("barra-preta-comprimida","barra-preta-extendida");
			menuLista.classList.replace("menu-comprimido","menu-extendido");
				if (scrollTop>200) {


						sobre1.classList.add("aparecendo2");
						sobre2.classList.add("aparecendo3")
						sobre3.classList.add("aparecendo4");




						teste1.classList.add("aparecendo");
				}
			}
		    if (scrollTop<250) {
			    barraPreta.classList.replace("barra-preta-extendida","barra-preta-comprimida");
			    menuLista.classList.replace("menu-extendido","menu-comprimido");
			}
		if (scrollTop<100) {
			sobre1.classList.remove("aparecendo2");
			sobre2.classList.remove("aparecendo3")
			sobre3.classList.remove("aparecendo4");




			teste1.classList.add("aparecendo");
		}
	}

	// var teste = document.querySelectorAll(".entrada-nomes");
	// teste.classList.add("aparecendo");
	//






















	console.log(scrollTop);
});

