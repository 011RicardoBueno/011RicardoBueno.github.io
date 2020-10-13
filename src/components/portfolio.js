import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Portfolio = () => {

    const data = useStaticQuery(graphql`{
        posts:allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 6) {
          edges {
            node {
              localFile {
                childImageSharp {
                  fluid (maxWidth: 720, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              id
              likes
              caption
            }
          }
        }
      }
    `)

    return (
        <section id='portfolio'>
        <div className='text'>
            <h1>Confira nossos trabalhos mais recentes</h1>
            <p>Confira nossos trabalhos mais recentes</p>
        </div>
        
        <div className='instagram-posts'>
        {data.posts.edges.map(({node}, idx) => (
            <div className='single-post' key={node.id}>
            
            <Img fluid={data.posts.edges[idx].node.localFile.childImageSharp.fluid} alt='posts instagram' />
            <p className='likes'>{node.likes} <span role='img' aria-label='emoji'>&#10084;</span> </p>
            
            </div>
    ))
        }
        </div>
        </section>
    )
}

export default Portfolio