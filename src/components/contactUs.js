import React from 'react'

const ContactUs = () => {
    return(
        <section id='form'>
        <h1>Fale Conosco</h1>

        <form method='post' action='#' netlify netlify-honeypot='bot-field'>
        <label>
        Nome
        <input type='text' name='name' id='name' />
        </label>

        <label>
        Email 
        <input type='email' name='email' id='email' />
        </label>

        <label>
        Assunto
        <input type='text' name='subject' id='subject' />
        </label>

        <label>
        Mensagem
        <textarea name='message' id='message' rows='5' />
        </label>

        <button type='submit'>Enviar</button>
        <input type='reset' value='Limpar' />
        
        </form>
        </section>
    )
}

export default ContactUs