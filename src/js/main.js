/* 
	$headerComponent: contiene el elemento HTML con ID header-component
	$headerMenuIcon: contiene el elemento HTML con ID header-menu-icon
	$menuNav: contiene el elemento HTML con ID menu-nav
*/
let $headerComponent = document.querySelector("#header-component"),
	$headerMenuIcon = document.querySelector("#header-menu-icon"),
	$menuNav = document.querySelector("#menu-nav");

/*
	_******************** start code - header scroll ********************_
*/

/* 
	definimos un evento scroll en window y declaramos una 
	funcion 
*/
window.addEventListener("scroll", function () {
	/*
		si la altura de la ventana es mayor a 0px, añadimos a 
		$headerComponent la clase js_header_scroll definida 
		en ./src/sass/style.scss
	*/
	if (this.window.pageYOffset > 0) {
		$headerComponent.classList.add("js_header_scroll");
	} else {
		/* 
            de lo contrario removemos de $headerComponent 
            la clase js_header_scroll
        */
		$headerComponent.classList.remove("js_header_scroll");
	}
});

/*
	_******************** end code - header scroll ********************_
*/

/*
	_******************** start code - show menu nav ********************_
*/

/* 
	definimos un evento click en $headerMenuIcon y declaramos una 
	funcion 
*/
$headerMenuIcon.addEventListener("click", function (e) {
	/* 
		con preventDefault prevenimos el comportamiento que tienen
		por defecto los botones
	*/
	e.preventDefault();

	/*
		añadimos a $menuNav la clase js_show_navbar definida en
		./src/sass/style.scss
	*/
	$menuNav.classList.toggle("js_show_navbar");
});

/*
	_******************** end code - show menu nav ********************_
*/

/*
	_******************** start code - active link ********************_
*/

/* 
   $aLinks: almacena todos los elementos html tag-a que estan dentro de 
   1 tag-li que esta dentro de 1 tag-ul 
*/
let $aLinks = document.querySelectorAll("ul li a");

/* 
    declaracion de la funcion activeLink
*/
function activeLink(e) {
	// e.preventDefault();

	/* 
        hacemos un recorrido forEach en $aLinks para remover de cada elemento
        la clase js_active_link definida en 'src/sass/style.scss' 
    */
	$aLinks.forEach((link) => link.classList.remove("js_active_link"));

	/* 
        añadimos la clase js_active_link definida en 'src/sass/style.scss' 
        al elemento seleccionado
    */
	this.classList.add("js_active_link");
}

/* 
    realizamos un recorrido forEach en $aLinks, pasamos un parametro
    (link) y definimos una funcion. generamos un evento CLICK
    al parametro (link) y pasamos la funcion previamente definida
*/
$aLinks.forEach((link) => link.addEventListener("click", activeLink));

/*
	_******************** end code - active link ********************_
*/
