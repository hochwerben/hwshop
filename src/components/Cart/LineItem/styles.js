import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-areas:
      "img title title title"
      "img options count delete ";
  align-items: center;
  padding: 2rem 0 2rem 0;
  box-shadow: var(--light-shadow);
  padding: 1rem;
  margin: 2rem 0;

  @media screen and (max-width: 800px) {
    grid-template-areas:
      "title title title"
      "img img img"
      "options count delete";
  }
`

export const ImageContainer = styled.div`
  grid-area: img;
  height: 200px;
  align-self: flex-start;
  justify-self: center;
  img {
   height: 100%;
  }
`

export const ProductTitle = styled.p`
  grid-area: title;
  font-size: 1rem;
  font-weight: 500;
`

export const Options = styled.ul`
  list-style: none;
  grid-area: options;
  align-self: start;
`

export const Count = styled.p`
  grid-area: count;
  align-self: start;
`

export const DeleteButton = styled.div`
  grid-area: delete;
  text-align: end;
`