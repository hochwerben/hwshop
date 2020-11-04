import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  KompetenzenContainer,
  ImageContainer,
  ImageTitle,
  Price,
} from '../styles'
import Title from '~/components/Title'

const Digitaldruck = () => {
  const data = useStaticQuery(graphql`
    {
      pkwBeschriftung: file(
        relativePath: { eq: "kompetenzen/digitaldruck/pkw-beschriftung.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      pkwGrafiken: file(
        relativePath: { eq: "kompetenzen/digitaldruck/pkw-grafiken.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      transporterBeschriftung: file(
        relativePath: {
          eq: "kompetenzen/digitaldruck/transporter-beschriftung.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      transporterGrafiken: file(
        relativePath: {
          eq: "kompetenzen/digitaldruck/transporter-grafiken.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      # transporterFolierung: file(
      #   relativePath: {
      #     eq: "kompetenzen/digitaldruck/transporter-folierung.jpg"
      #   }
      # ) {
      #   childImageSharp {
      #     fluid(quality: 90, maxWidth: 1100) {
      #       ...GatsbyImageSharpFluid
      #     }
      #     id
      #   }
      # }
      lkwBeschriftung: file(
        relativePath: { eq: "kompetenzen/digitaldruck/lkw-beschriftung.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      # lkwGrafiken: file(
      #   relativePath: { eq: "kompetenzen/digitaldruck/lkw-grafiken.jpg" }
      # ) {
      #   childImageSharp {
      #     fluid(quality: 90, maxWidth: 1100) {
      #       ...GatsbyImageSharpFluid
      #     }
      #     id
      #   }
      # }
      lkwFolierung: file(
        relativePath: { eq: "kompetenzen/digitaldruck/lkw-folierung.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
  `)

  const ddContent = [
    {
      text: 'PKW-',
      textSecond: 'Beschriftung',
      textFull: 'PKW-Beschriftung',
      price: 99,
      image: data.pkwBeschriftung.childImageSharp.fluid,
      id: data.pkwBeschriftung.childImageSharp.id,
      link: '/pkw-beschriftung',
      alt: 'Auto beschriftet mit Firmenlogo bzw. eigenem Design',
    },
    {
      text: 'PKW-',
      textSecond: 'Grafiken',
      textFull: 'PKW-Grafiken',
      price: 285,
      image: data.pkwGrafiken.childImageSharp.fluid,
      id: data.pkwGrafiken.childImageSharp.id,
      link: '/pkw-grafiken',
      alt: 'Auto foliert mit Grafiken und Firmenlogo',
    },
    {
      text: 'Transporter-',
      textSecond: 'Beschriftung',
      textFull: 'Transporter-Beschriftung',
      price: 285,
      image: data.transporterBeschriftung.childImageSharp.fluid,
      id: data.transporterBeschriftung.childImageSharp.id,
      link: '/transporter-beschriftung',
      alt: 'Kleintransporter beschriftet mit Firmenlogo bzw. eigenem Design',
    },
    {
      text: 'Transporter-',
      textSecond: 'Grafiken',
      textFull: 'Transporter-Grafiken',
      price: 469,
      image: data.transporterGrafiken.childImageSharp.fluid,
      id: data.transporterGrafiken.childImageSharp.id,
      link: '/transporter-grafiken',
      alt: 'Kleintransporter foliert mit Grafiken und Firmenlogo',
    },
    {
      text: 'LKW-',
      textSecond: 'Beschriftung',
      textFull: 'LKW-Beschriftung',
      price: 729,
      image: data.lkwBeschriftung.childImageSharp.fluid,
      id: data.lkwBeschriftung.childImageSharp.id,
      link: '/lkw-beschriftung',
      alt: 'LKW beschriftet mit Firmenlogo bzw. eigenem Design',
    },
    {
      text: 'LKW-',
      textSecond: 'Folierung',
      textFull: 'LKW-Folierung',
      price: 1490,
      image: data.lkwFolierung.childImageSharp.fluid,
      id: data.lkwFolierung.childImageSharp.id,
      link: '/lkw-folierung',
      alt: 'LKW komplett foliert mit Design nach Wunsch',
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: false,
  }

  return (
    <KompetenzenContainer name="Digitaldruck" id="digitaldruck">
      <Title title={'Digitaldruck'} />
      <div>
        <Slider {...settings}>
          {ddContent.map(({ id, image, alt, link, textFull, price }) => (
            <ImageContainer key={id}>
              <Image fluid={image} alt={alt} />
              <Link to={`/leistungen${link}`} as="div">
                <ImageTitle>{textFull}</ImageTitle>
              </Link>
              <Price>ab € {price}</Price>
            </ImageContainer>
          ))}
        </Slider>
      </div>
    </KompetenzenContainer>
  )
}

export default Digitaldruck
