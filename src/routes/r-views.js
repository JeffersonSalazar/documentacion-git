/* 
	router: almacena el requerimiento de express().Router
*/
let router = require("express").Router();

/* 
	haciendo uso del metodo get(), definimos el endpoint 
	de acceso seguido de una funcion de flecha que captura
	el requermiento del usuario y retorna una respuesta
*/
router.get("/", (req, res) => {
	/* 
		con el metodo render() definimos que vista va a
		renderizarse una vez el usuarrio haga un requerimiento
		a este enpoint, finalmente por medio de un objeto 
		pasamos el nombre de la vista
	*/
	res.render("pages/index", {
		title: "home",
	});
});

/* 
	______________________ config ______________________
*/
router.get("/git-config", (req, res) => {
	res.render("pages/git-config", {
		title: "configuracion de git",
	});
});

/* 
	______________________ init ______________________
*/
router.get("/git-init", (req, res) => {
	res.render("pages/git-init", {
		title: "inicializar un reporsitorio local",
	});
});

/* 
	______________________ add ______________________
*/
router.get("/git-add", (req, res) => {
	res.render("pages/git-add", {
		title: "agregar archivos al stagin area",
	});
});

/* 
	______________________ ignore ______________________
*/
router.get("/git-ignore", (req, res) => {
	res.render("pages/git-ignore", {
		title: "ignorando archivos",
	});
});

/* 
	______________________ commit ______________________
*/
router.get("/save-commit", (req, res) => {
	res.render("pages/save-commit", {
		title: "guardar un commit",
	});
});

router.get("/revert-commit", (req, res) => {
	res.render("pages/revert-commit", {
		title: "revertir un commit",
	});
});

router.get("/amend-commit", (req, res) => {
	res.render("pages/amend-commit", {
		title: "sobrescribir un commit",
	});
});

router.get("/reset-commit", (req, res) => {
	res.render("pages/reset-commit", {
		title: "resetiar un commit",
	});
});

router.get("/checkout-commit", (req, res) => {
	res.render("pages/checkout-commit", {
		title: "navegar a un commit",
	});
});

/* 
	______________________ log ______________________
*/
router.get("/git-log", (req, res) => {
	res.render("pages/git-log", {
		title: "detalles de los commits",
	});
});

/* 
	______________________ brach ______________________
*/
router.get("/git-branch", (req, res) => {
	res.render("pages/git-branch", {
		title: "trabajando con ramas",
	});
});

/* 
	______________________ merge ______________________
*/
router.get("/fusion-merge", (req, res) => {
	res.render("pages/fusion-merge", {
		title: "fusionando ramas",
	});
});

router.get("/conflicts-merge", (req, res) => {
	res.render("pages/conflicts-merge", {
		title: "conflictos en la fusion",
	});
});

/* 
	______________________ push ______________________
*/
router.get("/success-push", (req, res) => {
	res.render("pages/success-push", {
		title: "subiendo cambios a github",
	});
});

router.get("/conflicts-push", (req, res) => {
	res.render("pages/conflicts-push", {
		title: "conflictos en la subida",
	});
});

/* 
	______________________ clone ______________________
*/
router.get("/git-clone", (req, res) => {
	res.render("pages/git-clone", {
		title: "clonar un repositorio",
	});
});

/* 
	______________________ pull ______________________
*/
router.get("/git-pull", (req, res) => {
	res.render("pages/git-pull", {
		title: "actualizando un proyecto",
	});
});

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
