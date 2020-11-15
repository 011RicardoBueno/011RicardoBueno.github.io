import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { gsap } from 'gsap'

const Portfolio = () => {

  useEffect(() => {
      let tl = gsap.timeline(
        {scrollTrigger:
           {trigger: '#portfolio',
            start: 'top center'
          }
        });

      tl.from('.single-post', 
      {
        stagger: {
          amount: '2'
        },
      opacity: '0',
      x: '-100'
      })
      .to('.single-post', { opacity: '1', x: '0'})

  },[]);

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