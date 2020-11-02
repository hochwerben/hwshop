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
        title="Sticker / Aufkleber"
        description="Hochwertige Sticker / Aufkleber in allen Varianten. Mit Veredelung für besonders lange Haltbarkeit."
      ></SEO>
      <Banner leistung="sticker" />
      <ServiceCards>
        <Card title="Innen" price="11.95">
          <ul>
            <li>1 Stück</li>
            <li>Abmaße: 500mm Ø</li>
            <li>Veredelung: ohne</li>
            <li>Innenbereich</li>
          </ul>
        </Card>
        <Card title="Außen" price="16.50">
          <ul>
            <li>1 Stück</li>
            <li>Abmaße: 500mm Ø</li>
            <li>Veredelung: UV-Schutz</li>
            <li>Innen- / Außenbereich</li>
          </ul>
        </Card>
        <Card title="10er Pack" price="160">
          <ul>
            <li>10 Stück</li>
            <li>Abmaße: 500mm Ø</li>
            <li>Veredelung: UV-Schutz</li>
            <li>Innen- / Außenbereich</li>
          </ul>
        </Card>
      </ServiceCards>

      <ThemeTitle mt>Beschreibung</ThemeTitle>
      <ServiceDescription>
        Aufkleber oder Sticker mit{' '}
        <img src={deinSign} alt="dein sign" width="100px" /> für die Kurz- bis
        mittelfristige Werbeanwendung. Einsetzbar als Wand und Bodenaufkleber
        für die Anwendung als Leitsystem, Verkaufsförderung uvm. im Innen- und
        Außenbereich. Die Montage ist denkbar einfach und kann jederzeit ohne
        großen Aufwand getauscht werden. So können Sie Ihre Kunden jederzeit
        über aktuelle Aktionen informieren. Unsere Aufkleber können Sie auch
        ideal für Merchandising nutzen.
      </ServiceDescription>
      <ServiceCards>
        <Card title="Anwendung">
          <ul>
            <li>Kurz- bis mittelfristige Werbeandwendung</li>
            <li>Innen- / Außenbereich</li>
            <li>Boden- / Wandaufkleber</li>
            <li>
              Privat / Gewerbetreibende / Messe-Events / Handel / Städte u.
              Gemeinden
            </li>
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
            <li>DigitalDruck</li>
            <li>Folienplott</li>
            <li>Veredelung: UV-Schutz</li>
            <li>Folierung (applizieren der Beschriftung u. Grafik)</li>
            <h4>Optional:</h4>
            <li>Montage vor Ort</li>
          </ul>
        </Card>
      </ServiceCards>
      <ThemeTitle mt>Alternativprodukte</ThemeTitle>
      <Alternativprodukte schilder />
      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default MaskenPage
