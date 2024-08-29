import React from 'react'

function LeftImage({
  ImgUrl, 
  prdName, 
  prdDesc, 
  tryDemo, 
  learnMore, 
  googlePlay, 
  appStore
}) {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-7 p-5">
          <img src={ImgUrl} alt="" />
        </div>
        <div className="col-5 p-5  mt-5">
          <h1>{prdName}</h1>
          <p>{prdDesc}</p>
          <div>
            {tryDemo?(
              <a href={tryDemo} style={{marginRight:"30px"}}>Try Demo</a>
            ):(<></>)}
            {learnMore?(
              <a href={learnMore}>Lean More</a>
            ):(<></>)}
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              {googlePlay?(
                <img 
                src="media/images/googlePlayBadge.svg" alt="" 
                style={{marginRight:"30px"}}/>
              ):(<></>)}
            </a>
            <a href={appStore}>
              {appStore?(
                <img 
                src="media/images/appstoreBadge.svg" alt=""/>
              ):(<></>)}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftImage