import React from 'react'
import Banner from '../../components/Leistungen/Banner'
import { ThemeTitle } from '../../utils/styles'
import { ServiceDescription } from '~/components/Leistungen/styles'
import ServiceCards, { Card } from '~/components/Leistungen/ServiceCards'
import deinSign from '~/images/dein-sign.png'
import SEO from '~/components/seo'
import { FaCheck } from 'react-icons/fa'

const WebdesignPage = () => {
  return (
    <>
      <SEO
        title="Webdesign"
        description="Webdesign aus Mörfelden-Walldorf. Blitzschnelle Seiten und modernes Layout - individuell angepasst."
      ></SEO>
      <Banner leistung="webdesign" />
      <ServiceCards>
        <Card title="Onepager" price="799">
          <ul>
            <li>Seiten: 1</li>
            <li>Domain: 1 &nbsp;(.de, .com, .eu, .online. oder .net)</li>
            <li>Email-Adressen: 1</li>
            <li>
              Datenschutzerklärung und Impressum <FaCheck />
            </li>
            <li>
              Responsive Design <FaCheck />
            </li>
            <li>Bilder und Texte werden von Ihnen gestellt</li>
          </ul>
        </Card>
        <Card title="Multipager" price="1399">
          <ul>
            <li>Seiten: 5</li>
            <li>Domain: 1 &nbsp;(.de, .com, .eu, .online. oder .net)</li>
            <li>Email-Adressen: 5</li>
            <li>
              Datenschutzerklärung und Impressum <FaCheck />
            </li>
            <li>
              Responsive Design <FaCheck />
            </li>
            <li>Bilder und Texte werden von Ihnen gestellt</li>
          </ul>
        </Card>
        <Card title="Startup" price="999">
          <ul>
            <li>
              Webseite: <strong>Onepager</strong>
            </li>
            <li>Visitenkarten: 250 Stk. (bis zu drei Varianten)</li>
            <li>Briefpapier: 1000 Seiten</li>
            <li>Flyer: 1000 Stk.</li>
          </ul>
        </Card>
      </ServiceCards>

      <ThemeTitle mt>Beschreibung</ThemeTitle>
      <ServiceDescription>
        <p>
          Mit <img src={deinSign} alt="dein sign" width="100px" /> Webseiten
          bekommen Sie eine individualisierte Webpräsentation im responsive
          Design. Das bedeutet Ihre Webseite erreicht Ihre Kunden auf allen
          Endgeräten, egal ob PC, Smartphone oder Tablet. Eine schnelle und
          wirtschaftliche Lösung für den Mittelstand und StartUps.
        </p>

        <p style={{ marginTop: '1rem' }}>
          Geben Sie Ihren Kunden die Möglichkeit Ihr Unternehmen online zu
          finden und steigern Sie das Absatzpotential Ihrer Produkte /
          Dienstleistungen.
        </p>
      </ServiceDescription>

      {/* <ThemeTitle mt>Referenzen</ThemeTitle> */}
    </>
  )
}

export default WebdesignPage
