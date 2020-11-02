import React from 'react'
import Banner from '../../components/Leistungen/Banner'
import { ThemeTitle } from '../../utils/styles'
import { ServiceDescription } from '~/components/Leistungen/styles'
import ServiceCards, { Card } from '~/components/Leistungen/ServiceCards'
import deinSign from '~/images/dein-sign.png'
import Icons from '~/components/Leistungen/Icons'
import Alternativprodukte from '~/components/Leistungen/Alternativprodukte'
import SEO from '~/components/seo'
import kompakt from '~/images/kompetenzen/digitaldruck/citan-kompakt.jpg'
import moderat from '~/images/kompetenzen/digitaldruck/citan-moderat.jpg'
import komplex from '~/images/kompetenzen/digitaldruck/citan-komplex.jpg'

const PkwBeschriftungPage = () => {
  return (
    <>
      <SEO
        title="PKW-Beschriftung"
        description="Autobeschriftung aus Mörfelden-Walldorf. Wir folieren Ihr Fahrzeug mit Ihrem Firmenlogo."
      ></SEO>
      <Banner leistung="pkwBeschriftung" title="PKW-Beschriftung" />
      <ServiceCards>
        <Card title="Kompakt" price="99" img>
          <ul>
            <li>Fläche: 1qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 500mm
            </li>
          </ul>

          <img
            src={kompakt}
            alt="PKW Beschriftung kompakt"
            style={{ width: '100%' }}
          />
        </Card>
        <Card title="Moderat" price="169" img>
          <ul>
            <li>Fläche: 2qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.500mm x 500mm
            </li>
            <li>1 x Heckbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 500mm
            </li>
          </ul>
          <img
            src={moderat}
            alt="PKW Beschriftung moderat"
            style={{ width: '100%' }}
          />
        </Card>
        <Card title="Komplex" price="235" img>
          <ul>
            <li>Fläche: 3qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 2.000mm x 500mm
            </li>
            <li>1 x Heckbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 500mm
            </li>
            <li>1 x Frontbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 500mm
            </li>
          </ul>
          <img
            src={moderat}
            alt="OKW Beschriftung komplex"
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
            <li>Flächenvorbereitung</li>
            <li>Folierung (applizieren der Beschriftung u. Grafik)</li>
            <h4>Optional:</h4>
            <li>Hol- / Bringservice</li>
            <li>Farbe: weiß / schwarz</li>
          </ul>
        </Card>
      </ServiceCards>
      <ThemeTitle mt>Alternativprodukte</ThemeTitle>
      <Alternativprodukte
        lkwBeschriftung
        lkwFolierung
        pkwGrafiken
        transporterBeschriftung
        transporterGrafiken
      />
      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default PkwBeschriftungPage
