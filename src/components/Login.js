import React from 'react'
import Seperator from './Seperator'

export default function Login({handleForms}) {
  
  return (
    <>
        <p className='header'>TASK SCHEDULER</p>
      <p className='homeDesc'>Built to make your life more organized and stress-free.</p>
      <form action="" method='post'>
        <input className='txtField' type="text" name="" id="email" placeholder='Email' />
        <input className='txtField' type="password" name="" id="password" placeholder='Password'/>

        <input className='btnHome btnBlue' type="submit" value="Log In" />
      </form>
      <Seperator />
      <button className='btnHome btnGreen' onClick={()=>{
        handleForms(false)
      }} >Create Account</button>
    </>
  )
}
