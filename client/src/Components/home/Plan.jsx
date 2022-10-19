import React from 'react';

import './style.css';


const Plan = () => {
   return (
      <>
         <div className="demo">
            <h1 className='pText'>PLAN</h1>
            <div className="container">
               <div className="row">
                  <div className="col-md-4 col-sm-6">
                     <div className="pricingTable">
                        <svg x="0" y="0" viewBox="0 0 360 220">
                           <g>
                              <path
                                 fill="#ae003d"
                                 d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061
                                             c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243
                                             s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48
                                             L0.732,193.75z"
                              ></path>
                           </g>
                           <text
                              transform="matrix(1 0 0 1 69.7256 116.2686)"
                              fill="#fff"
                              font-size="78.4489"
                           >
                              Rs 0
                           </text>
                           <text
                              transform="matrix(0.9566 0 0 1 197.3096 83.9121)"
                              fill="#fff"
                              font-size="29.0829"
                           ></text>
                           <text
                              transform="matrix(1 0 0 1 233.9629 115.5303)"
                              fill="#fff"
                              font-size="15.4128"
                           >
                              /Month
                           </text>
                        </svg>
                        <div className="pricing-content">
                           <h3 className="title">Free</h3>
                           <ul className="pricing-content">
                              <li><b>50GB</b> Disk Space</li>
                              <li><b>50</b> Email Accounts</li>
                              <li><b>50GB</b> Bandwidth</li>
                              <li><b>10</b> Subdomains</li>
                              <li><b>15</b> Domains</li>
                           </ul>
                           <a href="#" className="pricingTable-signup">Subscribe Now</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <div className="pricingTable blue">
                        <svg x="0" y="0" viewBox="0 0 360 220">
                           <g>
                              <path
                                 fill="#005c99"
                                 d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061
                                             c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243
                                             s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48
                                             L0.732,193.75z"
                              ></path>
                           </g>
                           <text
                              transform="matrix(1 0 0 1 69.7256 116.2686)"
                              fill="#fff"
                              font-size="78.4489"
                           >
                              $20
                           </text>
                           <text
                              transform="matrix(0.9566 0 0 1 197.3096 83.9121)"
                              fill="#fff"
                              font-size="29.0829"
                           >
                              .99
                           </text>
                           <text
                              transform="matrix(1 0 0 1 233.9629 115.5303)"
                              fill="#fff"
                              font-size="15.4128"
                           >
                              /Month
                           </text>
                        </svg>
                        <div className="pricing-content">
                           <h3 className="title">Business</h3>
                           <ul className="pricing-content">
                              <li><b>60GB</b> Disk Space</li>
                              <li><b>60</b> Email Accounts</li>
                              <li><b>60GB</b> Bandwidth</li>
                              <li><b>15</b> Subdomains</li>
                              <li><b>20</b> Domains</li>
                           </ul>
                           <a href="#" className="pricingTable-signup">Subscribe Now</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <div className="pricingTable red">
                        <svg x="0" y="0" viewBox="0 0 360 220">
                           <g>
                              <path
                                 fill="#db2c29"
                                 d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061
                                         c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243
                                         s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48
                                         L0.732,193.75z"
                              ></path>
                           </g>
                           <text
                              transform="matrix(1 0 0 1 69.7256 116.2686)"
                              fill="#fff"
                              font-size="78.4489"
                           >
                              $30
                           </text>
                           <text
                              transform="matrix(0.9566 0 0 1 197.3096 83.9121)"
                              fill="#fff"
                              font-size="29.0829"
                           >
                              .99
                           </text>
                           <text
                              transform="matrix(1 0 0 1 233.9629 115.5303)"
                              fill="#fff"
                              font-size="15.4128"
                           >
                              /Month
                           </text>
                        </svg>
                        <div className="pricing-content">
                           <h3 className="title">Premium</h3>
                           <ul className="pricing-content">
                              <li><b>70GB</b> Disk Space</li>
                              <li><b>70</b> Email Accounts</li>
                              <li><b>70GB</b> Bandwidth</li>
                              <li><b>20</b> Subdomains</li>
                              <li><b>25</b> Domains</li>
                           </ul>
                           <a href="#" className="pricingTable-signup">Subscribe Now</a>
                        </div>
                     </div>
                  </div>
               </div>
               <br />
               <div className="row secondRow">
                  <div className="col-md-5 col-sm-6">
                     <div className="pricingTable ">
                        <svg x="0" y="0" viewBox="0 0 360 220">
                           <g>
                              <path
                                 fill="#ae003d"
                                 d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061
                                             c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243
                                             s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48
                                             L0.732,193.75z"
                              ></path>
                           </g>
                           <text
                              transform="matrix(1 0 0 1 69.7256 116.2686)"
                              fill="#fff"
                              font-size="78.4489"
                           >
                              Rs 0
                           </text>
                           <text
                              transform="matrix(0.9566 0 0 1 197.3096 83.9121)"
                              fill="#fff"
                              font-size="29.0829"
                           ></text>
                           <text
                              transform="matrix(1 0 0 1 233.9629 115.5303)"
                              fill="#fff"
                              font-size="15.4128"
                           >
                              /Month
                           </text>
                        </svg>
                        <div className="pricing-content">
                           <h3 className="title">Free</h3>
                           <ul className="pricing-content">
                              <li><b>50GB</b> Disk Space</li>
                              <li><b>50</b> Email Accounts</li>
                              <li><b>50GB</b> Bandwidth</li>
                              <li><b>10</b> Subdomains</li>
                              <li><b>15</b> Domains</li>
                           </ul>
                           <a href="#" className="pricingTable-signup">Subscribe Now</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-5 col-sm-6">
                     <div className="pricingTable blue ">
                        <svg x="0" y="0" viewBox="0 0 360 220">
                           <g>
                              <path
                                 fill="#005c99"
                                 d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061
                                             c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243
                                             s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48
                                             L0.732,193.75z"
                              ></path>
                           </g>
                           <text
                              transform="matrix(1 0 0 1 69.7256 116.2686)"
                              fill="#fff"
                              font-size="78.4489"
                           >
                              $20
                           </text>
                           <text
                              transform="matrix(0.9566 0 0 1 197.3096 83.9121)"
                              fill="#fff"
                              font-size="29.0829"
                           >
                              .99
                           </text>
                           <text
                              transform="matrix(1 0 0 1 233.9629 115.5303)"
                              fill="#fff"
                              font-size="15.4128"
                           >
                              /Month
                           </text>
                        </svg>
                        <div className="pricing-content">
                           <h3 className="title">Business</h3>
                           <ul className="pricing-content">
                              <li><b>60GB</b> Disk Space</li>
                              <li><b>60</b> Email Accounts</li>
                              <li><b>60GB</b> Bandwidth</li>
                              <li><b>15</b> Subdomains</li>
                              <li><b>20</b> Domains</li>
                           </ul>
                           <a href="#" className="pricingTable-signup">Subscribe Now</a>
                        </div>
                     </div>
                  </div>
               
               </div>
            </div>
         </div>
      </>
   )
}


export default Plan;
