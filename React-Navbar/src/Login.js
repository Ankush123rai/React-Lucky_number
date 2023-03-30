import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper=styled.div`
 justify-content:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:9rem;
 .input{
  justify-content:center;
  display:flex;
  flex-direction:column;
  width:240px;
 }

label{
  font-size:1.3rem
}
 input{
  padding:0.8rem 1.4rem
  border:none;
  background-color:#eee;
  border-radius:8px
  margin:.2rem 0;
 }
 button{
  padding:5px 2rem;
  margin:1rem 0;
  border:none;
  background-color:teal;
  border-radius:5px;
  color:#fff
 }
`
const Login = () => {
  
  const [change, setChange]=useState(true)

  function handleClick(){
    if(change===false){
      setChange(true)
    }
    else{
      setChange(false)
    }
  }


  return (
    <Wrapper>
            {change ? 
      <form>

          <div className="input">

            <label>First Name</label>
            <input type="text" placeholder='Enter Name'/>
            
            <label>Email</label>
            <input type="text" placeholder='Enter Email'/>
            
            <label>password</label>
            <input type="password" placeholder='Password'/>
            
            <label>Confirm -password</label>
            <input type="password"  placeholder='Confirm -Password'/>
          </div>
              <button>Submit</button>

              
        
      </form>:
           <div>
           <label>First Name</label>
            <input type="text" placeholder='Enter Name'/>
        <br />
            <label>Email</label>
            <input type="text" placeholder='Enter Email'/>
                <button>Submit</button>
              </div>
            }
            <p onClick={handleClick}>{change? " I already Account login":"i havent any Account ?registrt"}</p>
    </Wrapper>
  )
}

export default Login