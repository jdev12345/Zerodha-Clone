import React from 'react'

function Hero() {
  return (
    <div style={{backgroundColor:'#387ed1',color:'white'}} className='container-fluid p-5'>
      <div className="row m-5 mt-0 pt-0 p-5 mb-0">
        <div className="col-6">Support Portal</div>
        <div className="col-6 text-end text-decoration-underline">Track tickets</div>
      </div>
      <div className="row  m-5 mt-0 pt-0 p-5">
        <div className="col-6 fs-4">
         <p>Search for an answer or browse help topics to create a ticket</p>
         <input className='support_input mt-4 mb-3' type="text" placeholder='Eg: how do i activate F&O, why is my order getting regected'
        />
         <div className='support'>
          <a href="">Track account opening</a>
          <a href="">Track segment activation </a>
          <a href="">Intraday margins</a><br/>
          <a href="">Kite user manual</a>
         </div>
        </div>
        <div className="col-6 pt-5 px-5">
          <div className="row fs-4 pb-2">Featured</div>
          <ol className="row fs-5 featured">
            <li className='mb-2'><a href="">Surveillance measure on scrips - August 2024</a></li>
            <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Hero