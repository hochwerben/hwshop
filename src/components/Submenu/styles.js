import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const SubmenuContainer = styled.aside`
  display: ${props => (props.isSubmenuOpen ? 'block' : 'none')};
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  padding: 2rem;
  border-radius: var(--radius);
  transition: var(--transition);
  background: white;
  box-shadow: var(--dark-shadow);

  ::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  h4 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    font-size: 1.1rem;
  }
`

export const SubmenuContent = styled.div`
  display: grid;
  gap: 0.25rem 2rem;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
`

export const SubmenuLink = styled(Link)`
  width: 10rem;
  color: var(--clr-mid-grey);
  height: 2rem;

  svg {
    margin-right: 0.5rem;
  }
`
