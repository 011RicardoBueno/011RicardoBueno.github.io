import React, { useState, useEffect } from 'react'
import Logo from '../images/z11.svg'

const Navigation = () => {

    const [ open, isOpen ] = useState('false');

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


        <div className='logo-wrapper'>
            <img src={Logo} alt='logo zero11web' className='logoz11' />
        </div>
            <ul>
                <li>
                    <a href='!#' className='nav-item'>PORTFÓLIO</a>
                </li>
                
                <li>
                    <a href='!#' className='nav-item'>CONTATO</a>
                </li>     
            </ul>

            
        <span className='menu-toggler'>
         <button type='button' className='hamburger' onClick={() => {
             isOpen('true');
             if(open==='true'){
                 document.querySelector('nav ul').classList.add('active')
             }
             else {
                document.querySelector('nav ul').classList.remove('active')
             }
         }}>&#9776;</button>
        </span>
        </nav>
    )
}

export default Navigation