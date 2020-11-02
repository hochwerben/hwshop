import React from 'react'
import { Link } from 'gatsby'
import { IconContext } from 'react-icons'
import { MdPhone, MdMail } from 'react-icons/md'
import {
  Wrapper,
  Grid,
  Phone,
  Mail,
  Address,
  Socials,
  Info,
  Policy,
  ImpLink,
} from './styles'
import { socials } from '~/constants/links'

const Footer = () => {
  return (
    <Wrapper>
      <Grid>
        <IconContext.Provider
          value={{
            style: { verticalAlign: 'middle', marginRight: '1rem' },
            size: '2em',
            color: '#f49402',
          }}
        >
          <Phone>
            <h3>
              <a href="tel:+49 6105 9777704">
                <MdPhone />
                <span>+49 6105 9777704</span>
              </a>
            </h3>
          </Phone>
          <Mail>
            <a href="mailto:info@hochwerben.de">
              <MdMail />
              <span>info@hochwerben.de</span>
            </a>
          </Mail>
        </IconContext.Provider>

        <Address>
          <ul>
            <li className="heading">Hochwerben</li>
            <li>Nordendstr. 82-84</li>
            <li>64546 Mörfelden-Walldorf</li>
          </ul>
        </Address>

        <Socials>
          {socials.map(({ id, url, icon }) => {
            return (
              <a key={id} href={url}>
                {icon}
              </a>
            )
          })}
        </Socials>

        <Info>
          © {new Date().getFullYear()} <Link to="/">Hochwerben.de</Link> - Alle
          Rechte vorbehalten.
        </Info>

        <Policy>
          <li>
            <ImpLink to="/impressum">Impressum</ImpLink>
          </li>
          <li>
            <ImpLink to="/datenschutz">Datenschutzerklärung</ImpLink>
          </li>
        </Policy>
      </Grid>
    </Wrapper>
  )
}

export default Footer
