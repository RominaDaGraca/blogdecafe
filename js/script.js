//Eventos de los input o texarea
const datos={
    nombre: '',
    email: '',
    mensaje: '',
}

const nombreInput=document.querySelector('#nombre');
const emailInput=document.querySelector('#email');
const mensajeInput=document.querySelector('#mensaje');
const formulario=document.querySelector('.formulario');

//CHANGE se activa cuando el elemento finaliza un cambio.
//INPUT para tener una validacion en tiempo real 
nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);
//EL EVENTO SUBMIT: Se va a utilizar este evento de submit en un formulario para enviarlo 
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    //VALIDAR EL FORMULARIO
    const{nombre, email, mensaje}=datos;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son Obligatorios', true);
        return; //corta la ejecucion del codigo
    }
    //crear la otra alerta de enviado correctamente
    mostrarAlerta('Mensaje enviado correctamente', );  
})

function leerTexto(e){
    //console.log(e.target.value);
    //leemos la informacion y la agregamos al arreglo datos
    datos[e.target.id]= e.target.value;
    //console.log(datos);
}

function mostrarAlerta(mensaje, error=null){
    const alerta=document.createElement('P');
    alerta.textContent=mensaje;
    if (error) {
        alerta.classList.add('error')
    }else{
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}

