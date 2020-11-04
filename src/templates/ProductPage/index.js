import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles'
import { ProductTitle, ProductDescription, MainImage, VariantsGallery } from './styles'
// import OptionPicker from '~/components/OptionPicker'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Container>
        <div style={{ minHeight: '60vh' }}>
          <TwoColumnGrid>
            <GridLeft>
              <MainImage>
                <Img
                  fluid={product.images[0].localFile.childImageSharp.fluid}
                  alt={product.images[0].}

                />
              </MainImage>
              <VariantsGallery>
                {product.images.map(image => (
                  <Img
                    fluid={image.localFile.childImageSharp.fluid}
                    key={image.id}
                    alt={product.title}
                  />
                ))}
              </VariantsGallery>
            </GridLeft>
            <GridRight>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              <ProductForm product={product} />
            </GridRight>
          </TwoColumnGrid>
        </div>
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProductPage
