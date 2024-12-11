
import { FaLocationDot } from "react-icons/fa6";
import {AiOutlineMail } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";

function Contact() { 
  return (
    <>
      <div className="mt-3 pt-3">
        <div className="container mt-5 pt-5">
          <img
            src="https://pravarshaindustries.com/img/contactus.webp"
            className="w-100 mt-5 shadow  "
            alt="banners"
          />
        </div>
      </div>
      <div className="container my-5  ">
        <div className="row mx-5">
          <div className=" col-lg-6 col-sm-12 col-md-12 d-block d-lg-none  "> 
            <>
              

              <>
               
                <div classname="card" >
                  <form classname="p-5 " >
                    <div classname="mb-3 mt-3">
                      <label htmlFor="name">car:</label>
     
                      <input
                        type="car"
                        classname="form-control"
                        id="car"
                        placeholder="Enter car"
                        name="car"
                       
                      />
                    </div>
                    <div classname="mb-3">
                      <label htmlFor="pwd">car:</label>
                      <input
                        type="car"
                        classname="form-control"
                        id="pwd"
                        placeholder="Enter car"
                        name="pswd"
                      />
                    </div>
                    <div className="mb-3 mt-3">
                      <label htmlFor="comment">Comments:</label>
                      <textarea
                        className="form-control"
                        rows={5}
                        id="comment"
                        name="comments"
                        defaultValue={""}
                      />
                    </div>
                    <div classname="form-check mb-3"></div>
                    <button type="submit" classname="btn btn-success">
                      Send Message
                    </button>
                  </form>
                </div>
              </>
            </>
          </div>

          <div className=" col-lg-6 col-sm-12  col-md-12 ">
            <div className="py-4">
              <span className="">
                {" "}
                <FaLocationDot />
              </span>
              <code class="  underline ">Corporate Office:</code>
              <p className="text-body-color mb-9 contact-paragraph ms-3 ">
                205 , Saptagiri Towers, Sardar Patel Rd, Mayur Marg, Begumpet,
                Hyderabad, Telangana 500016
              </p>
            </div>

            <div className="py-4">
              <code className="  underline ms-3">Our Farm:</code>
              <p className="text-body-color mb-9 contact-paragraph ms-3 ">
                Survey no's 181 &amp; 182, Thimmapur Village, Jagadevpur Mandal,
                Siddipet, Telangana 502313
              </p>
            </div>

            <div className="py-4">
              <code className="  underline ms-3">Registered Address:</code>
              <p className="text-body-color mb-9 contact-paragraph ms-3 ">
                H.no 8-2-293/A, Plot no.459/3, Road No.19, Jubilee Hills,
                Hyderabad, Telangana 500033.
              </p>
              <div className="t-size py-4">
                <i className="fas fa-envelope me-3 " />
                <span className="me-2">
                <AiOutlineMail/>
                </span>
                info@example.com
              </div>
              <div className="t-size py-3">
                <i className="fas fa-phone me-3 " />{" "}
                <span className="me-1">
                  <IoCallSharp />
                </span>
                + 9123456788s
              </div>
            </div>
          </div>

          <div className=" col-lg-6 col-sm-12 col-md-12 d-none d-lg-block">
            <>
              {/* Hello world */}

              <div className="card">
                <form className="p-5">
                  <div className="mb-3 mt-3">
                    <label For="car">Email:</label>
                    <input
                      type="Email"
                      className="form-control"
                      id="car"
                      
                      name="car"
                    />
                  </div>
                  <div className="mb-3">
                    <label For="pwd">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      
                      name="pswd"
                    />
                  </div>

                  <div class="mb-3 mt-3">
                    <label for="comment">Comments:</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      name="text"
                    ></textarea>
                  </div>
                  <div className="form-check mb-3"></div>
                  <div className="text-center">
                  <button type="submit" className="btn btn-success">
                    Send Message
                  </button>
                  </div>
                 
                </form>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
