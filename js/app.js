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
        
         // Cuando eliminas un curso dentro del carrito "Eliminar curso"
         carrito.addEventListener('click',eliminarCurso);
    }


    //funciones

    function agregarCurso(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const cursoSeleccionado = e.target.parentElement.parentElement;
            leerDatosCurso(cursoSeleccionado);

        }
    }

    //Elimina un curso del carrito

    function eliminarCurso(e) {

        if(e.target.classList.contains('borrar-curso')){
            const cursoId = e.target.getAttribute('data-id')

            //Eliminas del arreglo de articulosCarrito por el data-id
            articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

            // Imprimes el HTML excepto los cursos eliminados
            carritoHTML();

        }  
    }

    
    // Lee el contenido del Html al dar click y extrae la información

    function leerDatosCurso(curso){

        //Creando objeto con el contenido del Curso Seleccionado

        const infoCurso = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id:curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }

      //Revisa si un elemento ya existe en el carrito
        const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);

        if(existe){
            // Actualizamos la cantidad
           const cursos= articulosCarrito.map(curso => 
            {

                if(curso.id === infoCurso.id){
                    curso.cantidad++;
                    return curso;// retorna el objeto actualizando
                }else{
                    return curso; // retorna los objetos que no son duplicados
                }
            });

           articulosCarrito = [...cursos];

        }else{
            //Agrega elementos al carrito
            articulosCarrito = [...articulosCarrito,infoCurso];
              
        }

        carritoHTML();

    }


    //muestra el Carrito de Compras en el HTML 

    function carritoHTML(){

        //Limpiar el HTML
        limpiarHTML();


        //Recorre el carrito y genera el HTML
        articulosCarrito.forEach( curso =>{
            const {imagen,titulo,precio,cantidad,id} = curso
            const row = document.createElement('tr');
            row.innerHTML = `
            <td><img src="${imagen}" width="100"></td> 
            <td>${titulo}</td> 
            <td> ${precio}</td>
            <td> ${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> x </td>
            `;
            

            //Agrega el Html del carrito n el tbody

            contenedorCarrito.appendChild(row);

        })

    }



    //Elimina los cursos del tbody

    function limpiarHTML(){

        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        }
    }