import { async } from "q";

const jokeUrl = `https://api.chucknorris.io/jokes/random`;
const userUrl = `https://reqres.in/api/users?page=2`;

const obtenerChiste = async() => {

    try {
        const resp = await fetch(jokeUrl);
    
        if( !resp.ok) throw 'No se pudo realizar la petcion';
    
        const { icon_url, id, value} = await resp.json();

        return {icon_url, id, value};

    } catch (error) {
        throw error;
    }

}


const obtenerUsuarios = async() => {

    const respuesta = await fetch(userUrl);
    const {data: usuarios} = await respuesta.json();

    return usuarios;
}










export {
    obtenerChiste,
    obtenerUsuarios,
}