document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".ocultar");
    const navList = document.querySelector(".listado");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});
/*var visible = false;
function efecto(){
    let aux = document.querySelector('.ocultar');
    aux.addEventListener('click', mostrarmenu());
}
function mostrarmenu(){
    let aux = document.querySelector('.listado');
    if (!visible){
        aux.style.display = "flex";
        visible = true;
    }else{
        aux.style.display="none";
        visible = false;
    }
}
window.addEventListener('resize', function(){
    let menulistado =  document.querySelector(".listado");
    let anchoventana = this.window.innerWidth;
    if(anchoventana > 767){
        menulistado.style.display = "flex";
        visible = true;
    }else{
        menulistado.style.display = "none";
        visible = false;
    }
})
*/
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