import React, { useContext } from 'react'
import { graphql, Link } from 'gatsby'
import ShopNav from '~/components/ShopNav'

import StoreContext from '~/context/StoreContext'

import SEO from '~/components/seo'
import { Grid, Product, Title, PriceTag, ImgContainer } from '~/components/ProductGrid/styles'
import { Img } from '~/utils/styles'


const ProductTypePage = ({ data, pageContext }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const products = data.allShopifyProduct

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <>
      <SEO title={pageContext.type} />
      <ShopNav />
      <Grid>
        {products.edges ? (
          products.edges.map(
            ({
              node: {
                id,
                handle,
                title,
                images: [firstImage],
                variants: [firstVariant],
              },
            }) => (
                <Product key={id}>
                  <Link to={`/produkt/${handle}/`}>
                    {firstImage && firstImage.localFile && (
                      <ImgContainer>
                        <Img
                          fixed={firstImage.localFile.childImageSharp.fixed}
                          alt={handle}
                        />
                      </ImgContainer>
                    )}
                  </Link>
                  <Title>{title}</Title>
                  <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
                </Product>
              )
          )
        ) : (
            <p>No Products found!</p>
          )}
      </Grid>
    </>
  )
}

export const query = graphql`
  query ProductTypeQuery($productType: String!) {
    allShopifyProduct(filter: {productType: {regex: $productType} }) {
      edges {
        node {
          id
          title
          handle
          images {
            id
            originalSrc
            localFile {
              childImageSharp {
                fixed(height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          variants {
            price
          }
        }
      }
    }
  }
`

export default ProductTypePage