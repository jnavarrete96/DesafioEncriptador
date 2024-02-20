//Valores de Entrada
const letrasEncriptadas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const letrasOriginales = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

const textoEncriptado = document.querySelector('.texto-encriptado'); //Seleccionar elemento padre
const imagenAviso = textoEncriptado.querySelector('.imagen-aviso'); //Seleccionar elemento hijo
const mensajeAviso = textoEncriptado.querySelector('.mensaje-aviso'); //Seleccionar elemento hijo
const copiarElementoPadre= textoEncriptado.querySelector('.copiar');

//Función para mostrar el mensaje encriptado o desencriptado

function mostrarMensaje(mensaje) {

    let botonCopiar = textoEncriptado.querySelector('#boton-copiar');


    // Ocultar los elementos imagen de aviso y el mensaje de aviso
    imagenAviso.style.display = 'none';
    mensajeAviso.style.display = 'none';

    // Verificar si el padre de encriptar elemento ya ha sido creado
    const bloqueMensaje= document.querySelector('#bloque-resultado-mensaje');
    if(!bloqueMensaje){
        // crear elementos para el encriptado o desencriptado
        const NuevobloqueMensaje=document.createElement('div');
        NuevobloqueMensaje.id='bloque-resultado-mensaje';

        const mensajeElemento = document.createElement('p');
        mensajeElemento.id='resultado-mensaje';
        //agregar los elementos al elemento padre textoEncriptado
        //Insertar antes del botón de copiar
        textoEncriptado.insertBefore(NuevobloqueMensaje,copiarElementoPadre); 
        NuevobloqueMensaje.appendChild(mensajeElemento);
    }

    //agregar el mensaje enc o desen al nuevo elemento p
    document.querySelector('#resultado-mensaje').textContent = mensaje;

    // Mostrar el botón de copiar
    botonCopiar.style.display = 'block';
}

//Función para encriptar
function encriptarMensaje() {
    let mensaje= document.getElementById('mensaje').value;
    let mensajeEncriptado=mensaje.replace(/[aeiou]/g, letra => letrasEncriptadas[letra]);
    mostrarMensaje(mensajeEncriptado);
    document.getElementById('mensaje').value=''; //Borra el contenido del textarea
}

//Función para desencriptar
function desencriptarMensaje(){
    let mensaje= document.getElementById('mensaje').value
    let mensajeDesencriptado=mensaje.replace(/(enter|imes|ai|ober|ufat)/g, letraEncriptada => letrasOriginales[letraEncriptada])
    mostrarMensaje(mensajeDesencriptado);
    document.getElementById('mensaje').value='';
}


//Función para copiar mensaje encriptado o desencriptado

function copiarMensaje() {
    let msj=document.getElementById('resultado-mensaje').textContent;
    console.log(msj);
    let elementoTemporal=document.createElement('textarea');
    elementoTemporal.value=msj

    document.body.appendChild(elementoTemporal);

    // Seleccionar y copiar el texto dentro del elemento temporal
    elementoTemporal.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(elementoTemporal);

    // Mostrar mensaje de texto copiado
    let mensajeCopiado = document.querySelector('.mensaje-copiado');
    mensajeCopiado.style.display = 'block';
  
    setTimeout(function() {
        mensajeCopiado.style.display = 'none';
    }, 750);
    
}


