import styled from '@emotion/styled'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  justify-content: center;
  margin: 3rem auto;
`

export const Wrapper = styled.div`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  width: 100%;
  max-width: 350px;
`

export const Heading = styled.h3`
  text-align: center;
  background-color: var(--clr-primary);
  padding: 0.5rem 1.3rem;
  color: white;
  font-size: 1rem;
  position: relative;
`

export const Price = styled.span`
  position: absolute;
  top: -1rem;
  right: -1.5rem;
  background-color: white;
  color: black;
  padding: 10px 15px;
  font-size: 0.9rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  z-index: 1;
  font-weight: bold;
  line-height: 1;
`

export const Mwst = styled.span`
  display: block;
  font-size: 0.6rem;
  color: #6e6e6e;
  font-weight: 400;
`

export const Content = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-rows: ${props => (props.img ? '1fr 1.5fr' : '1fr')};
  height: 100%;

  h4 {
    margin-left: -1rem;
    padding-top: 1rem;
  }
`
