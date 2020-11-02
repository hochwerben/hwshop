import React from 'react'
import Banner from '../../components/Leistungen/Banner'
import { ThemeTitle } from '../../utils/styles'
import { ServiceDescription } from '~/components/Leistungen/styles'
import ServiceCards, { Card } from '~/components/Leistungen/ServiceCards'
import deinSign from '~/images/dein-sign.png'
import Icons from '~/components/Leistungen/Icons'
import Alternativprodukte from '~/components/Leistungen/Alternativprodukte'
import SEO from '~/components/seo'
import kompakt from '~/images/kompetenzen/digitaldruck/transporter-beschriftung-kompakt.jpg'
import moderat from '~/images/kompetenzen/digitaldruck/transporter-beschriftung-moderat.jpg'
import komplex from '~/images/kompetenzen/digitaldruck/transporter-beschriftung-komplex.jpg'

const TransporterBeschriftungPage = () => {
  return (
    <>
      <SEO
        title="Transporterbeschriftung"
        description="Beschriftung für Kleinbusse und Transporter. Hochwertige Plotterfolie sorgt für satte Farben und langen Halt."
      ></SEO>
      <Banner
        leistung="transporterBeschriftung"
        title="Transporterbeschriftung"
      />
      <ServiceCards>
        <Card title="Kompakt" price="285" img>
          <ul>
            <li>Fläche: 4qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 2.000mm x 1.000mm
            </li>
          </ul>
          <img
            src={kompakt}
            alt="Transporterbeschriftung kompakt"
            style={{ width: '100%' }}
          />
        </Card>
        <Card title="Moderat" price="399" img>
          <ul>
            <li>Fläche: 6qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 2.500mm x 1.000mm
            </li>
            <li>1 x Heckbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 1.000mm
            </li>
          </ul>
          <img
            src={moderat}
            alt="Transporterbeschriftung moderat"
            style={{ width: '100%' }}
          />
        </Card>
        <Card title="Komplex" price="505" img>
          <ul>
            <li>Fläche: 8qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 3.000mm x 1.000mm
            </li>
            <li>1 x Heckbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.500mm x 1.000mm
            </li>
            <li>1 x Frontbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 500mm
            </li>
          </ul>
          <img
            src={komplex}
            alt="Transporterbeschriftung komplex"
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
        lkwBeschriftung
        lkwFolierung
        pkwBeschriftung
        pkwGrafiken
        transporterGrafiken
      />
      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default TransporterBeschriftungPage
