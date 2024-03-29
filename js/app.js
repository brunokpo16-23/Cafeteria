//seleccionar contenido, las 3 formas mas comunes son:
//querySelector 
//este te va a retomar ya sea ningún o hasta 1 elemento que concuerde con nuestro selector
const heading = document.querySelector(".header__texto h2");
console.log(heading);


//querySelectorAll
//este te va a retomar ya sea ningún o todos los elementos que concuerden con nuestro selector
// const enlaces = document.querySelectorAll(".navegacion a")
// console.log(enlaces);// Si queremos seleccionar uno en especifico le agregamos [] y el numero del que queramos dentro 
//Puedes modificar el texto que desees 
// enlaces[0].textContent = "Nuevo texto para enlaces"
//También puedes modificar hacia donde te llevan los enlaces
// enlaces[0].href = "http://google.com"
//También puedes agregar clases 
// enlaces[0].classList.add("nueva-clase");
//También puedes eliminar clases 
// enlaces[0].classList.remove("navegacion__enlace")


//GENERAR CÓDIGO HTML
//Enlaces 
const nuevoEnlace = document.createElement("A");
//Agregar el HREF
nuevoEnlace.href = "https://github.com/brunokpo16-23"
//Agregar el TEXTO
nuevoEnlace.textContent = "GitHub"
//Agregar la CLASE 
nuevoEnlace.classList.add("navegacion__enlace");
//Agregarlo al documento HTML
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);



//Eventos en JAVASCRIPT 
console.log(1);

//Este significa qye hay un evento asociado
window.addEventListener("load", function () { //Load espera que el JS y los archivos que dependen del HTML estén listos 
    console.log(2);
})

document.addEventListener("DOMContentLoaded", function () {
    console.log(4); //DOMContentLoaded solamente espera que se descargue el HTML, no espera al resto
})//Usualmente vamos a utilizar este porque es mas rápido


console.log(5);