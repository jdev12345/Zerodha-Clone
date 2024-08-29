import React from 'react'

function Brockrage() {
  return (
    <div className='container'>
      <div className="row text-center mb-5 mt-5">
        <a style={{textDecoration:'none'}} className="col-6 fs-5">Brokerage calculator</a>
        <a style={{textDecoration:'none'}} className="col-6 fs-5">List of charges</a>
      </div>
      <div className="row text-muted " style={{fontSize:'12px'}}>
        <div className='col-1'></div>
        <ul className='col-11'>
          <li className='p-1'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
          <li className='p-1'>Digital contract notes will be sent via e-mail.</li>
          <li className='p-1'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
          <li className='p-1'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
          <li className='p-1'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
          <li className='p-1'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
        </ul>
      </div>
    </div>
  )
}

export default Brockrage