let visible = false;
function efecto(){
    let aux = document.querySelector('.ocultar');
    aux.addEventListener('click', mostrarmenu);
}
function mostrarmenu(){
    let aux = document.querySelector('.listado');
    if (!visible){
        aux.style.display = "flex";
        visible = true;
    }
    else
    {
        aux.style.display="none";
        visible = false;
    }
}
window.addEventListener('load', efecto);

function comprobar(){
    let apellido1=document.getElementById('apellido').value;
    let nombre1=document.getElementById('nombre').value;
    let correo1=document.getElementById('correo').value;
    let mensaje1=document.getElementById('mensaje').value;

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
    /*}while (aux == false)*/
    if(aux == true){
        alert("Mensaje enviado");
    }
}