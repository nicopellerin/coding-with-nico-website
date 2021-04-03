import styled from 'styled-components'

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin: 0;
  margin-top: 6rem;
  padding: 0;

  & > li:nth-child(odd) {
    border-bottom: 2px solid var(--primaryColor);
  }
`

export default CardList
