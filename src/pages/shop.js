import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const ShopPage = () => (
  <>
    <SEO
      title="Shop"
      keywords={[`gatsby`, `application`, `react`]}
      description="Ob Autobeschriftung, Firmenschild oder neue Webseite mit Online-Shop - Alles bei Hochwerben.de"
    />
    <ProductGrid />
  </>
)

export default ShopPage
