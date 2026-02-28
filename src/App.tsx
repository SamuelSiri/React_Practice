import './App.css';
import { useState } from 'react';
import {Button} from "./components";

function App() {
  const[count,setCount]=useState(0)
  const[name, setName]=useState("Karlennys")
  
  const countMore=()=>{
  setCount((count)=>count +1)
  }

  const changeName=()=>{
    setName("Mia")
  }
  return (
    <>
    <Button label={`${count}`} method={countMore}></Button>
    <Button label={`${name}`} method={changeName}></Button>
    </>
  )
}

export default App
