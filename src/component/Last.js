import React from 'react'
import './last.css'
import work from './work.jpg'

function Last() {
    return (
        <>
       <section className="last_sec">
           <div className='work'><h1>How it works </h1></div>
           <div className="flex">
           <div className="fifty">
               <div className="every">
              <div className="circle">1</div>
               <p><span>Book</span> <br/>
Book a free coding classes with us. You just 
need a laptop with good internet connectivity</p>
</div>
               <div className="every">
              <div className="circle">2</div>
               <p><span>Book</span> <br/>
Book a free coding classes with us. You just 
need a laptop with good internet connectivity</p>
</div>
               <div className="every">
              <div className="circle">3</div>
               <p><span>Book</span> <br/>
Book a free coding classes with us. You just 
need a laptop with good internet connectivity</p>
</div>
               <div className="every">
              <div className="circle">4</div>
               <p><span>Book</span> <br/>
Book a free coding classes with us. You just 
need a laptop with good internet connectivity</p>
</div>
               <div className="every">
              <div className="circle">5</div>
               <p><span>Book</span> <br/>
Book a free coding classes with us. You just 
need a laptop with good internet connectivity</p>
</div>
           </div>
           <div className="fifty">
               <img src={work} alt="Logo" />
           </div>
           </div>
       </section>
       <main className="last_main">
           <h1>Book a free Trial Class</h1>
             <a>Book Now</a>
       </main>
       </>
    )
}

export default Last;