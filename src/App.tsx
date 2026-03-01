import './App.css';
import { useEffect, useState } from 'react';
import {Button} from "./components";

function App() {
 type Product={
  id:number,
  name:string,
  size:string,
  stock:number
 }


  const[data,setData]=useState<Product[]>([])
  const[count,setCount]=useState(0)
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState<string | null> (null)
  
  const increaseCount=()=>{
    setCount((count)=>count + 1)
  }

  const fetchData = async()=>{
    try{ 
      setLoading(true)
       const reponse = await fetch("http://localhost:3000/products/list/");

       if(!reponse.ok){
        throw new Error("Error al obtener datos")
       }

       const jsonData = await reponse.json();
       console.log(jsonData)
       setData(jsonData);
      
      }
     
      catch(err){
        if(err instanceof Error){
          setError(err.message);
        }
        else{
          setError("Ha ocurido un error inesperado.")
        }
     }
     finally{
      setLoading(false)
     }
  }

  //Comunicarnos con algo externo como puede ser un endpoint de un server 
  useEffect(()=>{
   fetchData();
  },[])


  if(loading){
    return <div>Loading....</div>
  }

  if(error){
    return <div>!UPS... hay un error : {error} </div>
  }
  return(
    <>
    <Button label={`${count}`} method={increaseCount}></Button>
    
    {/* <div>{JSON.stringify(data)}</div> */}
    
    {data.map(product=>(
      <div key={product.id}>
        {product.name} | {product.size} | {product.stock}

      </div>
       
    ))}
    
    
    </>
  )

  
}

export default App
