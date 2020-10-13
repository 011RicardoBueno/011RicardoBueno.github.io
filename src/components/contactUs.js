import React from 'react'



const ContactUs = () => {
    return(
    <section id='form'>
    <h1>Fale Conosco</h1>

    <div className='wrapper'>
      <div className='contact-form' id='form'>
        <div className='input-fields'>
        <form method='post' netlify netlify-honeypot='bot-field' name='contato' autoComplete='off'>

        <input type="text" className='input' required="required" name="name" placeholder='Nome'/>
        <input type="tel" className='input' required="required" maxlength="15" name="telefone" placeholder='(00) 0000-0000' />
        <input type="email" className='input' required="required" class="input-text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='E-mail'/>
        <input type='text' className='input' name='subject' id='subject' placeholder='Assunto' />
        <input type="hidden" name="bot-field" />

        </form> 
        </div>
        
        <div className='msg'>
        <textarea placeholder='Sua mensagem' />

        <div className='form-button'>
        <button id='send-button' type='submit'>Enviar</button>
        </div>
        
        </div>

      </div>  
    </div>
    </section>
    )
}

export default ContactUs