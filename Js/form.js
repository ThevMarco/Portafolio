    const form = document.querySelector(".formulario")
    form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event){
    
        event.preventDefault();
        const formulario = new FormData(this);

        const nombre = formulario.get("nombre");
        const correo = formulario.get("correo");
        const mensaje = formulario.get("mensaje");

        if(!nombre || !correo || !mensaje){
            Swal.fire({
                position:'center',
                backdrop:'true',
                icon: 'error',
                title: 'Inválido',
                text: 'Revise los datos del formulario',
                padding:'3rem'
              })
    
        }
        else{
        const response = await fetch(this.action, {
            method: this.method,
            body:formulario,
            headers:{
                'Accept':'application/json'
            }
        })
    
        if(response.ok){
            
            Swal.fire({
    
                position:'center',
                backdrop:'true',
                icon: 'success',
                title: 'Enviado',
                text: 'Gracias, te responderé muy pronto',
                padding:'3rem'
              })
              this.reset()
        }
        else{
    
            Swal.fire({
                position:'center',
                backdrop:'true',
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo enviar el Mensaje',
                padding:'3rem'
              })
              this.reset()
        }
    }
    }

