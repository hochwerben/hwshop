import React from 'react'
import Banner from '../../components/Leistungen/Banner'
import { ThemeTitle } from '../../utils/styles'
import { ServiceDescription } from '~/components/Leistungen/styles'
import ServiceCards, { Card } from '~/components/Leistungen/ServiceCards'
import deinSign from '~/images/dein-sign.png'
import Icons from '~/components/Leistungen/Icons'
import Alternativprodukte from '~/components/Leistungen/Alternativprodukte'
import SEO from '~/components/seo'
import kompakt from '~/images/kompetenzen/digitaldruck/pkw-grafiken-kompakt.jpg'
import moderat from '~/images/kompetenzen/digitaldruck/pkw-grafiken-komplex.jpg'
import komplex from '~/images/kompetenzen/digitaldruck/pkw-grafiken-komplex.jpg'

const PkwBeschriftungPage = () => {
  return (
    <>
      <SEO
        title="PKW-Grafiken"
        description="Auffallende PKW-Grafiken in brillianten Farben. Wir versehen Ihr Auto mit einer auffälligen Folierung und sorgen dafür dass Ihr Firmenname zu sehen ist."
      ></SEO>
      <Banner leistung="pkwGrafiken" title="PKW-Grafiken" />
      <ServiceCards>
        <Card title="Kompakt" price="285" img>
          <ul>
            <li>Fläche: 3qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 500mm
            </li>
            <li>2 x Seitengrafik</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 2.000mm x 500mm
            </li>
          </ul>

          <img
            src={kompakt}
            alt="PKW Grafiken kompakt"
            style={{ width: '100%' }}
          />
        </Card>
        <Card title="Moderat" price="469" img>
          <ul>
            <li>Fläche: 6,5qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.500mm x 500mm
            </li>
            <li>2 x Seitengrafik</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 2.000mm x 1.000mm
            </li>
            <li>1 x Heckbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 500mm
            </li>
            <li>1 x Heckgrafik</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 500mm
            </li>
          </ul>
          <img
            src={moderat}
            alt="LKW Beschriftung moderat"
            style={{ width: '100%' }}
          />
        </Card>
        <Card title="Komplex" price="675" img>
          <ul>
            <li>Fläche: 9qm</li>
            <li>2 x Seitenbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 2.000mm x 500mm
            </li>
            <li>2 x Seitengrafik</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 4.000mm x 500mm
            </li>
            <li>1 x Heck- u. Frontbeschriftung</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 500mm
            </li>
            <li>1 x Heck- u. Frontgrafik</li>
            <li style={{ listStyle: 'none', marginLeft: '1rem' }}>
              Abmaße: 1.000mm x 500mm
            </li>
          </ul>
          <img
            src={komplex}
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
        <h3 style={{ marginTop: '1rem' }}>Fahrzeuggrafiken</h3>
        Mit einer Fahrzeuggrafik werden Bilder, Muster od. Logos auf eine weiße
        Hochleistungs-PVC-Folie gedruckt, von uns konfektioniert und auf das
        Fahrzeug appliziert. Kombinieren Sie{' '}
        <img src={deinSign} alt="dein sign" width="100px" /> Grafiken mit{' '}
        <img src={deinSign} alt="dein sign" width="100px" /> Beschriftung aus
        Hochleistungs-PVC-Folie für Plotteranwendungen. Wir veredeln Ihr Firmen-
        oder Privatfahrzeug und steigern die Aufmerksamkeit.
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
        pkwBeschriftung
        transporterBeschriftung
        transporterGrafiken
      />
      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default PkwBeschriftungPage
