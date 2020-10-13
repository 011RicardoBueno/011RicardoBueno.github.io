import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactUs = () => {

  const { register, handleSubmit, reset } = useForm();
  const [state, setState] = React.useState({});
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })
  const onSubmit = (data, e) => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        // 'form-name': form.getAttribute('name'),
        'form-name': 'contato',
        ...state,
      }),
    })
      .then(response => {
        setFeedbackMsg(`Thanks for reaching out. I'll get back to you soon.`)
        reset()
        console.log(response)
      })
      .catch(error => {
        setFeedbackMsg("Oops, something went wrong. The form could not be submitted.")
        console.log(error)
      })
  };
  return(
    <section id='form'>
    <div className='wrapper'>
      <div className='contact-form' id='form'>
        <div className='input-fields'>
        <form onSubmit={handleSubmit(onSubmit)} netlify-honeypot='bot-field' name='contato' autoComplete='off' data-netlify="true">

        <input type="text" className='input' required="required" name="name" placeholder='Nome' onChange={handleChange} ref={register()} />
        <input type="tel" className='input' required="required" name="telefone" placeholder='(00) 0000-0000' ref={register()}/>
        <input type="email" className='input' required="required" name="email" placeholder='E-mail' ref={register({
          required: "Enter your e-mail",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Digite um e-mail válido",
          },
         })}/>
         {feedbackMsg && <p className="success">{feedbackMsg}</p>}
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