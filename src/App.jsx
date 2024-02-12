import './App.css'
import { useState } from 'react'
import StartGame from './components/StartGame.jsx'
import PlayGame from './components/PlayGame.jsx';
function App() {
    const [GameStarted,setGameStarted] = useState(false)
    const toggle = () => {
    setGameStarted((prev) => !prev);
};
    return (
  <>
   {GameStarted ? <PlayGame /> : <StartGame toggleGame={toggle}/>}
</>
)
}

export default App