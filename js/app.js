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


    //funciones

    function agregarCurso(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const cursoSeleccionado = e.target.parentElement.parentElement;
            leerDatosCurso(cursoSeleccionado);

        }
    }
    
    // Lee el contenido del Html al dar click y extrae la información

    function leerDatosCurso(curso){

        //Creando obeto con el contenido del Curso Seleccionado

        const infoCurso = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id:curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }

        //Agrega elementos al arreglo de carrito

        articulosCarrito = [...articulosCarrito,infoCurso];

    }




