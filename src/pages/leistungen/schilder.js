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
        title="Schilder"
        description="Firmenschilder oder Werbeschilder als Aluverbundplatte eignen sich im Innen- und Außenbereich."
      ></SEO>
      <Banner leistung="schilder" />
      <ServiceCards>
        <Card title="Einseitig" price="29">
          <ul>
            <li>Fläche: 0,5m²</li>
            <li>Alu-Verbundplatte</li>
            <li>Abmaße: 1.000mm x 500mm</li>
            <li>Materialstärke: 3mm</li>
            <li>Farbe: weiß lackiert (beidseitig)</li>
            <li>Kern: Kunststoff (LDPE)</li>
          </ul>
        </Card>
        <Card title="Beidseitig" price="45">
          <ul>
            <li>Fläche: 1m²</li>
            <li>Alu-Verbundplatte</li>
            <li>Abmaße: 1.000mm x 500mm</li>
            <li>Materialstärke: 3mm</li>
            <li>Farbe: weiß lackiert (beidseitig)</li>
            <li>Kern: Kunststoff (LDPE)</li>
          </ul>
        </Card>
        <Card title="Individuell">
          <ul>
            <li>
              Fläche: <em>individuell</em>
            </li>
            <li>Alu-Verbundplatte</li>
            <li>
              Abmaße: <em>individuell</em>
            </li>
            <li>Materialstärke: 3mm</li>
            <li>Farbe: weiß lackiert (beidseitig)</li>
            <li>Kern: Kunststoff (LDPE)</li>
            <li>Veredelung: bspw. UV-Schutz</li>
            <li>Verarbeitung: Fräs- / Biegarbeiten</li>
            <li>Wand- / Deckenmontage Set</li>
          </ul>
        </Card>
      </ServiceCards>
      <ThemeTitle mt>Beschreibung</ThemeTitle>
      <ServiceDescription>
        Ob Privat oder Gewerbetreibende, mit{' '}
        <img src={deinSign} alt="dein sign" width="100px" /> werden die
        Alu-Verbundplatten zum echten Hingucker. Unabhängig davon ob Sie bspw.
        Beschilderungen im Innen- u. Außenbereich planen, Messe- und Ladenbau
        realisieren oder Urlaubsbilder aufhängen möchten. Das geringe Gewicht
        (ca. 3,5 kg/m²), die Verarbeitungsmöglichkeiten und die
        Witterungsbeständigkeit bietet unzählige Möglichkeiten.
      </ServiceDescription>
      <ServiceCards>
        <Card title="Anwendung">
          <ul>
            <li>Mittel- bis langfristige Werbeanwendung</li>
            <li>Innen- / Außenbereich</li>
            <li>Fenster- / Schilderbeschriftung</li>
            <li>Privat / Gewerbetreibende / Agenturen / Städte u. Gemeinden</li>
          </ul>
        </Card>
        <Card title="Technische Details">
          <ul>
            <li>Polymer-Hochleistunges-PVC-Folie mit Mikrokanälen</li>
            <li>Farbe: weiß glänzend</li>
            <li>Dicke: 70µ</li>
            <li>Kleber: permanent haftend</li>
            <Icons outside inside b1 cmyk />
          </ul>
        </Card>
        <Card title="Service">
          <ul>
            <li>Plattenkonfektionierung</li>
            <li>Digitaldruck</li>
            <li>Flächenvorbereitung</li>
            <li>Folierung (applizieren der Beschriftung u. Grafik)</li>
            <h4>Optional:</h4>
            <li>Materialstärke: 2mm / 4mm</li>
            <li>Farbe: schwarz</li>
            <li>Montage vor Ort</li>
          </ul>
        </Card>
      </ServiceCards>
      <ThemeTitle mt>Alternativprodukte</ThemeTitle>
      <Alternativprodukte banner bauzaunbanner sticker />
      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default MaskenPage
