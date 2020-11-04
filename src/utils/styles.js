import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      *,
      ::before,
      ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :root {
        --clr-primary: #f49402;
        --clr-dark: #6f6f6f;
        --clr-mid-grey: #656565;
        --clr-grey-1: #333a42;
        --clr-grey-2: #94989c;
        --clr-grey-3: #6e757c;
        --clr-grey-4: #efefef;
        --clr-font-primary: #494949;
        --max-width: 1170px;
        --transition: all 0.3s linear;
        --spacing: 0.1rem;
        --radius: 0.25rem;
        --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        --max-width: 1170px;
        --fixed-width: 620px;
      }
      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      body {
        font-family: 'IBM Plex Sans', sans-serif;
        margin: 0;
        line-height: 1.5;
        font-size: 0.875rem;
        color: var(--clr-font-primary);
      }
      a {
        text-decoration: none;
        color: var(--clr-font-primary);
      }
      a:hover {
        color: var(--clr-primary);
      }
    `}
  />
)

export const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1 auto;
  grid-template-areas: 'left . right';

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridRight = styled.div`
  grid-area: right;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`

export const ThemeTitle = styled.h1`
  background-color: var(--clr-primary);
  padding: 0.5rem 3rem;
  color: white;
  text-transform: capitalize;
  font-size: ${props => (props.mt ? '1rem' : '1.3rem')};
  position: relative;
  display: inline-block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;
  margin-top: ${props => (props.mt ? '2rem' : '0')};
  font-weight: 500;

  @media screen and (max-width: ${breakpoints.m}px) {
    font-size: 1rem;
    padding: 0.5rem 2rem;
  }
`

export const Button = styled.button`
  background: var(--clr-primary);
  padding: 5px 10px;
  color: white;
  border: none;
  border-radius: 2px;
  font-size: ${({ sm }) => (sm ? '0.9rem' : '1.1rem')};
  /* box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.15); */
  cursor: pointer;
`
