import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import ShopNav from '~/components/ShopNav'

const ShopPage = () => (
  <>
    <SEO
      title="Shop"
      keywords={[`gatsby`, `application`, `react`]}
      description="Ob Autobeschriftung, Firmenschild oder neue Webseite mit Online-Shop - Alles bei Hochwerben.de"
    />
    <ShopNav />
    <ProductGrid />
  </>
)

export default ShopPage
