import React from 'react'
import './home.css'
import  Python  from './Vector (8).svg';
import  Python2  from './Vector (9).svg';
import  Python3  from './Vector (11).svg';
import  ML  from './Vector (14).svg';
import  cyber  from './Vector (15).svg';
import  game  from './Vector (16).svg';
import  web2  from './Vector (17).svg';
import  web  from './Vector (13).svg';
function Firstcontain() {
    return (
        <div className='course_div'>
        <div className='img'>
           <img src={Python2} alt = "Python" className='yellow' />
           <img src={Python} alt = "Python" className='yellow' />
           <img src={Python3} alt = "logo" className='logo' />

           <p className='course_head'>Python</p>
        </div>

        <div className='img'>
        <img src={Python2} alt = "Python" className='yellow' />
           <img src={Python} alt = "Python" className='yellow' />
           <img src={web} alt = "Python" className='logo' />
           <p className='course_head-2'>Artificial Intelligence</p>
        </div>

        <div className='img'>
        <img src={Python2} alt = "Python" className='yellow' />
           <img src={Python} alt = "Python" className='yellow' />
           <img src={ML} alt = "Python" className='logo' />
           <p className='course_head-2'> Machine Learning</p>
        </div>

        <div className='img'>
        <img src={Python2} alt = "Python" className='yellow' />
           <img src={Python} alt = "Python" className='yellow' />
           <img src={cyber} alt = "Python" className='logo' />
           <p className='course_head-2'> Cyber Security</p>
        </div>

        <div className='img'>
        <img src={Python2} alt = "Python" className='yellow' />
           <img src={Python} alt = "Python" className='yellow'/>
           <img src={game} alt = "Python" className='logo' />
           <p className='course_head-2'> App Development</p>
        </div>

        <div className='img'>
        <img src={Python2} alt = "Python" className='yellow' />
           <img src={Python} alt = "Python" className='yellow' />
           <img src={web2} alt = "Python" className='logo' />
           <p className='course_head-2'> Web Development</p>
        </div>


        </div>

    )
}

export default Firstcontain
