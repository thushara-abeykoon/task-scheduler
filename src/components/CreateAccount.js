import React from 'react'
import Seperator from './Seperator'

export default function CreateAccount({handleForms}) {
  return (<>
    <p className='header'>CREATE ACCOUNT</p>
    <form action="" method='post'>
        <input className='txtField' type="text" name="" id="fname" placeholder='First Name' />
        <input className='txtField' type="text" name="" id="lname" placeholder='Last Name' />
        <input className='txtField' type="text" name="" id="email" placeholder='Email' />
        <input className='txtField' type="password" name="" id="password" placeholder='Password'/>
        <input className='txtField' type="password" name="" id="confirmPassword" placeholder='Confirm Password'/>
        <input className='btnHome btnGreen' type="submit" value="Create Account" />
      </form>
      <Seperator />
      <button className='btnHome btnBlue' onClick={()=>{
        handleForms(true)
      }}>Back</button> 
  </>

  )
}
