import React from 'react'
import { useForm } from 'react-hook-form'


const ContactUs = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    fetch('/thanks', {
    method: 'POST',
    body: data,
    })
    .then(data => console.log(data))
    .catch(error => alert(error));
    };
  return(
    <section id='form'>
    <div className='wrapper'>
      <div className='contact-form' id='form'>
        <div className='input-fields'>
        <form onSubmit={handleSubmit(onSubmit)} netlify-honeypot='bot-field' name='contato' autoComplete='off' data-netlify="true">

        <input type="text" className='input' required="required" name="name" placeholder='Nome' ref={register()} />
        <input type="tel" className='input' required="required" name="telefone" placeholder='(00) 0000-0000' ref={register()}/>
        <input type="email" className='input' required="required" name="email" placeholder='E-mail' ref={register({
          required: "Enter your e-mail",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Digite um e-mail válido",
          },
         })}/>
         {errors.email && <p className="error">{errors.email.message}</p>}
        <input type='text' className='input' name='subject' id='subject' placeholder='Assunto' ref={register()}/>
        <input type="hidden" name="bot-field" />

        <div className='msg'>
        <textarea placeholder='Sua mensagem' />

        <div className='form-button'>
        <button id='send-button' type='submit'>Enviar</button>
        </div>
        
        </div>
        </form> 
        </div>
        
        

      </div>  
    </div>
    </section>
  )

    
}

export default ContactUs