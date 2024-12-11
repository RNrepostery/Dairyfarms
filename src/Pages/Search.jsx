import React, { useState } from "react";
import { AllproductStore } from "../components/AllproductStore";
import Card4 from "../components/Card4";
import searchimg from '../Assets/static/searchimg.png'

function Search() {

    const [text,setText] = useState("")
    const onChangeHandler= (e) => {
        setText(e.target.value)


    }
  return (
    <>
      <div className="container pt-5 mt-5">
        <div className="row py-5 my-5">
          <div className="text-center my-5 py-3">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={onChangeHandler} className="searchbar" />
            <div><img src={searchimg} alt="" className="searchimgheight mt-4" /></div>
            <div className="container p-4">
              <div className="row">
                {AllproductStore.filter((value) => {
                    if (text === ""){
                        return NaN 
                    }
                    else if (value.categories.toLowerCase().includes(text.toLowerCase())){
                        return value
                    }
                }).map((data) => (
                  <Card4 card={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
