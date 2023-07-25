import React, { useState } from 'react'

function Register() {
    const [inputName, setInputName] = useState("")  // usestate for inpnut name
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const [data, setData] = useState([])
    
    function handleClick(e){
        e.preventDefault(); 
        const obj = {name:inputName, email:inputEmail, password:inputPassword}
        setData([...data, obj])
        localStorage.setItem("data",JSON.stringify(data))
        alert("Registered Succesfully")
        
        setInputName("")
        setInputEmail("")    // To clear the input after submission
        setInputPassword("")
    }
  return (
    <>
        <form className='container'>
            
            <div className='header'>
                <h1>REGISTRATION FORM</h1>
            </div>
            <div className='name-div'>
                <input type='text' placeholder='Enter Your Name' name='name' value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
            </div>
            <div className='email-div'>
                <input type='email' placeholder='Enter Your Email' name='email' value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)}/>
            </div>
            <div className='password-div'>
                <input type='password' placeholder='Enter Your Password' name='password' value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)}/>
            </div>
            <div className='submit-btn'>
                <button type='submit' onClick={handleClick}>Submit</button>
            </div>

            
        </form>
    </>
  )
}

export default Register