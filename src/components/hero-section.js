import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { TimelineLite } from 'gsap'

const Hero = () => {
    const data = useStaticQuery(graphql`{
      idea:file(relativePath: {eq: "Mobile-bro.png"}) {
        id
        childImageSharp {
          fluid (maxWidth: 1960, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }   
  `);

  let tl1 = new TimelineLite({ repeat: -1, yoyo:true, ease:'power2' })

  useEffect(() => {
    tl1.to('.hero-image', 1, { rotation: -15, rotation: 0 })
  }, [])

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