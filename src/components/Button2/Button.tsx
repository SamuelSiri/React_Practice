
interface Props{
label:string,
method:() => void

}

export const Button2=({label,method}:Props)=>{

return(
 <>
    <button className="button_test" onClick={method}>
     {label}
    </button>

  
 </>
)

}

