    const form = document.querySelector(".formulario")
    form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event){
    
        event.preventDefault();
        const formulario = new FormData(this);

        const nombre = formulario.get("nombre");
        const correo = formulario.get("correo");
        const mensaje = formulario.get("mensaje");

        if(!nombre || !correo || !mensaje){
              const Toast = Swal.mixin({
                toast: true,
                backdrop:true,
                position: 'top',
                showConfirmButton: true,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'Inválido',
                text: 'Revise los datos del formulario',
                backdrop:true
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
            const Toast = Swal.mixin({
                backdrop:true,
                toast: true,
                position: 'top',
                showConfirmButton: true,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                backdrop:true,
                icon: 'success',
                title: 'Enviado',
                text: 'Gracias, te responderé muy pronto'
              })
              this.reset()
        }
        else{
            const Toast = Swal.mixin({
                backdrop:true,
                toast: true,
                position: 'top',
                showConfirmButton: true,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                backdrop:true,
                position:'center',
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo enviar el Mensaje'
              })
              this.reset()
        }
    }
    }

