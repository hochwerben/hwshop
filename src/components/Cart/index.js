import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

import { Wrapper } from './styles'
import { Button } from '~/utils/styles'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <Wrapper>
      {lineItems}
      {/* <h2>Subtotal</h2>
      <p>€ {checkout.subtotalPrice}</p>
      <br />
      <h2>Taxes</h2>
      <p>€ {checkout.totalTax}</p>
      <br /> */}
      <h2>Summe</h2>
      <p>€ {checkout.totalPrice}</p>
      <br />
      <Button
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Zur Kasse
      </Button>
    </Wrapper>
  )
}

export default Cart
