import React from 'react'
import SEO from '../components/seo'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  h2 {
    margin: 3rem 0 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
`

export default () => (
  <Wrapper>
    <SEO title="Impressum" description="Impressum von Hochwerben.de"></SEO>

    <h2>Impressum</h2>
    <p>
      <strong>ATLASAVIA GmbH</strong>
      <br />
      Nordendstrasse 82
      <br />
      D-64546 Moerfelden-Walldorf
      <br />
      Germany
      <br />
    </p>
    <p>
      Telefon: +49 6105 / 6766
      <br />
      Telefax: +49 6105 / 6738
      <br />
      E-Mail: contact@atlasavia.de
      <br />
      Web: www.atlasavia.de
      <br />
      Rechtsform: GmbH
      <br />
      Geschäftsführer: Christoph Fladung
      <br />
      Registerart: Handelsregister
      <br />
      Register / Ort: Amtsgericht Darmstadt
      <br />
      Registernummer: HRB 53375
      <br />
      Angehörige Kammer: IHK Darmstadt
      <br />
      Umsatzsteuer ID: DE 113827450
    </p>
  </Wrapper>
)
