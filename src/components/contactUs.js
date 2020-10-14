import React from 'react'



const ContactUs = () => {
  return(
    <section id='form'>
    <h1>Fale conosco</h1>
    <div className='wrapper'>
      <div className='contact-form' id='form'>
        <div className='input-fields'>
        <form netlify-honeypot='bot-field' name='contato' autoComplete='off' data-netlify='true'>

        <input type="text" className='input' required="required" name="name" placeholder='Nome' />
        <input type="tel" className='input' required="required" name="telefone" placeholder='(00) 0000-0000' />
        <input type="email" className='input' required="required" name="email" placeholder='E-mail' />
        <input type='text' className='input' name='subject' id='subject' placeholder='Assunto' />
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