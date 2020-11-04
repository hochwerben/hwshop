import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import SEO from '~/components/seo'
import styled from '@emotion/styled'
import { ThemeTitle } from '~/utils/styles'

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  justify-content: center;
  width: 100%;
`

const Card = styled.div`
  height: 100%;
  max-height: 200px;
  margin-bottom: 2rem;
  position: relative;

  .gatsby-image-wrapper {
    height: 200px;
  }

  span {
    position: absolute;
    bottom: 15px;
    left: 0;
    display: inline-block;
    background-color: var(--clr-primary);
    padding: 0 2rem;
    font-weight: 500;
    color: white;
    letter-spacing: 1px;
  }
`

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
        <ThemeTitle>Referenzen</ThemeTitle>

        <Grid>
          {edges.map(
            ({
              node: {
                id,
                title,
                slug,
                featuredImage: { fluid },
              },
            }) => (
                <Card key={id}>
                  <Link to={`/referenzen/${slug}`}>
                    <Image
                      fluid={fluid}
                      alt="Referenz"
                      className="leistungen-grid"
                    />
                    <span>{title}</span>
                  </Link>
                </Card>
              )
          )}
        </Grid>
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
