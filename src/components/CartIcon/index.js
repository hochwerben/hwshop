import React, { useContext } from 'react'
import { Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import { FaShoppingCart } from 'react-icons/fa'
import reduce from 'lodash/reduce'
import styled from '@emotion/styled'

const Wrapper = styled.span`
  display: inline-block;

  @media screen and (min-width: 800px) {
    display: none;
  }

  span {
    background-color: var(--clr-primary);
    color: white;
    border-radius: 20px;
    padding: 0 10px;
    font-size: 1.2rem;
    /* float: right; */
    /* margin: -10px; */
    /* z-index: 20; */
  }
`

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const CartIcon = () => {
  const [hasItems, quantity] = useQuantity()
  return (
    <Wrapper>
      <Link to="/cart">
        <FaShoppingCart
          style={{ fontSize: '1.5rem', verticalAlign: 'middle' }}
        />
        {hasItems && <span>{quantity}</span>}
      </Link>
    </Wrapper>
  )
}

export default CartIcon
