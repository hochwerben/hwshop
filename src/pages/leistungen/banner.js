import React from 'react'
import Banner from '../../components/Leistungen/Banner'
import { ThemeTitle } from '../../utils/styles'
import { ServiceDescription } from '~/components/Leistungen/styles'
import ServiceCards, { Card } from '~/components/Leistungen/ServiceCards'
import deinSign from '~/images/dein-sign.png'
import Icons from '~/components/Leistungen/Icons'
import Alternativprodukte from '~/components/Leistungen/Alternativprodukte'
import SEO from '~/components/seo'

const BannerPage = () => {
  return (
    <>
      <SEO
        title="Banner"
        description="Banner die auffallen. An Fassaden oder freistehend. Das Format ist auch für XXL Banner geeignet."
      ></SEO>
      <Banner leistung="banner" />

      <ServiceCards>
        <Card title="PVC" price="85">
          <ul>
            <li>Fläche Banner: 4m²</li>
            <li>PVC Banner 500g/m²</li>
            <li>Abmaße: 2.000mm x 2.000mm</li>
            <li>Farbe: weiß matt</li>
            <li>Ösen: Ringsum / Abstand ca. 50cm</li>
            <li>Druck: 4/0 einseitig vierfarbig</li>
          </ul>
        </Card>
        <Card title="PVC Mesh" price="69">
          <ul>
            <li>Fläche Banner: 4m²</li>
            <li>PVC Mesh Banner 360g/m²</li>
            <li>Abmaße: 2.000mm x 2.000mm</li>
            <li>Farbe: weiß matt</li>
            <li>Ösen: Ringsum / Abstand ca. 50cm</li>
            <li>Druck: 4/0 einseitig vierfarbig</li>
          </ul>
        </Card>
        {/* <Card title="Komplett">
          <ul>
          <li>Fläche Banner: 4m²</li>
          <li>PVC Banner / PVC Mesh Banner</li>
          <li>Abmaße: 2.000mm x 2.000mm</li>
          <li>Farbe: weiß matt</li>
          <li>Ösen: Ringsum / Abstand ca. 50cm</li>
          <li>Druck: 4/0 einseitig vierfarbig</li>
          </ul>
        </Card> */}
      </ServiceCards>
      <ThemeTitle mt>Beschreibung</ThemeTitle>
      <ServiceDescription>
        Mit einem <img src={deinSign} alt="dein sign" width="100px" /> Banner
        erreichen Sie die Aufmerksamkeit Ihrer Kunden. Das Format ist auch für
        XXL Banner geeignet und kann durch die Montagesysteme an Fassaden oder
        freistehend angewendet werden. Dein Werbeträger für die Werbeanwendung
        an Fassaden, auf Messe- u. Event uvm. Die verwendeten Materialien sind
        für die Anwendung im Innen u. Außenbereich geeignet. Das Textilgewebe
        (PVC Meshbanner) eignet sich durch seine Materialeigenschaft ideal für
        Großformate
      </ServiceDescription>
      <ServiceCards>
        <Card title="Anwendung">
          <ul>
            <li>Mittel- bis langfristige Werbeanwendung</li>
            <li>Innen- / Außenbereich</li>
            <li>FassadenBanner / Bauzaunbanner / Traversenbanner</li>
            <li>Messe u. Event / Gewerbetreibende / Agenturen</li>
          </ul>
        </Card>
        <Card title="Technische Details">
          <ul>
            <li>PVC Banner</li>
            <li>Farbe: weiß glänzend</li>
            <li>Gewicht: ca. 500g/m²</li>
            <Icons outside inside b1 cmyk />
            <li>PVC Meshbanner mit Liner</li>
            <li>Farbe: weiß</li>
            <li>Gewicht: ca. 360g/m²</li>
            <Icons outside inside b1 cmyk wind />
          </ul>
        </Card>
        <Card title="Service">
          <ul>
            <li>Digitaldruck</li>
            <li>Konfektionieren / Säumen / Ösen</li>
            <h4>Optional:</h4>
            <li>Montage: vor Ort</li>
            <li>Fassaden- / Traversensystem</li>
            <li>Spannset</li>
          </ul>
        </Card>
      </ServiceCards>
      <ThemeTitle mt>Alternativprodukte</ThemeTitle>
      <Alternativprodukte bauzaunbanner schilder />
      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default BannerPage
