import { async } from "q";

const jokeUrl = `https://api.chucknorris.io/jokes/random`;
const userUrl = `https://reqres.in/api/users?page=1`;

const cloudId = 'autwc6pa';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dx0pryfzn/upload';

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


// archivoSubir :: File
const subirImagen = async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudId);
    formData.append('file', archivoSubir);

    try {
        
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });

        if(resp.ok){
            const cloudRespuesta = await resp.json();
            // console.log(cloudRespuesta);
            return cloudRespuesta.secure_url;
        }else{
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }
}





export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen,
}