import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { breakpoints } from '~/utils/styles'

export const Wrapper = styled.footer`
  background: var(--clr-grey-1);
  color: var(--clr-grey-2);
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-weight: 300;
  font-size: 1rem;

  ul {
    list-style: none;
  }
`

export const Grid = styled.div`
  padding: 1rem;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'phone address links'
    'mail address links'
    'icons address info';
  align-items: start;

  @media screen and (max-width: ${breakpoints.m}px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'phone'
      'mail'
      'address'
      'links'
      'icons'
      'info';
  }
`

export const Phone = styled.div`
  grid-area: phone;

  h3 {
    margin: 0;

    a {
      color: var(--clr-grey-2);
      &:hover {
        color: var(--clr-primary);
      }
    }
  }

  span {
    font-size: 1.2rem;
    vertical-align: middle;
    line-height: 2;
    font-weight: 300;
  }
`

export const Mail = styled.div`
  grid-area: mail;

  a {
    color: var(--clr-grey-2);
    &:hover {
      color: var(--clr-primary);
    }
  }
  span {
    font-size: 1.2rem;
    vertical-align: middle;
    line-height: 2;
    font-weight: 300;
  }
`

export const Address = styled.div`
  grid-area: address;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  ul {
    margin: 0;
    padding: 0;

    .heading {
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 2;
    }
  }
`

export const Socials = styled.div`
  grid-area: icons;
  align-self: center;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;

  a {
    font-size: 2rem;
    margin: 0 0.4rem;
    transition: var(--transition);
    color: var(--clr-grey-3);
    line-height: 0;
    &:hover {
      transform: translateY(-10%);
    }
  }
`

export const Info = styled.div`
  grid-area: info;
  align-self: flex-end;
  margin: 0.5rem 0;
  font-size: 0.9rem;

  a {
    color: var(--clr-grey-2);
    &:hover {
      color: var(--clr-primary);
    }
  }

  ul {
    grid-area: links;
    margin: 0.5rem 0 0 0;
    padding: 0;

    li {
      margin: 0;
      align-self: start;
    }
  }
`

export const Policy = styled.ul`
  margin-top: 0.5rem;
`

export const ImpLink = styled(Link)`
  color: var(--clr-grey-2);
  margin-top: 2rem;
  font-size: 0.9rem;

  &:hover {
    color: var(--clr-primary);
  }
`
