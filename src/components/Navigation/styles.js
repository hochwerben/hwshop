import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const TopBar = styled.div`
  /* height: 1.5rem; */
  background: var(--clr-grey-4);
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    list-style-type: none;
    font-size: 0.8rem;
    font-weight: 500;
    width: 100%;
    padding-top: 3px;
    padding-bottom: 3px;

    @media screen and (max-width: 800px) {
      justify-content: space-around;
    }

    li {
      margin-right: 1rem;
      display: flex;
      align-items: center;

      a {
        color: var(--clr-font-primary);
        &:hover {
          text-decoration: underline;
        }
      }

      svg {
        color: var(--clr-primary);
        vertical-align: middle;
        display: inline-block;
        margin-right: 5px;
      }
    }
  }
`

export const NavWrapper = styled.nav`
  background-color: white;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`

export const Container = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  position: relative;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }
`

export const Logo = styled(Link)`
  img {
    width: 50px;
  }
`

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavToggle = styled.button`
  font-size: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  border-color: transparent;
  color: white;
  background: var(--clr-dark);
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  &:hover {
    background: var(--clr-primary);
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`

export const Links = styled.ul`
  display: none;
  list-style: none;

  li {
    height: 100%;
  }

  @media screen and (min-width: 800px) {
    justify-self: center;
    display: flex;
    text-align: center;
    height: 100%;
    align-items: center;
  }
`

export const MenuLink = styled(Link)`
  height: 100%;
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  color: var(--clr-mid-grey);
  text-transform: capitalize;
  letter-spacing: 1px;
  display: flex;
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: center;
  transition: var(--transition);
`

export const MenuCategory = styled.span`
  height: 100%;
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  color: var(--clr-mid-grey);
  text-transform: capitalize;
  letter-spacing: 1px;
  display: flex;
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: center;
  cursor: default;
  transition: var(--transition);
  &:hover {
    color: var(--clr-primary);
  }
`

export const CartCounter = styled.span`
  background-color: var(--clr-primary);
  color: white;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  /* float: right; */
  /* margin: -10px; */
  /* z-index: 20; */
`

export const SocialIcons = styled.ul`
  display: none;

  @media screen and (min-width: 800px) {
    display: flex;
    list-style: none;

    li {
      font-size: 1rem;
      margin-left: 0.5rem;

      a {
        color: #ababab;
        font-size: 1.5rem;
        transition: var(--transition);

        &:hover {
          color: var(--clr-primary);
        }
      }
    }
  }
`
