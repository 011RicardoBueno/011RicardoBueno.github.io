import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const AdSection = () => {
    const data = useStaticQuery(graphql`
    {
        image:file(relativePath: {eq: "Mockup.png"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)    
        return (
            <section id='ads'>

                <div className='text'>
                <h1>Cartão de visita digital</h1>
                <p>Sed sed sagittis purus. Mauris vulputate diam eu dui imperdiet auctor. Donec placerat nisi non ante iaculis, a consequat risus auctor. Praesent molestie lacus vel felis elementum tempor. Praesent mollis lobortis arcu facilisis posuere. Sed varius leo lacus, a malesuada eros semper vitae. Nulla sed venenatis est. Sed ac odio ipsum. Fusce commodo massa eget justo efficitur faucibus. Maecenas volutpat, tortor vel posuere commodo, enim mauris commodo ipsum, vel tempor nisi felis vel nunc. </p>
                <button> Clique aqui </button>
                </div>

                <div className='image'>
                <Img fluid={data.image.childImageSharp.fluid} alt='Mockup Smartphone' />
                </div>

            </section>
        )
}

export default AdSection