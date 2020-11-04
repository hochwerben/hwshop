const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      shopify: allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      contentful: allContentfulPost {
        nodes {
          slug
        }
      }
      shopifyProductTypes: allShopifyProduct {
        nodes {
          productType
        }
      }
    }
  `).then(result => {
    result.data.shopify.edges.forEach(({ node }) => {
      createPage({
        path: `/produkt/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })

    result.data.contentful.nodes.forEach(({ slug }) => {
      createPage({
        path: `/referenzen/${slug}`,
        component: path.resolve(`./src/templates/ReferencePage/index.js`),
        context: {
          slug: slug,
        },
      })
    })

    result.data.shopifyProductTypes.nodes.forEach(({ productType }) => {
      createPage({
        path: `/shop/${productType}`,
        component: path.resolve(`./src/templates/ProductTypePage/index.js`),
        context: {
          productType: `/${productType}/ig`,
          type: productType,
        },
      })
    })
  })
}
