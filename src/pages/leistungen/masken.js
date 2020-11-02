import React from 'react'
import Banner from '../../components/Leistungen/Banner'
import { ThemeTitle } from '../../utils/styles'
import { ServiceDescription } from '~/components/Leistungen/styles'
import ServiceCards, { Card } from '~/components/Leistungen/ServiceCards'
import deinSign from '~/images/dein-sign.png'
import Icons from '~/components/Leistungen/Icons'
import Alternativprodukte from '~/components/Leistungen/Alternativprodukte'
import SEO from '~/components/seo'

const MaskenPage = () => {
  return (
    <>
      <SEO
        title="Atemschutzmasken günstig online kaufen"
        description="Atemschutzmasken zum Schutz vor Viren, Staub und Schimmelpilzen. Atemschutzmasken auf Hochwerben.de - Jetzt bestellen!"
      ></SEO>
      <Banner leistung="masken" />
      <ServiceCards>
        <Card title="1 Stk." price="15.90">
          <ul>
            <li>Farbe: weiß od. schwarz</li>
            <li>Marke: Fruit of the Loom</li>
            <li>Unisize Größe / Erwachsene</li>
            <li>Leicht u. passgenau</li>
            <li>Elastische Ohrschlaufen</li>
            <li>100% Baumwolle (3-lagig)</li>
            <li>Waschbar bei 60 °C</li>
            <li>Kein Medizinprodukt</li>
            <li>Maße: 17,5cm x 12,5cm</li>
            <li>Druckbereich: 16cm x 9cm</li>
          </ul>
        </Card>
        <Card title="5er PACK" price="69.50">
          <ul>
            <li>Farbe: weiß od. schwarz</li>
            <li>Marke: Fruit of the Loom</li>
            <li>Unisize Größe / Erwachsene</li>
            <li>Leicht u. passgenau</li>
            <li>Elastische Ohrschlaufen</li>
            <li>100% Baumwolle (3-lagig)</li>
            <li>Waschbar bei 60 °C</li>
            <li>Kein Medizinprodukt</li>
            <li>Maße: 17,5cm x 12,5cm</li>
            <li>Druckbereich: 16cm x 9cm</li>
          </ul>
        </Card>
        <Card title="10er PACK" price="120">
          <ul>
            <li>Farbe: weiß od. schwarz</li>
            <li>Marke: Fruit of the Loom</li>
            <li>Unisize Größe / Erwachsene</li>
            <li>Leicht u. passgenau</li>
            <li>Elastische Ohrschlaufen</li>
            <li>100% Baumwolle (3-lagig)</li>
            <li>Waschbar bei 60 °C</li>
            <li>Kein Medizinprodukt</li>
            <li>Maße: 17,5cm x 12,5cm</li>
            <li>Druckbereich: 16cm x 9cm</li>
          </ul>
        </Card>
      </ServiceCards>
      <ThemeTitle mt>Beschreibung</ThemeTitle>
      <ServiceDescription>
        <img src={deinSign} alt="dein sign" width="100px" />
        &nbsp;Mund-Nasen-Schutz für die kurz- bzw. mittelfristige
        Werbeandwendung.
      </ServiceDescription>
      <ServiceCards>
        <Card title="Anwendung">
          <ul>
            <li>Kurz- bis mittelfristige Werbeanwendung</li>
            <li>
              Privat / Messe u. Event / Gewerbetreibende / Handel / Städte u.
              Gemeinden
            </li>
          </ul>
        </Card>
        <Card title="Technische Details">
          <ul>
            <li>Hotmarkprint Folie</li>
            <li>Farbe: weiß matt</li>
            <li>Dicke: 70µ</li>
            <li>Kleber: permanent haftend</li>
            <Icons cmyk />
          </ul>
        </Card>
        <Card title="Service">
          <ul>
            <li>Digitaldruck</li>
            <li>Folienplott</li>
            <li>Folierung (applizieren der Beschriftung u. Grafik)</li>
            <h4>Optional:</h4>
            <li>Farbe: weiß / schwarz</li>
          </ul>
        </Card>
      </ServiceCards>
      <ThemeTitle mt>Alternativprodukte</ThemeTitle>
      <Alternativprodukte shirts />
      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default MaskenPage
