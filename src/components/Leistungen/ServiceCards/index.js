import React from 'react'
import { Grid, Wrapper, Heading, Price, Mwst, Content } from './styles'

export const Card = ({ title, price, img, children }) => (
  <Wrapper>
    <Heading>
      {title}
      {price ? (
        <>
          <Price>
            ab € {price}
            <Mwst>zzgl. Mwst.</Mwst>
          </Price>
        </>
      ) : null}
    </Heading>
    <Content img={img}>{children}</Content>
  </Wrapper>
)

const ServiceCards = ({ children }) => <Grid>{children}</Grid>

export default ServiceCards
