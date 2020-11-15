import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { TimelineLite } from 'gsap'


const ContactUs = () => {

  let tl = new TimelineLite({ delay: '0.3'});

  useEffect(() => {

    tl.set('#social ul li', {opacity: 0})

    tl.to('#social ul li', {
      scrollTrigger: {
        trigger: '#social',
        toggleActions: 'restart'
      },
      opacity: '1',
      duration: '3'
    })
    
  }, [])
  return(
    <section id='form'>

    <div id='social'>
      <h1>Siga a Zero11WEB</h1>
      <ul>
        <li>
          <a href='https://www.instagram.com/011web/'> <FontAwesomeIcon icon={faInstagram} size='3x' /></a>
        </li>

        <li>
          <a href='https://www.facebook.com/zero11web'> <FontAwesomeIcon icon={faFacebookF} size='3x' /> </a>
        </li>

        <li>
          <a href='https://wa.me/5511982193349?text=Adorei%20o%20site!'> <FontAwesomeIcon icon={faWhatsapp} size='3x' /> </a>
        </li>
        
      </ul>
    </div>

    <div className='contact-form'>

      <h1>Fale conosco</h1>
      <div className='input-fields'>
        <form action='/thanks' netlify-honeypot='bot-field' name='contato' autoComplete='off' data-netlify='true'>

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
  
    </section>
  )

    
}

export default ContactUs