const boton = document.querySelector('#boton');
const nombre = document.querySelector('#nombre');
const ciudad = document.querySelector('#ciudad');
const foto = document.querySelector('#foto-cliente');

const generarUsuario = async () => {

    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first + " " + datos.name.last;
    ciudad.textContent = datos.location.city + ", " + datos.location.country;
}

document.addEventListener('DOMContentLoaded', generarUsuario);
boton.addEventListener('click', generarUsuario);