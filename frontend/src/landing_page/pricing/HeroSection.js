import React from 'react'

function HeroSection() {
  return (
    <div className='container'>
      <div className="row text-center p-3 m-5 border-bottom">
        <h1 className='pt-4 fs-1'>Pricing</h1>
        <p className='fs-5 mb-5 pb-5'>Free equity investments and flat ₹20 intraday and F&O trades</p>
      </div>
      <div className="row m-5 mb-0 p-5 border-bottom">
        <div className="col-4 text-center">
          <img style={{width:'70%'}} src="media/images/pricing0.svg" alt="" />
          <h3 className='p-4'>Free equity delivery</h3>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 text-center">
          <img style={{width:'70%'}} src="media/images/pricing20.svg" alt="" />
          <h3 className='pt-4 pb-4'>Intraday and F&O trades</h3>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 text-center">
          <img style={{width:'70%'}} src="media/images/pricing0.svg" alt="" />
          <h3 className='p-4'>Free direct MF</h3>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection