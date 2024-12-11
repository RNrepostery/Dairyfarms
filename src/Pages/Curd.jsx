import React from "react";
import Categorylist from "../components/Categorylist";
import Card4 from "../components/Card4";
import { AllproductStore } from '../components/AllproductStore';

function Curd() {
  const findDetail = AllproductStore.filter(items => items.categories === 'curd');
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

export default Curd;
