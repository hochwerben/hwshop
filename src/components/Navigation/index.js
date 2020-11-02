import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import { useGlobalContext } from '~/context/AppContext'
import { FaShoppingCart, FaBars } from 'react-icons/fa'
import { MdPhone, MdMail } from 'react-icons/md'
import StoreContext from '~/context/StoreContext'
import { socials } from '~/constants/links'
import {
  TopBar,
  CartCounter,
  Container,
  MenuLink,
  MenuCategory,
  NavWrapper,
  Logo,
  NavHeader,
  NavToggle,
  Links,
  SocialIcons,
} from './styles'
import CartIcon from '~/components/CartIcon'

import logo from '~/images/logo.svg'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = () => {
  const [hasItems, quantity] = useQuantity()
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = e => {
    const page = e.target.textContent
    const rect = e.target.getBoundingClientRect()
    const center = (rect.left + rect.right) / 2
    const bottom = rect.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const handleSubmenu = e => {
    if (!e.target.classList.contains('submenu-link')) {
      closeSubmenu()
    }
  }

  return (
    <>
      <TopBar>
        <ul>
          <li>
            <MdPhone />
            <a href="tel:+49 6105 9777704">+49 6105 9777704</a>
          </li>
          <li>
            <MdMail />
            <a href="mailto:info@hochwerben.de">info@hochwerben.de</a>
          </li>
        </ul>
      </TopBar>
      <NavWrapper onMouseOver={handleSubmenu}>
        <Container>
          <NavHeader>
            <Logo to="/">
              <img src={logo} alt="Hochwerben Logo" />
            </Logo>
            <CartIcon />
            <NavToggle onClick={openSidebar}>
              <FaBars />
            </NavToggle>
          </NavHeader>
          <Links>
            <li>
              <MenuCategory
                onMouseOver={displaySubmenu}
                className="submenu-link"
              >
                Kompetenzen
              </MenuCategory>
            </li>
            <li>
              <MenuCategory
                onMouseOver={displaySubmenu}
                className="submenu-link"
              >
                Leistungen
              </MenuCategory>
            </li>
            <li>
              <MenuLink to="/referenzen">referenzen</MenuLink>
            </li>
            <li>
              <MenuLink to="/shop">shop</MenuLink>
            </li>
            <li>
              <MenuLink to="/cart">
                <FaShoppingCart style={{ fontSize: '1.5rem' }} />
                {hasItems && <CartCounter>{quantity}</CartCounter>}
              </MenuLink>
            </li>
          </Links>
          <SocialIcons>
            {socials.map(({ id, url, icon }) => (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            ))}
          </SocialIcons>
        </Container>
      </NavWrapper>
    </>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
