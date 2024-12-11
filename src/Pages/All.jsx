import React from "react";
import Categorylist from "../components/Categorylist";
import Card4 from "../components/Card4";
import { AllproductStore } from '../components/AllproductStore';
function All(props) {
  const findDetail = AllproductStore.filter(items => items.quantity === 1); 
  return (
    <>
      <Categorylist />
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

export default All;
