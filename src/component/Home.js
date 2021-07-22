import React from 'react'
import './home.css'
import Firstcontain from './first-contain'
import SecondPage from './SecondPage'
import Third from './Third'

import coding from './coding2 1.svg'
import Last from './Last'


function Home() {
    return (
        <>
        <header>
            <nav>
                <h1>Vidyayan</h1>
            </nav>
            <div className="heading">
                <h1>Creating Future <span>Tech Leaders</span> </h1>
                <p> Live coding classes for age 6 -15 to help your child <br />learn to code</p>
                <br />
                <br />
                <div className='btn_Div'>
                    <a className="btn">Join Now</a>
                </div>
            </div>
            <img src={coding}  className="cod"/>

            <div className='edge'>
                <p>Cutting edge courses to make your child future ready</p>
            </div>

            < Firstcontain/>


        </header>

         < SecondPage />
         < Third />
         <Last/>
         </>
    )
}

export default Home
