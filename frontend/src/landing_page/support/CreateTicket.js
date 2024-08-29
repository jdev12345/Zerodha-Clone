import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row fs-3  m-5 p-2">To create a ticket, select a relevant topic</div>
      <div className="row  m-5 mt-0  p-2">
        <div className="col-4">
          <div className="fs-5"><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</div>
          <div className="m-3 mt-2 mb-0">
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Getting started</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Online</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Offline</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Charges</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Company, Partnership and HUF</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Non Resident Indian (NRI)</a>
            <br />
          </div>
        </div>
        <div className="col-4">
          <div className="fs-5"><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</div>
          <div className="m-3 mt-2 mb-0">
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Login credentials</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Your Profile</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Account modification and segment addition</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">CMR & DP ID</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Nomination</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Transfer and conversion of shares</a>
            <br />
          </div>
        </div>
        <div className="col-4">
          <div className="fs-5"><i class="fa fa-stack-exchange" aria-hidden="true"></i> Trading and Markets</div>
          <div className="m-3 mt-2 mb-0">
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Trading FAQs</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Kite</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Margins</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Product and order types</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Corporate actions</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} className="">Kite features</a>
            <br />
          </div>
        </div>
      </div>
      <div className="row m-5 mt-0">
        <div className="col-4">
          <div className="fs-5"><i class="fa fa-credit-card" aria-hidden="true"></i> Funds</div>
          <div className="m-3 mt-2 mb-0">
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Fund withdrawal</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Adding funds</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Adding bank accounts</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">eMandates</a>
            <br />
          </div>
        </div>
        <div className="col-4">
          <div className="fs-5"><i class="fa fa-laptop" aria-hidden="true"></i> Console</div>
          <div className="m-3 mt-2 mb-0">
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">IPO</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Portfolio</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Funds statement</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Profile</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Reports</a>
            <br />
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Referral program</a>
            <br />
          </div>
        </div>
        <div className="col-4">
          <div className="fs-5"><i class="fa fa-circle-o" aria-hidden="true"></i> Coin</div>
          <div className="m-3 mt-2 mb-0">
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Understanding mutual funds and Coin</a><br/>
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Coin app</a><br/>
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Coin web</a><br/>
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">Transactions and reports</a><br/>
            <a style={{textDecoration:'none',lineHeight:'2.5'}} href="">National Pension Scheme (NPS)</a><br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
