import  React, { forwardRef } from "react"

const Input = ({type, placeholder, onKeyDown}, ref) => {
    return(
        <input 
        type={type} 
        placeholder={placeholder} 
        onKeyDown={onKeyDown} 
        ref={ref}
        />
    )
}

const forwardedInputRef = forwardRef(Input)
export default forwardedInputRef