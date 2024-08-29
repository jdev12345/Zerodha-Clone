import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='container text-center border-bottom mb-5 pb-5'>
      <div className="row m-5 p-5 pb-0 mb-2"><h1>Technology</h1></div>
      <div className="row fs-5"><p>Sleek, modern, and intuitive trading platforms</p></div>
      <div className="row fs-6"><p>Check out our <Link style={{textDecoration:"none"}}> investment offerings <i class="fa fa-long-arrow-right fs-6" aria-hidden="true"></i></Link></p></div>
    </div>
  )
}

export default HeroSection