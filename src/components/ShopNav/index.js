import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const ShopNav = () => {

  const { allShopifyProduct } = useStaticQuery(graphql`
    {
      allShopifyProduct {
        nodes {
          productType
        }
      }
    }
  `)

  // const uniqueLinks = allShopifyProduct.nodes.filter((a, b) => allShopifyProduct.nodes.indexOf(a.productType) === b.productType)

  const typesArray = allShopifyProduct.nodes

  function removeDuplicateTypes(array) {
    let list = []
    array.map(({ productType }) => {
      if (!list.includes(productType)) {
        list.push(productType)
      }
    })
    return list
  }

  const uniqueLinks = removeDuplicateTypes(typesArray)

  return (
    <div>
      <ul>
        {uniqueLinks.map((type, index) => (
          <li key={index}>
            <Link to={`/shop/${type}`}>{type}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default ShopNav