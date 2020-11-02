import React from 'react'
import Banner from '../../components/Leistungen/Banner'
import { ThemeTitle } from '../../utils/styles'
import { ServiceDescription } from '~/components/Leistungen/styles'
import ServiceCards, { Card } from '~/components/Leistungen/ServiceCards'
import deinSign from '~/images/dein-sign.png'
import Icons from '~/components/Leistungen/Icons'
import Alternativprodukte from '~/components/Leistungen/Alternativprodukte'
import SEO from '~/components/seo'
import kompakt from '~/images/kompetenzen/digitaldruck/lkw-beschriftung-kompakt.jpg'
import moderat from '~/images/kompetenzen/digitaldruck/lkw-beschriftung-komplex.jpg'

const LkwBeschriftungPage = () => {
  return (
    <>
      <SEO
        title="LKW-Beschriftung"
        description="Ihr Firmenname und Ihr Firmenlogo auf der großen Werbefläche eines LKW-Koffers."
      ></SEO>
      <Banner leistung="lkwBeschriftung" title="LKW-Beschriftung" />
      <ServiceCards>
        <Card title="Kompakt" price="729" img>
          <ul>
            <li>Fläche: 12qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 6.000mm x 1000mm
            </li>
          </ul>
          <img
            src={kompakt}
            alt="LKW Beschriftung kompakt"
            style={{ width: '100%' }}
          />
        </Card>
        <Card title="Moderat" price="835" img>
          <ul>
            <li>Fläche: 14qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 6.000mm x 1.000mm
            </li>
            <li>1 x Heckbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 2.000mm x 1.000mm
            </li>
          </ul>
          <img
            src={moderat}
            alt="LKW Beschriftung moderat"
            style={{ width: '100%' }}
          />
        </Card>
        <Card title="Komplex" price="1.250" img>
          <ul>
            <li>Fläche: 21qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 6.000mm x 1.500mm
            </li>
            <li>1 x Heckbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 2.000mm x 1.000mm
            </li>
            <li>1 x Frontbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 2.000mm x 500mm
            </li>
          </ul>
          <img
            src={moderat}
            alt="LKW Beschriftung komplex"
            style={{ width: '100%' }}
          />
        </Card>
      </ServiceCards>
      <ThemeTitle mt>Beschreibung</ThemeTitle>
      <ServiceDescription>
        Mit <img src={deinSign} alt="dein sign" width="100px" /> wird Ihr
        Fahrzeug zum individuellen Werbeträger. Wir unterstützen Sie mit
        Fahrzeugbeschriftung, Grafiken oder Vollfolierung auf allen
        Fahrzeugtypen und Klassen.
        <h3 style={{ marginTop: '1rem' }}>Fahrzeugbeschriftung</h3>
        Mit einer Fahrzeugbeschriftung werden Ihre Texte od. Logos aus einer
        farbigen Folie ausgeschnitten (Folienplot) und von uns auf das Fahrzeug
        appliziert. Die Hochleistung-PVC-Folie für Plotteranwendungen bietet
        über 100 Farbvarianten und ist ideal für die Fahrzeugbeschriftung
        geeignet. Wir veredeln Ihr Firmen- oder Privatfahrzeug und steigern die
        Aufmerksamkeit.
      </ServiceDescription>
      <ServiceCards>
        <Card title="Anwendung">
          <ul>
            <li>Mittel- bis langfristige Werbeanwendung</li>
            <li>Innen- / Außenbereich</li>
            <li>KFZ- / Fenster- / Schilderbeschriftung</li>
            <li>Handwerk / Handel / Agenturen / Städte u. Gemeinden</li>
          </ul>
        </Card>
        <Card title="Technische Details">
          <ul>
            <li>Gegossene Hochleistung-PVC-Folie für Plotteranwendungen</li>
            <li>Farbe: mehr als 100 Farbvarianten</li>
            <li>Dicke: 60μ</li>
            <li>Kleber: permanent haftend</li>
            <li>Haltbarkeit: 7 Jahre</li>
            <li>Brandschutzklasse B1</li>
            <li>Plotten von Schriftzügen / Kaschieren u. Applizieren</li>
            <Icons outside inside b1 uv />
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
      <Alternativprodukte
        lkwFolierung
        pkwBeschriftung
        pkwGrafiken
        transporterBeschriftung
        transporterGrafiken
      />
      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default LkwBeschriftungPage
