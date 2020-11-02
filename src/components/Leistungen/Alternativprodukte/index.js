import React from 'react'
import { Link } from 'gatsby'
import deinSign from '~/images/dein-sign.png'
import { Links, LinkItem } from './styles'

export default function AlternativProdukte(props) {
  const {
    banner,
    bauzaunbanner,
    fassadenbanner,
    bodenfolie,
    flugzeugtrolleys,
    lkwBeschriftung,
    lkwFolierung,
    pkwBeschriftung,
    pkwGrafiken,
    schilder,
    sticker,
    transporterBeschriftung,
    transporterGrafiken,
    webdesign,
    masken,
    shirts,
  } = props
  return (
    <Links>
      {banner && (
        <li>
          <MyLink to="/leistungen/banner">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Banner</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {bauzaunbanner && (
        <li>
          <MyLink to="/leistungen/bauzaunbanner">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Bauzaunbanner</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {fassadenbanner && (
        <li>
          <MyLink to="/leistungen/bauzaunbanner">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Mega- / Fassadenbanner</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {bodenfolie && (
        <li>
          <MyLink to="/leistungen/bauzaunbanner">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Bodenfolie</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {flugzeugtrolleys && (
        <li>
          <MyLink to="/leistungen/flugzeugtrolleys">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Flugzeugtrolleys</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {lkwBeschriftung && (
        <li>
          <MyLink to="/leistungen/lkw-beschriftung">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>LKW Beschriftung</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {lkwFolierung && (
        <li>
          <MyLink to="/leistungen/lkw-folierung">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>LKW Folierung</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {pkwBeschriftung && (
        <li>
          <MyLink to="/leistungen/pkw-beschriftung">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>PKW Beschriftung</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {pkwGrafiken && (
        <li>
          <MyLink to="/leistungen/pkw-grafiken">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>PKW Grafiken</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {schilder && (
        <li>
          <MyLink to="/leistungen/schilder">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Schilder</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {sticker && (
        <li>
          <MyLink to="/leistungen/sticker">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Sticker</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {transporterBeschriftung && (
        <li>
          <MyLink to="/leistungen/transporter-beschriftung">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Transporter Beschriftung</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {transporterGrafiken && (
        <li>
          <MyLink to="/leistungen/transporter-grafiken">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Transporter Grafiken</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {masken && (
        <li>
          <MyLink to="/leistungen/masken">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Masken</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {shirts && (
        <li>
          <MyLink to="/leistungen/t-shirts">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>T-Shirts</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
      {webdesign && (
        <li>
          <MyLink to="/leistungen/webdesign">
            <LinkItem>
              <img src={deinSign} alt="dein sign" width="100px" />
              <span>Webdesign</span>
            </LinkItem>
          </MyLink>
        </li>
      )}
    </Links>
  )
}

const MyLink = ({ to, children }) => <Link to={to}>{children}</Link>
