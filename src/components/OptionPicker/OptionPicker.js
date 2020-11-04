import React from 'react'
import { Select } from './styles'

export const OptionPicker = ({ name, children, onChange }) => {
  return (

    <Select name={name} onChange={onChange} value={'selected'}>
      {children}
    </Select>
  )
}
