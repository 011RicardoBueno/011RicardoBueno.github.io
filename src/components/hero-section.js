import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

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
      image:file(relativePath: {eq: "bg.png"}) {
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
        <section id='hero'>
        <main>

        <div className='hero-text'>
            <h1>Nós transformamos ideias em realidade.</h1>
            <p>Phasellus eget sem sed massa consequat ultrices vitae nec lorem. Fusce molestie turpis sit amet interdum placerat. In hac habitasse platea dictumst. Fusce iaculis ipsum neque, in viverra odio pretium fermentum.</p>
            <button>Clique aqui</button>
        </div>

        <div className='hero-image'>
            <Img fluid={data.idea.childImageSharp.fluid} alt='hero image' fadeIn={true} durationFadeIn={1250} />
        </div>

        </main>
        <BackgroundImage fluid={data.image.childImageSharp.fluid} className='hero-background' />
        </section>
    )
}



export default Hero