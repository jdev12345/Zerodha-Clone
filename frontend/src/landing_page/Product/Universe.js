import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      <div className="row fs-2 m-4 fw-normal">
        <div>The j.dev Universe</div>
      </div>
      <div className="row">
        <p>
          Get to know my development journey so far and explore some of my humble Projects 
        </p>
      </div>
      <div className="row mt-3">
        <div className="row p-5">
          <div className="col-4">
            <a target="_blank" href="https://www.iitg.ac.in/yearbook/" className="fs-2" style={{textDecoration:"none"}}>YearBook Portal</a>
            <p className="">SAIL, IITG</p>
          </div>
          <div className="col-4 text-center">
            <div className="row">
              <a target="_blank" href="https://superergo.in/" className="fs-2" style={{textDecoration:"none"}}>SuperErgo</a>
              <p className="">Summer Intern</p>
            </div>
          </div>
          <div className="col-4">
            <a target="_blank" href="https://github.com/jdev12345/JossaDataAnalysis" className="fs-2" style={{textDecoration:"none"}}>Josaa Analysis Portal</a>
            <p className="">Coding Club Project</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4 text-center">
            <div className="row">
              <a target="_blank" href="https://intelli-fill-rho.vercel.app/" className="fs-2" style={{textDecoration:"none"}}>FromEase</a>
              <p className="">InternFill Hackathon, Unstop</p>
            </div>
          </div>
          <div className="col-4">
            <a target="_blank" href="https://audiofy-hcx1.onrender.com/" className="fs-2" style={{textDecoration:"none"}}>AudioVizer</a>
            <p className="">Ethos Hackathon, IITG</p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="row text-center m-5 p-5">
        <div className="col-4"></div>
        <a className="btn btn-primary col-4 pt-3 pb-3 fs-5" href="mailto:devjyoti598@gmail.com">Got a freelancing Job?</a>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Universe;
