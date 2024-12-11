import React from "react";

function Address() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row pt-5 ">
        <div className="col-md-12 mb-4  ">
          <div className=" mb-4  ">
            <div className=" py-5">
              <h5 className="mb-0">Add Address</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <label className="form-label pb-2" htmlFor="form7Example1">
                        Latitude
                      </label>
                      <input
                        type="text"
                        id="form7Example1"
                        className="form-control"
                        placeholder="Latitude"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <label className="form-label pb-2" htmlFor="form7Example2">
                        Longitude
                      </label>
                      <input
                        type="text"
                        id="form7Example2"
                        className="form-control"
                        placeholder="Longitude"
                      />
                    </div>
                  </div>
                </div>
               <div className="pb-4 "> <span  className="bg-success rounded-pill px-4 py-2 text-white">Get Current Location</span></div>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <label className="form-label pb-2" htmlFor="form7Example1">
                        House/street/Flat No
                      </label>
                      <input
                        type="text"
                        id="form7Example1"
                        className="form-control"
                        placeholder="House/street/Flat No"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <label className="form-label pb-2" htmlFor="form7Example2">
                        Street
                      </label>
                      <input
                        type="text"
                        id="form7Example2"
                        className="form-control"
                        placeholder=" Street"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <label className="form-label pb-2" htmlFor="form7Example1">
                        LandMark
                      </label>
                      <input
                        type="text"
                        id="form7Example1"
                        className="form-control"
                        placeholder="LandMark"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <label className="form-label pb-2" htmlFor="form7Example2">
                        City
                      </label>
                      <input
                        type="text"
                        id="form7Example2"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <label className="form-label pb-2" htmlFor="form7Example1">
                        Pincode
                      </label>
                      <input
                        type="text"
                        id="form7Example1"
                        className="form-control"
                        placeholder=" Pincode"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <label className="form-label pb-2" htmlFor="form7Example2">
                        State
                      </label>
                      <input
                        type="text"
                        id="form7Example2"
                        className="form-control"
                        placeholder=" State"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <label className="form-label pb-2" htmlFor="form7Example1">
                        country
                      </label>
                      <input
                        type="text"
                        id="form7Example1"
                        className="form-control"
                        placeholder=" country"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <label
                        className="form-label"
                        htmlFor="form7Example1"
                      ></label>
                    </div>
                  </div>
                </div>
                <span  className="bg-success rounded-pill px-4 py-1 text-white">Submit</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;

