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

const Werbetraeger = () => {
  const data = useStaticQuery(graphql`
    {
      shirts: file(
        relativePath: { eq: "kompetenzen/werbetraeger/shirts.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      haengeschild: file(
        relativePath: { eq: "kompetenzen/werbetraeger/haengeschild-01.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      schild: file(
        relativePath: { eq: "kompetenzen/werbetraeger/aluverbund-01.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      bauzaunbanner: file(
        relativePath: { eq: "kompetenzen/werbetraeger/bauzaunbanner.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      banner: file(
        relativePath: { eq: "kompetenzen/werbetraeger/banner.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      sticker: file(
        relativePath: { eq: "kompetenzen/werbetraeger/sticker-fussabdruck.png" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
  `)

  const wtContent = [
    {
      text: 'Schilder',
      textFull: 'Schilder',
      price: '29',
      image: data.schild.childImageSharp.fluid,
      id: data.schild.childImageSharp.id,
      link: '/schilder',
      alt: 'Aluverbund Schilder mit individuellem Motiv',
    },
    {
      text: 'Banner',
      textFull: 'Banner',
      price: '69',
      image: data.banner.childImageSharp.fluid,
      id: data.banner.childImageSharp.id,
      link: '/banner',
      alt: 'Werbebanner für drinnen und draußen (z.B. Bauzäune)',
    },
    {
      text: 'Bauzaunbanner',
      textFull: 'Bauzaunbanner',
      price: '95',
      image: data.bauzaunbanner.childImageSharp.fluid,
      id: data.bauzaunbanner.childImageSharp.id,
      link: '/bauzaunbanner',
      alt: 'Bauzaunbanner als Werbeträger für die Baustelle',
    },
    {
      text: 'Sticker',
      textFull: 'Sticker',
      price: '11.95',
      image: data.sticker.childImageSharp.fluid,
      id: data.sticker.childImageSharp.id,
      link: '/sticker',
      alt:
        'Sticker für drinnen und draußen. Corona-Sticker für Sicherheit und Hygiene.',
    },
    {
      text: 'T-Shirts',
      textFull: 'T-Shirts',
      price: '19.90',
      image: data.shirts.childImageSharp.fluid,
      id: data.shirts.childImageSharp.id,
      link: '/t-shirts',
      alt: 'T-Shirts mit individuellen Motiven.',
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
    <KompetenzenContainer name="Werbeträger" id="werbetraeger">
      <Title title={'Werbeträger'} />
      <div>
        <Slider {...settings}>
          {wtContent.map(({ id, image, alt, link, textFull, price }) => (
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

export default Werbetraeger
