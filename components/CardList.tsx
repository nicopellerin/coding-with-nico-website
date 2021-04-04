import styled from 'styled-components'

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 40px 10px;
  border-radius: 5px;

  @media (min-width: 768px) {
    background: hsl(257, 58%, 6%);
    padding: 60px 60px;
    margin-top: 60px;
  }
`

export default CardList
