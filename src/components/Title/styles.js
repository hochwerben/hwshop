import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  h2 {
    font-size: 2rem;
    font-weight: 400;
    @media screen and (min-width: ${breakpoints.m}px) {
      font-size: 3rem;
    }
  }
`

export const Underline = styled.div`
  height: 0.25rem;
  width: 5.5rem;
  background: var(--clr-primary);
  margin: 0 auto;
`
