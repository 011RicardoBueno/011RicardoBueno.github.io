import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Hero = () => {
    const data = useStaticQuery(graphql`{
      idea:file(relativePath: {eq: "idea.png"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }   
  `)
    return(
      <main>
        <section id='hero'>
        
        <div className='hero-text'>
            <h1>Nós transformamos ideias em realidade</h1>
            <p>Phasellus eget sem sed massa consequat ultrices vitae nec lorem. Fusce molestie turpis sit amet interdum placerat. In hac habitasse platea dictumst. Fusce iaculis ipsum neque, in viverra odio pretium fermentum.</p>
            <button>Clique aqui</button>
        </div>

        <div className='hero-image'>
            <Img fluid={data.idea.childImageSharp.fluid} alt='hero image' />
        </div>
        
        </section>
        </main>
    )
}



export default Hero