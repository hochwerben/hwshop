import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'
import { AppProvider } from '~/context/AppContext'

import { GlobalStyle, breakpoints } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import Sidebar from '~/components/Sidebar'
import Submenu from '~/components/Submenu'
import Footer from '~/components/Footer'

const Wrapper = styled.div`
  margin: 4rem auto;
  /* max-width: 960px; */
  max-width: var(--max-width);
  padding: 0px 1.0875rem 1.45rem;

  @media screen and (max-width: ${breakpoints.m}px) {
    margin: 2rem auto;
  }
`

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <AppProvider>
        <GlobalStyle />
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={() => {
            return (
              <>
                <Navigation />
                <Submenu />
                <Sidebar />
                <Wrapper>{children}</Wrapper>
                <Footer />
              </>
            )
          }}
        />
      </AppProvider>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
