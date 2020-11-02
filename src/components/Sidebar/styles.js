import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const SidebarWrapper = styled.aside`
  visibility: ${props => (props.isSidebarOpen ? 'visible' : 'hidden')};
  z-index: ${props => (props.isSidebarOpen ? 2 : -1)};
  transform: ${props => (props.isSidebarOpen ? 'scale(1)' : 'scale(0)')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: var(--transition);
  padding: 1rem;
`

export const SidebarContainer = styled.div`
  background: white;
  border-radius: var(--radius);
  position: relative;
  padding: 4rem 2rem;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3);
`

export const CloseButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: hsl(210, 22%, 49%);
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`

export const SidebarLinks = styled.div`
  article {
    margin-bottom: 2rem;
  }
  h4 {
    text-transform: capitalize;
    color: #444;
    margin-bottom: 1rem;
  }
`

export const SidebarSublinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
`

export const Sublink = styled(Link)`
  text-transform: capitalize;

  svg {
    margin-right: 2px;
  }
`
