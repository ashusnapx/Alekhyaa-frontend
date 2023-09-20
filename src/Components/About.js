import React from 'react'
import OurTeam from './OurTeam';

const About = () => {
  return (
    <div className='text-center' style={{marginTop:"40px"}}>
      <h1 style={{fontWeight:"bolder",fontSize:"50px"}}>Hello!👋 Welcome to Alekhyaa</h1>
      <p style={{fontSize:"18px"}}>Our automated platform will generate engaging video summaries of PIB press releases for you.</p>
      <OurTeam/>
    </div>
    
  )
}

export default About