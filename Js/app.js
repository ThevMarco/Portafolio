window.addEventListener('load', function(){
    new Glider(document.querySelector('.slide-pro'),{
        slidesToShow:3,
        slidesToScroll:3,
        dots:'.indicadores',
        arrows:{
            prev:'.flecha-izquierda',
            next:'.flecha-derecha'
        }
    })
})