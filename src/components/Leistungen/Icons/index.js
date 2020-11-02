import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { Container } from './styles'

const Icons = props => {
  const data = useStaticQuery(graphql`
    {
      b1: file(name: { eq: "icon-b1" }) {
        id
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      b1Mobile: file(name: { eq: "icon-b1" }) {
        name
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cmyk: file(name: { eq: "icon-cmyk" }) {
        id
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cmykMobile: file(name: { eq: "icon-cmyk" }) {
        name
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      inside: file(name: { eq: "icon-inside" }) {
        id
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      insideMobile: file(name: { eq: "icon-inside" }) {
        name
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      outside: file(name: { eq: "icon-outside" }) {
        id
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      outsideMobile: file(name: { eq: "icon-outside" }) {
        name
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uv: file(name: { eq: "icon-uv" }) {
        id
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uvMobile: file(name: { eq: "icon-uv" }) {
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      wind: file(name: { eq: "icon-wind" }) {
        id
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      windMobile: file(name: { eq: "icon-wind" }) {
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      {Object.keys(props).map(prop => {
        const queryString = data[prop].childImageSharp.fixed
        const queryStringName = data[prop].name
        const queryStringMobile = data[`${prop}Mobile`].childImageSharp.fixed

        return (
          <Image
            fixed={queryString}
            alt={queryStringName}
            key={data[prop].id}
          />
        )
      })}
    </Container>
  )
}

export default Icons
