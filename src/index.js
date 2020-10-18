import * as CRUD from './js/crud-provider';


CRUD.getUsuario(1).then(console.log);

CRUD.crearUsuario({
    name: 'andemar',
    job: 'developer'
}).then(console.log);