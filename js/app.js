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
}) //Usualmente vamos a utilizar este porque es mas rápido


console.log(5);


//Seleccionar elementos y asociarles un evento 
//Evento Click
// const btnEnviar = document.querySelector(".boton--primario");

// btnEnviar.addEventListener("click", function(evento) {
//     console.log(evento);
//     evento.preventDefault();//Este funciona para que cuando interactuemos con un evento no se recargue automáticamente
//     //Es util cuando queremos validar un formulario 
//     console.log("Enviando formulario");
// })


// Eventos de los Inputs y Textarea 
// Con esta sintaxis podemos mostrar en la consola todo lo que el usuario escribe en ese campo
// const nombre = document.querySelector("#nombre");
// nombre.addEventListener("input",function(evento) {
//     console.log(evento.target.value)
// });



//Mostrar el contenido de varios campos a la vez 
//Mostrar cada contenido en su campo 
const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);



function leerTexto(evento) {
    // console.log(evento.target.value)
    datos[evento.target.id] = evento.target.value;
    console.log(datos)
}



//Cuando tengas un formulario se va a utilizar Submit 
//Evento Submit
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    //Validar formulario
    const {
        nombre,
        email,
        mensaje
    } = datos;
    if (nombre === "" || email === "" || mensaje === "") {
        mostrarAlertas("Todos los campos son obligatorios", true)

        // console.log("El nombre o email están vació");


        return; //Corta la linea del código, previniendo la ejecución del código si no se cumple la función anterior 

        //Crear alerta formulario verificado 


    }


    //Enviar formulario
    mostrarAlertas("Formulario enviado correctamente")

});

// //Muestra error en pantalla 
// function mostrarError(mensaje) {
//     const error = document.createElement("p");
//     error.textContent = mensaje;
//     error.classList.add("error")

//     formulario.appendChild ( error );

//     //Desaparezca el alerta después de 5seg
//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }

// //Muestra formulario enviado
// function mostrarMensaje(mensaje) {
//     const alerta = document.createElement("p");
//     alerta.textContent = mensaje;
//     alerta.classList.add("correcto")

//     formulario.appendChild ( alerta );

//     //Desaparezca el alerta después de 5seg
//     setTimeout(() => {
//         alerta.remove();
//     }, 5000);
// }


//Alertas simplificadas 
function mostrarAlertas(mensaje, error = null) {
    const alerta = document.createElement("P")
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add("error")
    } else {
        alerta.classList.add("correcto")
    }

    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}