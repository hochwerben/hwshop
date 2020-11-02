import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { ThemeTitle } from '~/utils/styles'

const Banner = ({ title, leistung, maxWidth }) => {
  // let maximumWidth
  // if (maxWidth) {
  //   maximumWidth = maxWidth + '%'
  // } else {
  //   maximumWidth = '80%'
  // }

  const data = useStaticQuery(graphql`
    {
      masken: file(
        relativePath: { eq: "kompetenzen/werbetraeger/masken.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shirts: file(
        relativePath: { eq: "kompetenzen/werbetraeger/shirts.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flugzeugtrolleys: file(
        relativePath: { eq: "kompetenzen/werbetraeger/flugzeugtrolleys.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      banner: file(
        relativePath: { eq: "kompetenzen/werbetraeger/banner.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bauzaunbanner: file(
        relativePath: { eq: "kompetenzen/werbetraeger/bauzaunbanner.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lkwBeschriftung: file(
        relativePath: { eq: "kompetenzen/digitaldruck/lkw-beschriftung.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lkwGrafiken: file(
        relativePath: { eq: "kompetenzen/digitaldruck/lkw-grafiken.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lkwFolierung: file(
        relativePath: { eq: "kompetenzen/digitaldruck/lkw-folierung.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pkwBeschriftung: file(
        relativePath: { eq: "kompetenzen/digitaldruck/citan-banner.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pkwGrafiken: file(
        relativePath: { eq: "kompetenzen/digitaldruck/pkw-grafiken.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      schilder: file(
        relativePath: { eq: "kompetenzen/werbetraeger/aluverbund-01.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sticker: file(
        relativePath: { eq: "kompetenzen/werbetraeger/sticker-fussabdruck.png" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      transporterBeschriftung: file(
        relativePath: {
          eq: "kompetenzen/digitaldruck/transporter-beschriftung.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      transporterGrafiken: file(
        relativePath: {
          eq: "kompetenzen/digitaldruck/transporter-grafiken.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      transporterFolierung: file(
        relativePath: {
          eq: "kompetenzen/digitaldruck/transporter-folierung.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webdesign: file(
        relativePath: { eq: "kompetenzen/webdesign/responsive-design.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <ThemeTitle>{title || leistung}</ThemeTitle>
      <div>
        <Image
          fluid={data[leistung].childImageSharp.fluid}
          alt={`${leistung} Banner`}
        />
      </div>
    </div>
  )
}

export default Banner
