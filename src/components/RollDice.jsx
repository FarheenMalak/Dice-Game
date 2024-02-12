import { useState } from "react";
import styled from "styled-components"

const RollDice = ({currentDice,rollDice}) => {
  return (
    <DiceContainer>
      <div onClick={rollDice} className="dice"><img src={`/images/dice${currentDice}.png`} alt="diceimg1" />
      <p>Click to roll the dice!</p>
      </div>
    </DiceContainer>
  )
}

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

p{
  font-size:24px;
}
.dice{
  cursor: pointer;
}
`;
export default RollDice