import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import SEO from '~/components/seo'

export default ({
  data: {
    allContentfulPost: { edges },
  },
}) => {
  return (
    <>
      <SEO
        title="Referenzen"
        description="LKW-Folierung, Schilder oder Webdesign. Hier erhalten Sie eine Übersicht unserer Projekte und Arbeiten."
      />
      <section>
        <h3>referenzen</h3>

        <div>
          {edges.map(
            ({
              node: {
                id,
                title,
                slug,
                featuredImage: { fluid },
              },
            }) => (
              <div key={id}>
                <Link to={`/referenzen/${slug}`}>
                  <Image
                    fluid={fluid}
                    alt="Referenz"
                    className="leistungen-grid"
                  />
                  <span>{title}</span>
                </Link>
              </div>
            )
          )}
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    allContentfulPost(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          slug
          id
          title
          createdAt
          updatedAt
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
