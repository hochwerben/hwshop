import React, { useContext } from 'react'
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

import { Wrapper, SmallText, Price } from './styles'
import { Button } from '~/utils/styles'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    // window.location.replace(checkout.webUrl)
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <Wrapper>
      {lineItems}
      {/* <h2>Subtotal</h2> */}
      {/* <p>€ {checkout.subtotalPrice}</p> */}
      {/* <br /> */}
      {/* <h2>Taxes</h2> */}
      {/* <p>€ {checkout.totalTax}</p> */}
      <div style={{ textAlign: 'center' }}>
        <h2>Summe<SmallText>&nbsp;(inklusive Mwst.)</SmallText></h2>
        <Price>€ {checkout.totalPrice}</Price>
        <br />
        <Button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Zur Kasse
        </Button>
      </div>
    </Wrapper>
  )
}

export default Cart
