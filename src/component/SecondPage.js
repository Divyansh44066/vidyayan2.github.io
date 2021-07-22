import React from 'react'
import './second.css'
import coding from './coding2 1.svg'
import svg1 from './Vector (18).svg'
import svg2 from './Vector (19).svg'
import svg3 from './Vector (20).svg'
import svg4 from './Vector (21).svg'
import svg5 from './Vector (22).svg'
import svg6 from './Vector (23).svg'

function SecondPage() {
    return (
        <section>
            <div className='first-half'>
                <h1>Why Coding?</h1>
                <p>Vidyayan Focuses on developing ‘skills’ rather than ‘syntax’, to make children</p>
            </div>
            <div className='Second-half'>
                    <div className='svg_div'>
                        <div className="svg3">
                            <img src={svg1} alt="logo" />
                        <h3>Logic  <p>for predicting & analysis</p></h3>
                       
                       
                        </div>
                        <div className="svg3">
                            <img src={svg2} alt="logo" />
                        <h3>Evaluation  <p>Involves making judgement</p></h3>
                       
                       
                        </div>
                        <div className="svg3">
                            <img src={svg3} alt="logo" />
                        <h3>Algorithms  <p>To make step & rules</p></h3>
                       
                       
                        </div>
                        
                    </div>
                    <div className="coding">
                        <img src={coding} alt = "Logo" />
                    </div>
                    <div className='svg_div'>
                        <div className="svg3">
                            <img src={svg4} alt="logo" />
                        <h3>Abstraction  <p>To remove unneccessary data</p></h3>
                       
                       
                        </div>
                        <div className="svg3">
                            <img src={svg5} alt="logo" />
                        <h3>Patterns  <p>To make use of similarities</p></h3>
                       
                       
                        </div>
                        <div className="svg3">
                            <img src={svg6} alt="logo" />
                        <h3>Decomposition  <p>Break down a problem</p></h3>
                       
                       
                        </div>
                        
                    </div>
            </div>
                    <div className='btn_Div'>
                    <a href="#" className="btn">Book a free Class</a>
                </div>
        </section>
    )
}

export default SecondPage
