import React from 'react'

function HeroSection() {
  return (
    <div className='container pt-5'>
      <div className='row text-center m-5 pb-5'>
        <h1 className='fs-2'>We pioneered the discount broking model in India.<br/>
Now, we are breaking ground with our technology.</h1>
      </div>
      <div className='mb-5 pl-5 pr-5 border-bottom'></div>
      <div className="row p-5 m-5"  style={{fontSize:"18px"}}>
        <div className="col-1"></div>
        <div className="col-5">
        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

<p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

<p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
        </div>
        <div className="col-5">
        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

<p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

<p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
        <div className="col-1"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection