import React from 'react'
import styled from 'styled-components';
const Wrapper=styled.div`
      .home{
      display:flex;
      justify-content:center;
      align-items:center
      font-size:3rem;
      h3{
        margin:8rem
      }
`
const About = () => {
  return (
    <Wrapper>
   <div className='home'>
       <h3>Welcome to my home page</h3>
    </div>
    </Wrapper>
  )
}

export default About