import styled from 'styled-components'
const NumberSelector = ({seterror, error,selectNumber,setselectNumber }) => {
const  numberArray = [1,2,3,4,5,6];

const numberSelectorHandler = (value) =>{
  setselectNumber(value)
  seterror("")
}
  return (
   <NumberSelectorContainer>
    <p className='error'>{error}</p>
        <div className='flex'>
        {numberArray.map((value,i)=>(
          <Box    
          isSelected = {value === selectNumber}
          key={i} onClick={()=>numberSelectorHandler(value) } >{value}</Box>
        ))}
</div>
<p>Select any Number</p>
   </NumberSelectorContainer>
  )
}
const NumberSelectorContainer = styled.div`
display: flex;
flex-direction : column;
align-items: end;
cursor:pointer;
.flex{
    display:flex;
    gap: 24px;
}
.error{
  color: red;
}
p{
    font-size: 24px;
    font-weight: 700;
}
`;
const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items : center;
font-size: 24px;
font-weight:700;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (props.isSelected ? "white" : "black")};
`
export default NumberSelector