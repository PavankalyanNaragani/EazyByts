import React from 'react'
import './Intro.css';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Pavan</span><br />Web Developer</span>
            <p className="introPara">I am a skilled web developer with experience in creating <br />visually appealing and user-friendly websites. </p>
            <div><button className="btn">Hire me</button></div>
        </div>
    </section>
  )
}

export default Intro