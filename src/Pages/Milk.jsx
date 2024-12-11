import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Categorylist from "../components/Categorylist";
import Card4 from "../components/Card4";
import { AllproductStore } from '../components/AllproductStore';

function Milk() {
  const findDetail = AllproductStore.filter(items => items.categories === 'milk'); 
  
  return (
    <>
     <Categorylist/>
      <div className="container p-4">
          <div className="row">
            {findDetail.map((data) => (
              <Card4 card={data} />
            ))}
          </div>
        </div>
      
    </>
  );
}

export default Milk;
