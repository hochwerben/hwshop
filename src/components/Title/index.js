import React from 'react'
import { Wrapper, Underline } from './styles'

const Title = ({ title }) => (
  <Wrapper>
    <h2>{title}</h2>
    <Underline />
  </Wrapper>
)

export default Title
