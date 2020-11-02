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

const Webdesign = () => {
  const data = useStaticQuery(graphql`
    {
      website: file(
        relativePath: { eq: "kompetenzen/webdesign/responsive-design.jpg" }
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
    <KompetenzenContainer name="Webdesign" id="webdesign">
      <Title title={'Webdesign'} />
      <div>
        <Slider {...settings}>
          <ImageContainer>
            <Image
              fluid={data.website.childImageSharp.fluid}
              alt="Webdesign für alle Endgeräte. Responsive Design."
            />
            <Link to={`/leistungen/webdesign`} as="div">
              <ImageTitle>Webdesign</ImageTitle>
            </Link>
            <Price>ab € 799</Price>
          </ImageContainer>
        </Slider>
      </div>
    </KompetenzenContainer>
  )
}

export default Webdesign
