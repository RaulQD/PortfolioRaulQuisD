//EXPRECIONES REGULARES 
const regEx = {
    nombre: /^[a-zA-ZÁ-ÿ\s]{3,45}$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: /^[a-zA-Z\s]{3,400}$/
}

//GLOBALES
const btnEnviar = document.querySelector('#btn_enviar');
const groupForm = document.querySelector('#group__form');


//VARIABLES DE CADA CAMPO
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const message = document.querySelector('#message')

eventListener();
function eventListener(){
    //INICIARA LA APP CUANDO EL CONTENIDO HTML SE HAYA CARGADO COMPLETAMENTE
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //VALIDAR CAMPOS DEL FORMULARIO

    nombre.addEventListener('blur', validarForm);
    email.addEventListener('blur', validarForm);
    message.addEventListener('blur', validarForm);

    groupForm.addEventListener('submit', enviarMensaje);
}

//DESACTIVAR BOTON
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('button__desactive');
}
//VALIDAR LOS CAMPOS DEL FORMULARIO
function validarForm(e){
    const error = document.querySelector('p.error');
    if(error){
        error.remove();
    }
    if(e.target.value.length > 0){ // PARA SABER CUANTOS CARACTERES SE INGRESA EN EL CAMPO
        e.target.classList.remove('form__incorrecto');
        e.target.classList.add('form__correcto')
    }else{
        e.target.classList.remove('form__correcto');
        e.target.classList.add('form__incorrecto');

        mostrarError('Todos los datos son obligiatorios');
    }

    //VALIDANDO LOS CAMPOS POR SU TIPO
    if(e.target.type ==='text'){
        //VERIFICANDO SI HAY UNA EXPRESIÓN REGULAR PARA VALIDAR 
        if(regEx.nombre.test(e.target.value)){
            e.target.classList.remove('form__incorrecto');
            e.target.classList.add('form__correcto');
        }else{
            e.target.classList.remove('form__correcto');
            e.target.classList.add('form__incorrecto');

            mostrarError('Nombre no valido');
        }
    }
    if(e.target.type ==='email'){
        if(regEx.email.test(e.target.value)){
            e.target.classList.remove('form__incorrecto');
            e.target.classList.add('form__correcto');
        }else{
            e.target.classList.remove('form__correcto');
            e.target.classList.add('form__incorrecto');

            mostrarError('Email no válido');
        }
    }
    if(e.target.type === 'textarea'){
        if(regEx.message.test(e.target.value)){
            e.target.classList.remove('form__incorrecto');
            e.target.classList.add('form__correcto');
        }else{
            e.target.classList.remove('form__correcto');
            e.target.classList.add('form__incorrecto');

            mostrarError('Descripción no ingresada');
        }
    }
    if(regEx.nombre.test(nombre.value) && regEx.email.test(email.value) && regEx.message.test(message.value)){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('button__desactive');
    }else{
        btnEnviar.disabled = true;
    }
}
//MENSAJE DE ERROR
function mostrarError(mensaje){
    const formButton = document.querySelector('.form__button')
    //SE CREA UN MENSAJE DE ERROR Y SE AGREGA LAS CLASES
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('form__mensaje-error', 'error');

    // SE VALIDA EL MENSAJE 
    const errores = document.querySelectorAll('.error')
    if(errores.length === 0){
        groupForm.insertBefore(mensajeError,formButton);
    }
}

//ENVIAR MENSAJE

function enviarMensaje(e){
    e.preventDefault();
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    //MENSAJE DE ENVIO DE INFORMACIÓN
    setTimeout(() => {
        spinner.style.display = 'none';
        const enviarMensaje = document.createElement('p');
        enviarMensaje.textContent = 'El mensaje fue enviado correctamente';
        enviarMensaje.classList.add('form__mensaje-correcto');
        groupForm.insertBefore(enviarMensaje,spinner);

        setTimeout(() => {
            enviarMensaje.remove();
            resetBoton();
        }, 2000);
    },3000);

}
//RESETEAR BOTON ENVIAR 
function resetBoton(){
    groupForm.reset();

    iniciarApp();
}