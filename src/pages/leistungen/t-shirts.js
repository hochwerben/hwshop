import React from 'react'
import Banner from '../../components/Leistungen/Banner'
import { ThemeTitle } from '../../utils/styles'
import { ServiceDescription } from '~/components/Leistungen/styles'
import ServiceCards, { Card } from '~/components/Leistungen/ServiceCards'
import deinSign from '~/images/dein-sign.png'
import Icons from '~/components/Leistungen/Icons'
import Alternativprodukte from '~/components/Leistungen/Alternativprodukte'
import SEO from '~/components/seo'
import shirtWashing from '~/images/kompetenzen/werbetraeger/shirts-washing.svg'

const MaskenPage = () => {
  return (
    <>
      <SEO
        title="T-Shirts online kaufen"
        description="T-Shirts bei Hochwerben kaufen | Kreative Motive und individuelle Prints für deinen neuen Look | T-Shirts auf Hochwerben.de - Jetzt bestellen!"
      ></SEO>
      <Banner leistung="shirts" title="T-Shirts" />
      <ServiceCards>
        <Card title="1 Stk." price="19.90">
          <ul>
            <li>Farbe: siehe unten</li>
            <li>Größe: s-5xl / Herren od. Damen</li>
            <li>Rundhalsausschnitt</li>
            <li>100% Baumwolle</li>
            <li>Waschbar bis 60 °C</li>
            <li>205g/m²</li>
          </ul>
        </Card>
        <Card title="5er Pack" price="94.50">
          <ul>
            <li>Farbe: siehe unten</li>
            <li>Größe: s-5xl / Herren od. Damen</li>
            <li>Rundhalsausschnitt</li>
            <li>100% Baumwolle</li>
            <li>Waschbar bis 60 °C</li>
            <li>205g/m²</li>
          </ul>
        </Card>
        <Card title="10er Pack" price="179">
          <ul>
            <li>Farbe: siehe unten</li>
            <li>Größe: s-5xl / Herren od. Damen</li>
            <li>Rundhalsausschnitt</li>
            <li>100% Baumwolle</li>
            <li>Waschbar bis 60 °C</li>
            <li>205g/m²</li>
          </ul>
        </Card>
      </ServiceCards>

      <img
        src={shirtWashing}
        alt="Anleitung zum Waschen von T-Shirts"
        style={{ maxWidth: '500px', display: 'block', margin: '2rem auto' }}
      />

      <ThemeTitle mt>Beschreibung</ThemeTitle>
      <ServiceDescription>
        Werbebekleidung, Berufsbekleidung und Sportbekleidung mit&nbsp;
        <img src={deinSign} alt="dein sign" width="100px" />
        &nbsp;individuell gestalten.
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
      <Alternativprodukte masken />
      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default MaskenPage
