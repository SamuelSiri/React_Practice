import './App.css';
import {useFetch} from "./hooks"

function App() {
  type Product={
  id:number,
  name:string,
  size:string,
  stock:number
 }

  const url="http://localhost:3000/products/list/"
  const {data,error,loading}= useFetch<Product[]>(url)
  



  if(loading){
    return <div>Loading....</div>
  }

  if(error){
    return <div>!UPS... hay un error : {error.message} </div>
  }
  return(
    <> 

   <div>{JSON.stringify(data)}</div>

    {data?.map(product=>(
      <div key={product.id}>
        {product.name} | {product.size} | {product.stock}

      </div>
       
    ))}
    
    
    </>
  )

  
}

export default App
