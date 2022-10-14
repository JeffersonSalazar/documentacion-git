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

router.get("/git-config", (req, res) => {
	res.render("pages/git-config", {
		title: "git config",
	});
});

router.get("/git-init", (req, res) => {
	res.render("pages/git-init", {
		title: "git init",
	});
});

router.get("/git-commit", (req, res) => {
	res.render("pages/git-commit", {
		title: "git commit",
	});
});

router.get("/git-push", (req, res) => {
	res.render("pages/git-push", {
		title: "git push",
	});
});

router.get("/git-log", (req, res) => {
	res.render("pages/git-log", {
		title: "git log",
	});
});

router.get("/git-branch", (req, res) => {
	res.render("pages/git-branch", {
		title: "git branch",
	});
});

router.get("/git-merge", (req, res) => {
	res.render("pages/git-merge", {
		title: "git merge",
	});
});

router.get("/git-pull", (req, res) => {
	res.render("pages/git-pull", {
		title: "git pull",
	});
});

router.get("/git-conflicts", (req, res) => {
	res.render("pages/git-conflicts", {
		title: "git conflicts",
	});
});

router.get("/git-clone", (req, res) => {
	res.render("pages/git-clone", {
		title: "git clone",
	});
});

router.get("/git-ignore", (req, res) => {
	res.render("pages/git-ignore", {
		title: "git ignore",
	});
});

router.get("/git-hub", (req, res) => {
	res.render("pages/git-hub", {
		title: "github",
	});
});

router.get("/git-pages", (req, res) => {
	res.render("pages/git-pages", {
		title: "github pages",
	});
});

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
