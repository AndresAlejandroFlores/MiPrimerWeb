document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".ocultar");
    const navList = document.querySelector(".listado");
    const icono = document.querySelector(".fa-solid");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");
        icono.classList.toggle("fa-bars");
        icono.classList.toggle("fa-xmark");
    });
});

function comprobar(){
    let apellido1=document.getElementById('apellido').value;
    let nombre1=document.getElementById('nombre').value;
    let correo1=document.getElementById('correo').value;
    let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    let aux = true;

    if(apellido1==''){
        alert('No ingreso su Apellido');
        aux = false;
    }
    if(nombre1==''){
        alert('No ingreso su Nombre');
        aux = false;
    }
    if(correo1==''){
        alert('No ingreso su Correo');
        aux = false;
    }
    if (!expresion.test(correo1)){
        alert('Correo no valido');
        aux = false;
    }
    if(aux == true){
        alert("Mensaje enviado");
    }
}

function btnalert(){
    alert("¡Alerta!");
}