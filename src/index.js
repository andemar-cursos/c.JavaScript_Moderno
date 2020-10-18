import * as CRUD from './js/crud-provider';


CRUD.getUsuario(1).then(console.log);

CRUD.crearUsuario({
    name: 'andemar',
    job: 'developer'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'andemarUpdate',
    job: 'developerUpdate'
}).then(console.log);


CRUD.borrarUsuario(1).then(console.log);