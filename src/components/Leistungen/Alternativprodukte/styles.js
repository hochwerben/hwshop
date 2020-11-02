import styled from '@emotion/styled'

export const Links = styled.ul`
  list-style-type: none;
  margin: 1rem;
`

export const LinkItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: color 0.2s linear;

  span {
    display: block;
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }
`
