//Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
    
    function cargarEventListeners(){
        // Cuando agregas un curso presionando "Agregar al Carrito"
         listaCursos.addEventListener('click', agregarCurso);
    }



    





