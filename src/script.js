const carrito = document.getElementById('carrito');
const elementos1=document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn= document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){

    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento= {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

//FUNCION PARA INSERTAR PRODUCTO AL CARRITO DE COMPRAS
function insertarCarrito(elemento){

    const row = document.createElement('tr');
    row.innerHTML=`
    <td>
        <img src="${elemento.imagen}" width=100 />
        </td>

        <td>
        ${elemento.titulo}
        </td>

        <td>
        ${elemento.precio}
        </td>

        <td>
        <a href="#" class="borrar" data-id="${elemento.id}">X </a>
        </td>
    `;
    lista.appendChild(row);
}

//FUNCION PARA ELIMINAR UN ELEMENTO DEL CARRITO
function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
        if(e.target.classList.contains('borrar')){
            e.target.parentElement.parentElement.remove();
            elemento= e.target.parentElement.parentElement;
            elementoId= elemento.querySelector('a').getAttribute('data-id');
        }
}

// FUNCION PARA VACIAR EL CARRITO
function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}

//INTENTO FALLIDO DE QUERER AGREGAR UN MAPA
var map = L.map('map').setView([40.7128, -74.0060], 15); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.7128, -74.0060]).addTo(map)
    .bindPopup('Dirección: 123 Calle Principal, Ciudad, País')
    .openPopup();