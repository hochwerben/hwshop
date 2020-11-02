import React from 'react'
import Banner from '../../components/Leistungen/Banner'
import { ThemeTitle } from '../../utils/styles'
import { ServiceDescription } from '~/components/Leistungen/styles'
import ServiceCards, { Card } from '~/components/Leistungen/ServiceCards'
import deinSign from '~/images/dein-sign.png'
import Icons from '~/components/Leistungen/Icons'
import Alternativprodukte from '~/components/Leistungen/Alternativprodukte'
import SEO from '~/components/seo'
import komplex from '~/images/kompetenzen/digitaldruck/lkw-folierung-komplex.jpg'

const LkwFolierungPage = () => {
  return (
    <>
      <SEO
        title="LKW-Folierung"
        description="Werbung auf Ihrem LKW fällt auf! Mit unserer Hochleistungs-Folie hält Ihre Werbung bis zu 7 Jahre auf dem Fahrzeug. "
      ></SEO>
      <Banner leistung="lkwFolierung" title="LKW-Folierung" />
      <ServiceCards>
        <Card title="Komplex" price="1490">
          <ul>
            <li>Fläche: 36qm</li>
            <li>
              2 x Seitenfolierung
              <br />
              Abmaße: 6.000mm x 2.500mm
            </li>
            <li>
              1 x Heckfolierung
              <br />
              Abmaße: 2.000mm x 2.500mm
            </li>
            <li>
              1 x Frontfolierung
              <br />
              Abmaße: 2.000mm x 500mm
            </li>
            <img
              src={komplex}
              alt="LKW Folierung komplex"
              style={{ width: '100%' }}
            />
          </ul>
        </Card>
      </ServiceCards>
      <ThemeTitle mt>Beschreibung</ThemeTitle>
      <ServiceDescription>
        Mit <img src={deinSign} alt="dein sign" width="100px" /> wird Ihr
        Fahrzeug zum individuellen Werbeträger. Wir unterstützen Sie mit
        Fahrzeugbeschriftung, Grafiken oder Vollfolierung auf allen
        Fahrzeugtypen und Klassen.
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

export default LkwFolierungPage
