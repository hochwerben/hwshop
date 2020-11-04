import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Wrapper, ImageContainer, ProductTitle, Options, Count, DeleteButton } from './styles'
import { FaTrash } from 'react-icons/fa'

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
    // height="60px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
      (option, index) => <li key={index}>{`${option.name}: ${option.value} `}</li>
    )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <Wrapper>
      <ImageContainer>
        <Link to={`/produkt/${item.variant.product.handle}/`}>
          {variantImage}
        </Link>
      </ImageContainer>
      <ProductTitle>
        {item.title}
        {`  `}
        {item.variant.title === !'Default Title' ? item.variant.title : ''}
      </ProductTitle>
      <Options>
        {selectedOptions}
      </Options>
      <Count>
        {item.quantity}&nbsp;Stk.
      </Count>
      <DeleteButton>
        <FaTrash onClick={handleRemove} style={{ cursor: 'pointer' }} />
      </DeleteButton>
    </Wrapper>
  )
}

export default LineItem
