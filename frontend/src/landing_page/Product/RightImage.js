import React from 'react'

function RightImage({
  ImgUrl, 
  prdName, 
  prdDesc, 
  learnMore
}) {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-5 p-5  mt-5">
          <h1>{prdName}</h1>
          <p>{prdDesc}</p>
          <div>
            {learnMore?(
              <a href={learnMore}>Lean More</a>
            ):(<></>)}
          </div>
        </div>
        <div className="col-7 p-5">
          <img src={ImgUrl} alt="" />
        </div>
      </div>
    </div>
  )
}

export default RightImage