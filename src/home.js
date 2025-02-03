import React from 'react'
import "./home.css"
import resume from "./Gabriel_Oetken_Resume.pdf"

function Home() {
  return (
    <div className='home'>
        <div className='homeImage'>
            {/* Image will go here*/}
        </div>
        <div className='bio'>
            <h1>Gabriel Oetken</h1> 
            <p>Computer Engineering Major - Cyber Security Specialization @ University of Maryland</p>
            <a className = 'resumeButton' href = {resume} target="_blank" downloads = "Gabriel_Oetken_Resume.pdf">
                Resume
            </a>
        </div>
    </div>
  )
}

export default Home

