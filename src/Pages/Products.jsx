import React, { useEffect, useState } from "react";

import Categorylist from '../components/Categorylist';
import Card4 from "../components/Card4";
import { useParams } from "react-router-dom";
import CateStore from "../components/CateStore";



function Products() {
  const { slugs } = useParams();
  
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const findDetail = CateStore.filter(
      (CateStore) => CateStore.slugs === slugs
    );
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } 
  }, [slugs]);


 
  return (
    <>
    
 
  
 
    </>
  )
}

export default Products
