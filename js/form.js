
//EXPRECIONES REGULARES 
const regEx = {
    nombre: /^[a-zA-ZÁ-ÿ\s]{3,45}$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: /^[a-zA-Z\s]{3,400}$/
}

// VARIABLES
const btnEnviar = document.querySelector('#btn_enviar');
const groupForm = document.querySelector('#group__form');

//VALIDAR CAMPOS
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

eventsListener();

function eventsListener(){

    //CUANDO LA APP INICIE
    document.addEventListener('DOMContentLoaded', iniciarApp);

   //VALIDAR INPUTS
    nombre.addEventListener('blur', validarForm);
    email.addEventListener('blur', validarForm);
    message.addEventListener('blur', validarForm);

    //ENVIAR EMAIL
    groupForm.addEventListener('submit', enviarEmail);

}
//FUNCIONES
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('button__desactive');
}

//FUNCION QUE VALIDA EL FORMULARIO
function validarForm(e){
    //Elimina los errores....
    const error = document.querySelector('p.error');
    if(error){
        error.remove();
    }
    if(e.target.value.length > 0){
        e.target.classList.remove('form__incorrecto');
        e.target.classList.add('form__correcto');
    }else{
        e.target.classList.remove('form__correcto');
        e.target.classList.add('form__incorrecto');
        mostrarError('Todos los campos son obligatorios'); 
    }
    if(e.target.type === 'text'){
        if(regEx.nombre.test(e.target.value)){
            e.target.classList.remove('form__incorrecto');
            e.target.classList.add('form__correcto');
        }else{
            e.target.classList.remove('form__correcto');
            e.target.classList.add('form__incorrecto');
            mostrarError('Nombre no válido'); 
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
    if(e.target.type ==='textarea'){
        if(regEx.message.test(e.target.value)){
          e.target.classList.remove('form__incorrecto');
          e.target.classList.add('form__correcto');
      }else{
          e.target.classList.remove('form__correcto');
          e.target.classList.add('form__incorrecto');
          mostrarError('Descripción no ingresado'); 
      }
    }
    if( regEx.nombre.test(nombre.value) && regEx.email.test(email.value) && regEx.message.test(message.value)){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('button__desactive');
    }else{
        btnEnviar.disabled = true;
    }
}

function mostrarError(mensaje){
    const formButton = document.querySelector('.form__button')
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('form__incorrecto', 'error');
    mensajeError.style.border ='1.5px solid red';
    mensajeError.style.background ='red';
    mensajeError.style.padding = '10px';
    mensajeError.style.fontWeight = 500;
    mensajeError.style.fontFamily = 'Open Sans';
    mensajeError.style.marginTop= '7px';
    mensajeError.style.textAlign= 'center';

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        groupForm.insertBefore(mensajeError,formButton);
    }
} 


//ENVIA EL EMAIL

function enviarEmail(e){
    e.preventDefault();

    //Muestra el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display ='flex';

    //despues de 3 segundos Mostrar el mensaje y ocultar
    setTimeout(() => {
        spinner.style.display ='none';

        //crear mensje de envio
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje fue enviado correctamente';
        parrafo.style.border = '1.5px solid green';
        parrafo.style.background = 'green';
        parrafo.style.textAlign = 'center';
        parrafo.style.fontWeight = 500;
        parrafo.style.fontFamily = 'Open Sans';
        parrafo.style.padding = '10px';
        
        //insertar el parrafo antes del spiner
        groupForm.insertBefore(parrafo, spinner);
        setTimeout(() => {
            parrafo.remove();
            resetform();
        }, 2000);
    }, 3000 );
  }

  function resetform(){
      document.querySelectorAll('. form__correcto').forEach( (validar) => {
          validar.classList.remove('form__correcto');
      })
      groupForm.reset();
      iniciarApp();
  }