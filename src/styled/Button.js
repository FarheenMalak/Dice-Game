import styled from "styled-components";
export const Button = styled.button`
background-color:black;
color : white ;
padding : 5px ;
min-width: 200px;
height : 40px ;
border-radius: 5px;
border: 1px aolid transparent;
transition : background 0.4s ease-in;
cursor: pointer;
font-size: 16px;

&:hover{
background-color: white;
border: 1px aolid black;
color: black;
transition : background 0.3s ease-in;
}
`;
export const Primarybtn = styled(Button)`
&:hover{
    background-color: black;
    border: 1px aolid tranparent;
    color: white;
    }
    border: 1px aolid black;
    background-color:white;
    color: black;
`;