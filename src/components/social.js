import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Social = () => { 
    return(
        <section id='social'>
        <h1>Siga a 011Web</h1>
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
        </section>
    )
}

export default Social