import React from 'react'
import './third.css'
import c from './c-plus-plus 1.svg'
import py from './python 2.svg'
import webD from './web-development 2.svg'
import android from './android 1.svg'
import vec from './Vector (24).svg'
import vec2 from './Vector (26).svg'
import vec3 from './Vector (25).svg'
import vec4 from './Vector (28).svg'
import vec5 from './Vector (30).svg'
import vec6 from './Vector (29).svg'
import vec7 from './Vector (31).svg'
import vec8 from './Vector (32).svg'
import vec9 from './Vector (39).svg'
import vec10 from './Vector (40).svg'
import aeroplane from './aeroplane.png'
import rocket from './rocket.png'
import paper from './paper-plane.png'

function Third() {
    return (
        <>
       <section className="third-sec">
          <div className="third_div">
              <div className='c'><img src={c} alt="log" />
              <div className="know-more">
                  <p>Introducton to Coding</p>
                  <h1>Know-more</h1></div>
              </div>

              <div><img src={py} alt="logo" />
              <div className="know-more">
                  <p>Introducton to Coding</p>
                  <h1>Know-more</h1></div></div>

              <div><img src={webD} alt="logo" />
              <div className="know-more">
                  <p>Introducton to Coding</p>
                  <h1>Know-more</h1></div></div>

              <div><img src={android} alt="logo" />
              <div className="know-more">
                  <p>Introducton to Coding</p>
                  <h1>Know-more</h1></div></div>
          </div>

          <div className="gradient" >
             
          <img src={vec} alt = "logo"/>
              <img src={vec3} alt = "logo" className="book"/>
              <img src={vec2} alt = "logo" className="book_back"/>
              <img src={vec4} alt = "logo" className="book_cover"/>
              <img src={vec6} alt = "logo" className="back2"/>
              <img src={vec5} alt = "logo" className="back"/>
              <img src={vec7} alt = "logo" className="back_R"/>
              <img src={vec8} alt = "logo" className="back_F"/>
              <div className='back_D'></div>
              <a className='third_btn'>Buy Now</a>
          </div>


       </section>
          <main>
              <div>
                  <h1>Learning Path</h1>
              </div>
              <div className="vector">
                  <img src={vec10} />
                  <img src={vec9} className="line" />
                  <img src={paper} />
                  <img src={vec9} className="line" />
                  <img src={aeroplane} />
                  <img src={vec9}  className="line"/>
                  <img src={rocket} />
              </div>
          </main>
          </>
    )
}

export default Third
