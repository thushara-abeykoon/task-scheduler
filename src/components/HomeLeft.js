import React, { useState } from 'react'
import Login from './Login'
import CreateAccount from './CreateAccount'


export default function HomeLeft() {
  
const [activeLogin,setActiveLogin] = useState(true);

  const handleForms = (isLoginForm) => {
    setActiveLogin(isLoginForm)
  }


  return (
    <div className='homeLeft'>
      {(activeLogin)?<Login handleForms={handleForms} />:<CreateAccount handleForms={handleForms}/>}
    </div>
  )
}
