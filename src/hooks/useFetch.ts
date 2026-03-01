import { useEffect, useState } from "react"

interface Params<T>{
    data: T | null,
    loading: boolean,
    error: Error | null

}


export function useFetch<T>(url: string): Params<T>{
  const[data,setData]=useState<T | null>(null);
  const [loading,setLoading]=useState(false);
  const [error, setError]=useState<Error | null> (null);

  useEffect(()=>{
    let controller = new AbortController();
    const fetchData = async()=>{
    try{
        setLoading(true);
            const response = await fetch(url,controller);
            if(!response.ok){
                throw new Error("Error al hacer la peticion");
            }
            const jsonData : T = await response.json();
            setData(jsonData);
            setError(null);
    }catch(err){
        if(err instanceof Error){
            console.log(err.message);
            setError(err);
        }
        else{
            console.log("Ups, ha habido un error inesperado.");
        }

    }
    finally{
      setLoading(false);
    }
}
    fetchData()
    return()=>{
     controller.abort();
     
    }
  },[url])
  return{
    data,
    loading,
    error
  };
};
