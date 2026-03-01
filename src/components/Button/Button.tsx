import './Button.css'

interface Props{
label:string,
method:() => void

}

export const Button=({label,method}:Props)=>{
 

return(
 <>
    <button className="button_test" onClick={method}> Samuel {label}</button>
 </>
)

}

