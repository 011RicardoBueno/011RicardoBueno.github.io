import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Portfolio = () => {

    const data = useStaticQuery(graphql`{
        posts:allInstaNode {
          edges {
            node {
              localFile {
                childImageSharp {
                  fixed (width: 300, quality: 100) {
                    ...GatsbyImageSharpFixed
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
        <section>
        <div className='text'>
            <h1>Instagram</h1>
            <p>Confira nossos trabalhos mais recentes</p>
        </div>
        
        <div className='instagram-posts'>
        {data.posts.edges.map(({node}, idx) => (
            <div className='single-post' key={node.id}>
            
            <Img fixed={data.posts.edges[idx].node.localFile.childImageSharp.fixed} alt='posts instagram' />
            <p className='likes'>{node.likes} <span role='img' aria-label='emoji'>&#10084;</span> </p>
            
            </div>
    ))
        }
        </div>
        </section>
    )
}

export default Portfolio