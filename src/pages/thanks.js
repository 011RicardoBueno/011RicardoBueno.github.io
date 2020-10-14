import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import logo from '../images/z11.svg'

const ThankYou = () => {
    const data = useStaticQuery(graphql`
    {
        image:file(relativePath: {eq: "success.png"}) {
          id
          childImageSharp {
            fluid (maxWidth: 1240, quality: 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
      } 
    `)
    return(
        <section id='thanks'>
            <div  className='logo-thanks' >
            <img src={logo} alt='zero11web logo'/>
                <h2>Obrigado por entrar em contato</h2>
                <p>Nossa equipe entrará em contato em breve.</p>
                <button> <Link to='/'>Voltar</Link></button>
            </div>

            <div classname='bg-thanks'>
            <Img fluid={data.image.childImageSharp.fluid} alt='success'  />
            </div>
        </section>
    )
}

export default ThankYou