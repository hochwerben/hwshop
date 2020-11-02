import React from 'react'
import Banner from '../../components/Leistungen/Banner'
import { ThemeTitle } from '../../utils/styles'
import { ServiceDescription } from '~/components/Leistungen/styles'
import ServiceCards, { Card } from '~/components/Leistungen/ServiceCards'
import deinSign from '~/images/dein-sign.png'
import Icons from '~/components/Leistungen/Icons'
import Alternativprodukte from '~/components/Leistungen/Alternativprodukte'
import SEO from '~/components/seo'
import datenblatt from '~/downloads/datenblatt-trolley-individuell.pdf'

const MaskenPage = () => {
  return (
    <>
      <SEO
        title="Flugzeugtrolleys"
        description="Flugzeugtrolleys mit individuellem Design. Gestalten Sie Ihren Trolley selbst. ATLAS-Norm."
      ></SEO>
      <Banner leistung="flugzeugtrolleys" />
      <ServiceCards>
        <Card title="Your Design" price="949">
          <li>
            Design: Gestalten Sie Ihren eigenen Trolley{' '}
            <strong>individuell</strong>
          </li>
          <li>Norm: ATLAS</li>
        </Card>
      </ServiceCards>
      <ThemeTitle mt>Beschreibung</ThemeTitle>
      <ServiceDescription>
        <h4 style={{ marginBottom: '1rem' }}>
          Individuelles Design Ihres Flugzeugtrolleys
        </h4>
        <p>
          Sie haben sich für ein individuelles Design Ihres neuen Trolleys
          entschieden? Dann müssen Ihre Grafiken folgende Anforderungen
          erfüllen:
        </p>
        <ul style={{ marginLeft: '1rem', marginTop: '1rem' }}>
          <li>
            Dateiformat: <strong>.PDF, .JPG oder .TIFF</strong>
          </li>
          <li>
            Auflösung: <strong>300dpi</strong>
          </li>
          <li>
            Farbraum: <strong>CMYK</strong>
          </li>
          <li>
            Beschnittzugabe: <strong>1cm</strong>
            <p>
              Warum ist eine Beschnittzugabe notwendig? Beim Beschneiden Ihrer
              Grafiken kann es zu minimalen Abweichungen kommen.Die
              Beschnittzugabe dient als Spielraum, der "weiße Ränder/Blitzer"
              verhindert. Um diese weißen Ränder zu verhindern muss Ihre Grafik
              über den sichtbaren Bereich hinaus in den Bereich der
              Beschnittzugabe hineinreichen.
            </p>
          </li>
        </ul>
        <a
          href={datenblatt}
          target="_blank"
          style={{
            marginTop: '1rem',
            marginBottom: '1rem',
            textDecoration: 'underline',
            display: 'block',
          }}
        >
          Datenblatt Layout
        </a>
        ATLAS-Norm Flugzeugtrolleys sind nicht alle gleich. Daher gilt es gerade
        beim Zubehör auf den richtigen Standard zu achten, sonst kann es
        passieren dass beispielsweise die Einschubfächer nicht richtig passen.
        Unsere Trolleys entsprechen der ATLAS-Norm. ATLAS ist mit ca. 80% der am
        häufigsten verbreitetste Standard unter den Flugzeugtrolleys.
      </ServiceDescription>
      <ServiceCards>
        <Card title="Anwendung">
          <ul>
            <li>Messe u. Event / Gewerbetreibende / Agenturen</li>
            <li>Privatgebrauch</li>
          </ul>
        </Card>
        <Card title="Technische Details">
          <ul>
            <li>
              Maße:
              <ul style={{ marginLeft: '1rem' }}>
                <li>Breite: 30cm</li>
                <li>Höhe: 102,8cm</li>
                <li>Tiefe: 40,5cm</li>
              </ul>
            </li>
          </ul>
        </Card>
      </ServiceCards>
      {/* <ThemeTitle mt>Alternativprodukte</ThemeTitle> */}
      {/* <Alternativprodukte shirts /> */}
      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default MaskenPage
