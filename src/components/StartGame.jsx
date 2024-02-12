import styled from 'styled-components'
import { Button } from '../styled/Button';
const StartGame = ({toggleGame}) => {
  return (
    <div>
      <Container>
        <img src='/images/dices.png' alt='diceimg' />
       <div>
       <Content>DICE GAME</Content>
        <Button onClick={toggleGame}>Play Now</Button>
       </div>
      </Container>
    </div>
  )
}
const Container = styled.div`
display : flex;
align-items: center;
max-width: 1180px;
margin: 0 auto;
height : 100vh ;
`;
const Content = styled.h1`
font-size: 96px;
white-space: nowrap;
`
export default StartGame