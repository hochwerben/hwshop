import React from 'react'
import SEO from '~/components/seo'

import Kompetenzen from '~/components/Kompetenzen'

const KompetenzenPage = () => (
  <>
    <SEO
      title="Digitaldruck, Werbeträger und Webdesign"
      keywords={[`gatsby`, `application`, `react`]}
      description="Ob Autobeschriftung, Firmenschild oder neue Webseite mit Online-Shop - Alles bei Hochwerben.de"
    />

    <Kompetenzen />
  </>
)

export default KompetenzenPage
