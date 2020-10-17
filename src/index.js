const { init } = require("./js/chistes-page");
const { obtenerUsuarios } = require("./js/http-provider");

// init();
obtenerUsuarios().then(console.log);