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

