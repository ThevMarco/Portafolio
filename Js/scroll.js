window.onload = () => {
    let links = document.querySelectorAll('.nav-link')
    let linksLogo = document.querySelectorAll('.logo')
    
    let inicio = linksLogo[0]
    inicio.addEventListener('click',()=>{
        scrollSuave('#inicio', 100, 91)
    })

    let sobreMi = links[0]
    sobreMi.addEventListener('click', () => {
      scrollSuave('#sobremi', 100, 91)
    })
  
    let proyectos = links[1]
    proyectos.addEventListener('click', () => {
      scrollSuave('#proyectos', 100, 91)
    })
  
    let contacto = links[2]
    contacto.addEventListener('click', () => {
      scrollSuave('#contacto', 100, 91)
    })
  }
  
  
  const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
  

    const animacion = tiempoAhora => {
      if (tiempoInicial === null) tiempoInicial = tiempoAhora
      tiempoPasado = tiempoAhora - tiempoInicial
      let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
      window.scrollTo(0, auxAnimacion)
      if (tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
  }
  



  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;                  // Dividimos el tiempo transcurrido por la mitad de la duración
    if (t < 1) {                 // Si el tiempo es menor que 1, aplicamos una función "ease-in"
      return c / 2 * t * t + b;  // Fórmula para "ease-in"
    } else {                     // Si el tiempo es mayor o igual a 1, aplicamos una función "ease-out"
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b; // Fórmula para "ease-out"
    }
  }
  