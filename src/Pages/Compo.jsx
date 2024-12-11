import React from 'react'
import Card4 from "../components/Card4";
import Categorylist from "../components/Categorylist";
import { AllproductStore } from '../components/AllproductStore';

function Compo() {
  const findDetail = AllproductStore.filter(items => items.categories === 'combo'); 
  
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

export default Compo
