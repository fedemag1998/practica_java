const suprimir = (constante,eliminar) => {
    let index = constante.indexOf(eliminar)
    if(index != -1)
    {
        constante.splice(index, 1)
    }
}


const arrayTotal = []; 
const procesadorCompra = [];
const multiplicacion = (a,b) => a*b;
const suma = (a,b,c) => a+b+c;
const clave = [];
/* Importacion de informacion de los archivos JSON */


var listadoProcesador = [];
var listadoMother = [];
var listadoPlaca = [];

$.getJSON( "./data_procesadores.json", function(json){
  listadoProcesador = json;});
$.getJSON( "./data_mothers.json", function(json){
  listadoMother = json;});
$.getJSON( "./data_placas.json", function(json){
  listadoPlaca = json;});

/* Listado de productos con sus respectivas opciones y cantidades a introducir */

let cantidad1=5;
let subtotal1=5;
let padre = document.getElementById("contenedor1");
let contenedor3 = document.createElement("article");
    contenedor3.innerHTML = `<h3> El listado de Procesadores con sus precios es el siguiente,seleccione una opcion e introduzca la cantidad a agregar al carrito: <h3>`; 
    padre.append(contenedor3);
let padre2 = document.getElementById("listado1");
let contenedor4 = document.createElement("article");
          const lista = document.querySelector(`#listado`);
          fetch("./data_procesadores.json")
            .then((res) => res.json())
            .then((data) => {data.forEach((producto) => {
                const div = document.createElement("div");
              div.innerHTML = `<p> ${producto.id}. ${producto.producto} $${producto.precio}</p>`;
              padre2.append(div);
            });
          });
          document.body.appendChild(contenedor4);
let padre3 = document.getElementById("contenedor2");
let contenedor5 = document.createElement("article");
    contenedor5.innerHTML = `<h3> El listado de Motherboards con sus precios es el siguiente,seleccione una opcion e introduzca la cantidad a agregar al carrito: <h3>`;  
    padre3.append(contenedor5);
let padre4 = document.getElementById("listado2");
let contenedor6 = document.createElement("article");
         const lista2 = document.querySelector(`#listado`);
         fetch("./data_mothers.json")
           .then((res) => res.json())
           .then((data) => {data.forEach((producto2) => {
               const div = document.createElement("div");
               div.innerHTML = `<p>${producto2.id}. ${producto2.producto} $${producto2.precio}</p>`;
               padre3.append(div);
           });
         }); document.body.appendChild(contenedor6);
let padre5 = document.getElementById("contenedor3");
let contenedor7 = document.createElement("article");
    contenedor7.innerHTML = `<h3> El listado de Placas de video con sus precios es el siguiente,seleccione una opcion e introduzca la cantidad a agregar al carrito: <h3>`;  
    padre5.append(contenedor7);
let padre6 = document.getElementById("listado3");
let contenedor8 = document.createElement("article");
          fetch("./data_placas.json")
            .then((res) => res.json())
            .then((data) => {data.forEach((producto3) => {
                const div = document.createElement("div");
                div.innerHTML = `<p>${producto3.id} ${producto3.producto} $${producto3.precio}</p>`;
                padre6.append(div);
            });
          });document.body.appendChild(contenedor8);

/* Variables del carrito declaradas */

let procesadorComp= 1;
let changoParse;
let chango;
let changoTotal;
let cantidadProcesador=0;
let motherComp= 1;
let cantidadMother=0;
let placaComp= 1;
let cantidadPlaca=0;
let total=0; let total1=0; let total2=0; let total3=0;
let total1Viejo; let total2Viejo; let total3Viejo;
let total1ViejoParse; let total2ViejoParse; let total3ViejoParse;
let totalProcesadoresNuevo; let totalMothersNuevo; let totalPlacasNuevo;

/* Cargo el carrito antes para prevenir errores */

chango = localStorage.getItem("carrito");
    changoParse= JSON.parse(chango);
    changoTotal =suma(changoParse,total,0)
    localStorage.setItem("carrito",changoTotal)

/* Listado de productos con sus respectivas opciones y cantidades a introducir */

function myFunction() 
  {
    let procesadorComp = document.getElementById("procesador").value;
    let cantidadProcesador = document.getElementById("cantidadProcesador").value;
    let motherComp = document.getElementById("mother").value;
    let cantidadMother = document.getElementById("cantidadMother").value;
    let placaComp = document.getElementById("placa").value;
    let cantidadPlaca = document.getElementById("cantidadPlaca").value;
    if(procesadorComp==0)
    {
      procesadorComp=1;
    }
    if(motherComp==0)
    {
      motherComp=1;
    }
    if(placaComp==0)
    {
     placaComp=1;
    }    
     total1= multiplicacion(listadoProcesador[procesadorComp-1].precio,cantidadProcesador);
    total1Viejo = localStorage.getItem("Total Procesadores");
    total1ViejoParse= JSON.parse(total1Viejo);
    totalProcesadoresNuevo =suma(total1ViejoParse,total1,0)
    localStorage.setItem("Total Procesadores",totalProcesadoresNuevo)
    total2= multiplicacion(listadoMother[motherComp-1].precio,cantidadMother);
    total2Viejo = localStorage.getItem("Total Mothers");
    total2ViejoParse= JSON.parse(total2Viejo);
    totalMothersNuevo =suma(total2ViejoParse,total2,0)
    localStorage.setItem("Total Mothers",totalMothersNuevo)
    total3= multiplicacion(listadoPlaca[placaComp-1].precio,cantidadPlaca);
    total3Viejo = localStorage.getItem("Total Placas");
    total3ViejoParse= JSON.parse(total3Viejo);
    totalPlacasNuevo =suma(total3ViejoParse,total3,0)
    localStorage.setItem("Total Placas",totalPlacasNuevo)
    total=suma(total1,total2,total3)
    let resultadoProcesador = document.createElement("div");
    resultadoProcesador.innerHTML = `<h3> El costo total en procesadores es de: $${totalProcesadoresNuevo}<h3>`;  
    document.body.appendChild(resultadoProcesador);
    let resultadoMother = document.createElement("div");
    resultadoMother.innerHTML = `<h3> El costo total en motherboards es de: $${totalMothersNuevo}<h3>`;  
    document.body.appendChild(resultadoMother); 
    let resultadoPlaca = document.createElement("div");
    resultadoPlaca.innerHTML = `<h3> El costo total en placas de video es de: $${totalPlacasNuevo}<h3>`;  
    document.body.appendChild(resultadoPlaca); 
    chango = localStorage.getItem("carrito");
    changoParse= JSON.parse(chango);
    changoTotal =suma(changoParse,total,0)
    localStorage.setItem("carrito",changoTotal)
    let resultadoTotal = document.createElement("div");
    resultadoTotal.innerHTML = `<h3> El costo total de su compra es de: $${changoTotal}<h3>`;  
    document.body.appendChild(resultadoTotal); 
/*     let guardarStorage =(clave, valor) => 
      {
        localStorage.setItem(clave,valor);
      }
      localStorage.setItem("procesadorComprado",JSON.stringify(listadoProcesador[procesadorComp-1]));
      localStorage.setItem("cantidadProcesadorComprado",cantidadProcesador);
       */
  }

/* Funcion de guardado del carrito */

function myFunction2() 
    {
        let carritoContenedor2 = document.createElement("div");
        carritoContenedor2.innerHTML = `<h3> Su carrito es de: $${changoTotal}<h3>`;  
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Carrito guardado con exito',
            showConfirmButton: false,
            timer: 2500
          })
        document.body.appendChild(carritoContenedor2);
    }

/* Funcion de vaciado del carrito */

function myFunction3() 
    {
        let carritoContenedor = document.createElement("div");
        if(changoTotal==null)
        {
        carritoContenedor.innerHTML = `<h3> Su carrito esta vacio actualmente<h3>`;  
        document.body.appendChild(carritoContenedor);
        }
        else{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {confirmButton: 'btn btn-success',cancelButton: 'btn btn-danger'},
            buttonsStyling: false
          })
          swalWithBootstrapButtons.fire({
            title: 'Esta seguro de que desea vaciar el carrito?',
            text: "No podra recuperar los elementos seleccionados!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, vaciar carrito!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed){
              swalWithBootstrapButtons.fire(
                'Vacio!',
                'Su carrito se ha vaciado con exito.',
                'success'
              )
              localStorage.removeItem("carrito")
              localStorage.removeItem("listadoProcesador")
              localStorage.clear();
              changoTotal=0;

            } else if (result.dismiss === Swal.DismissReason.cancel){
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Sus elementos seleccionados siguen en el carrito',
                'error'
              )
            }
          })
        document.body.appendChild(carritoContenedor);
        }
    }

  function myFunction4() 
    {
      let carritoContenedor4 = document.createElement("div");
      if(changoTotal==null)
      {
      carritoContenedor4.innerHTML = `<h3> Su carrito esta vacio actualmente<h3>`;  
      document.body.appendChild(carritoContenedor4);
      }
      if(changoTotal==0){
        carritoContenedor4.innerHTML = `<h3> Su carrito esta vacio actualmente<h3>`;  
      document.body.appendChild(carritoContenedor4);
      }
      if(changoTotal!=0){
        carritoContenedor4.innerHTML = `<h3> Su carrito es de: $${changoTotal}<h3>`;  
        document.body.appendChild(carritoContenedor4);
      }
    }