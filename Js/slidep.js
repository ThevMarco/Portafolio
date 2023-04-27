const fila = document.querySelector('.slider-proyecto');
const imgs = document.querySelectorAll('.sli');

const flechaleft = document.getElementById('flecha-izquierda');
const flecharight = document.getElementById('flecha-derecha');







//    Even Listener para la flecha derecha...  //
flecharight.addEventListener('click', ()=>{
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});



//    Event Listener para la flecha izquierda...    //
flechaleft.addEventListener('click', ()=>{
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});




//     Paginación     //
const numberImg = Math.ceil(imgs.length / 3);
for(let i = 0; i < numberImg; i++){
    const indicador = document.createElement('button');

    if(i===0){
        indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e)=>{
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}
