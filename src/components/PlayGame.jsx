import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, Primarybtn } from '../styled/Button'
import Rules from './Rules'
const PlayGame = () => { 
  const [score,setscore] = useState(0)
  const [selectNumber,setselectNumber] = useState()
  const [currentDice,setcurrentDice] = useState(1);
  const [error,seterror] = useState("")
  const [showRules,setshowRules] = useState(false);

  const generateRandomnumber = (min , max) => {
    return  Math.floor(Math.random()*(max-min)+min)
};
const resetScore = ()=>{
 setscore(0);
}
const rollDice = () => {
  if(!selectNumber) {
    seterror("You have not selected any number!!")
  return
  };
  const randomNumber = generateRandomnumber(1,7);
  setcurrentDice(prev => randomNumber);

  if(selectNumber === randomNumber){
    setscore(prev => prev + 1)
  }else{
    setscore(prev => prev - 1)
  }
  setselectNumber(undefined);
};
  return (
    <MainContainer>
       <div className='top_section'>
       <TotalScore score={score}/>
       <NumberSelector seterror={seterror} error={error} selectNumber={selectNumber} setselectNumber={setselectNumber}/>
       </div>
       <RollDice currentDice={currentDice} rollDice={rollDice}/>
       <div className="btns">
        <Primarybtn onClick={resetScore}>Reset Score</Primarybtn>
        <Button onClick={()=> setshowRules(prev=> !prev)}>{showRules ? "Hide " : "Show "}Game Rules</Button>
        {showRules && <Rules/>}
       </div>
    </MainContainer>
  )
}
const MainContainer = styled.div`
padding-top:70px;
.top_section{
    display:flex;
    justify-content:space-around;
    align-items: end;
}
.btns{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`

export default PlayGame