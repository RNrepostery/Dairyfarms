import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaAmazon } from "react-icons/fa6";



function Footer() {
  return (
    <div>
       <>
        {/* Footer */}
        <footer className="text-center text-lg-start bg-body-tertiary text-muted pt-1">
         
          <section className="">
            <div className="container text-center text-md-start mt-5">
            
              <div className="row mt-3">
                
                <div className="col-md-2 col-lg-2 col-6 col-xl-2 mx-auto mb-4">
                
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className=" t-size text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className=" t-size text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className=" t-size text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className=" t-size text-reset">
                      Laravel
                    </a>
                  </p>
                </div>
                
                <div className="col-md-3 col-lg-2 col-6 col-xl-2 mx-auto mb-4">
                 
                  <h6 className="text-uppercase fw-bold mb-4">Policy</h6>
                  <p>
                    <a href="#!" className=" t-size text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className=" t-size text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className=" t-size text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className=" t-size text-reset">
                      Help
                    </a>
                  </p>
                </div>
              
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                 
                  <h6 className="text-uppercase fw-bold mb-4 ">Contact Us </h6>
                  <p className='t-size'>
                    <i className="fas fa-home me-3 " /><span><FaLocationDot /></span> New York, NY 10012, US
                  </p>
                  <p className='t-size'>
                    <i className="fas fa-envelope me-3 " />
                    <span><AiOutlineMail/></span>info@example.com
                  </p>
                  <p className='t-size'>
                    <i className="fas fa-phone me-3 " /> <span><IoCallSharp/></span>+9123456788/+9123456789
                  </p>
                  
                </div>

                <div className="col-md-3 col-lg-2 col-6 col-xl-2 mx-auto mb-4">
                 
                 <h6 className="text-uppercase fw-bold mb-2 ">Download App</h6>
                 <img alt="downloads" class="m-auto  mt-3" width="200" src="https://pravarshaindustries.com/img/store-icons.png"/>

                 <h6 className="text-uppercase fw-bold mt-5">Follow us on</h6>
                 <div className='d-flex justify-content-between'>
                  <span  className="sizes1"><FaFacebook/></span>
                  <span  className="sizes1"><FaInstagramSquare/></span>
                  <span  className="sizes1"><FaLinkedin/></span>
                  <span  className="sizes1"><FaAmazon/></span>
                  <span  className="sizes1"><GrYoutube/></span>
                  <span  className="sizes1"><AiFillTwitterCircle/></span>
                </div>
                </div>
                
              </div>
             
            </div>


          </section>
         
          <div
            className="text-center p-4 t-size"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © Copyright 2024. All Rights Reserved.
            
          </div>
         
        </footer>
       </>;
      
    </div>
  )
}

export default Footer
