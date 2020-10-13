import React, { useState, useEffect } from 'react'
import Logo from '../images/z11.svg'

const Navigation = () => {

    let [ open, setOpen ] = useState(false);

useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    let myNavbar = document.getElementById('navbar');

    

    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        
        if (prevScrollPos > currentScrollPos) {
            
                myNavbar.style.transform = 'translate(0, 0)'
            }
        else {
           setTimeout(() => {
            myNavbar.style.transform = 'translate(0, -110px)'
           }, 500)
        }
        prevScrollPos = currentScrollPos;
    }
}, []);

    return(
        <nav id='navbar'>


        <div className='logo'>
            <img src={Logo} alt='logo zero11web' />
        </div>
            <ul>
                <li>
                    <a href='!#' className='nav-item'>QUEM SOMOS</a>
                </li>
                
                <li>
                    <a href='!#' className='nav-item'>PORTFÓLIO</a>
                </li>    
                
                <li>
                    <a href='!#' className='nav-item'>CONTATO</a>
                </li>
            </ul>

            
        </nav>
    )
}

export default Navigation