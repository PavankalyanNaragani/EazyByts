import React from 'react'
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am skilled in HTML,CSS,and Javascript, as well as programming through Java and Python. </span>
        <div className="skillBars">
            <div className="skillBar">
                <div className="skillBarTest">
                    <h2>UI/UX Design</h2>
                    <p>you can write your own content</p>
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarTest">
                    <h2>Web Design</h2>
                    <p>you can write your own content</p>
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarTest">
                    <h2>App Design</h2>
                    <p>you can write your content</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Skills