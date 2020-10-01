import React from 'react'
import Navigation from '../components/navigation'

export default function Layout ({children}) {
    return(
        <>
        <Navigation/>
        {children}
        </>        
    )
}
