import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Portfolio = () => {

    const data = useStaticQuery(graphql`{
        posts:allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 4) {
          edges {
            node {
              localFile {
                childImageSharp {
                  fluid (maxWidth: 1024, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              id
              likes
            }
          }
        }
      }
    `)

    return (
        <section id='portfolio'>
        <div className='text'>
            <h1>Confira posts mais recentes</h1>
        </div>
        
        <div className='instagram-posts'>
        {data.posts.edges.map(({node}, idx) => (
            <div className='single-post' key={node.id}>
            
            <Img fluid={data.posts.edges[idx].node.localFile.childImageSharp.fluid} alt='posts instagram' />
              <div className='post-info'>
              <p className='likes'>{node.likes} pessoas <span role='img' aria-label='emoji'>&#10084;</span> isto. </p>
              </div>
            </div>
    ))
        }
        </div>
        </section>
    )
}

export default Portfolio