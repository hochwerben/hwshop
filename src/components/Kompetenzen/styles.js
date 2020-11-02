import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'

export const KompetenzenContainer = styled.section`
  padding: 3rem 0;
`

export const ImageContainer = styled.div`
  position: relative;
`

export const ImageTitle = styled.span`
  position: absolute;
  top: 5%;
  left: 5px;
  background-color: var(--clr-primary);
  padding: 0.2rem 1.3rem;
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  transition: var(--transition);

  @media screen and (max-width: ${breakpoints.m}px) {
    font-size: 0.9rem;
  }
`

export const Price = styled.span`
  position: absolute;
  top: 5%;
  right: 5px;
  border: 1px solid #e2e2e2;
  color: var(--clr-grey-2);
  font-size: 1.1rem;
  padding: 0.2rem 0.8rem;
  background-color: white;

  @media screen and (max-width: ${breakpoints.m}px) {
    font-size: 0.9rem;
  }
`

export const SkewSection = styled.div`
  position: relative;
  background-color: #f1f1f1;
  height: 50px;
  transform-origin: top left;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: white;
    clip-path: polygon(100% 0, 0 0, 0 100%);
  }
`
