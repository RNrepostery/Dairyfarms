import React from "react";
import Categorylist from "../components/Categorylist";
import Card4 from "../components/Card4";
import { AllproductStore } from '../components/AllproductStore';
import card6 from "../Assets/static/card6.png";
import card7 from "../Assets/static/card7.png";
import card1 from "../Assets/static/card1.webp";
import cardi1 from "../Assets/static/card1.1.webp";
import cardi2 from "../Assets/static/card1.2.webp";
import cardi3 from "../Assets/static/card1.3.png";


function Ghee() {
  
  const findDetail = AllproductStore.filter(items => items.categories === 'ghee'); 
  
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

export default Ghee;
