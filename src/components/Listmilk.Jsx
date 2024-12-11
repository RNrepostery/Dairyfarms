import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

function Listmilk() {
    const changeColor = (name) => {
        setCurrent(name);
      };
  return (
    <>
     <div className="mt-5 pt-5 ">
        <br />
        <br />
        <br />
        <div className=" container product-list-container   text-center">
          <div className="row ms-1 py-4">
         
             <Link to="/all" className={`col-lg-2 col-sm-4 col-md-4 col-4   shadow  r m-3 p-2 ho ${current === 'All' ? 'clr': ''}`} >
             <Link onClick={()=>changeColor('All')}>  All</Link>
              </Link>
            

             <Link to="/milk" className={`col-lg-2 col-sm-4 col-md-4 col-4   shadow  r m-3 p-2 ho ${current === 'Milk' ? 'clr': ''}`} onClick={()=>changeColor('Milk')}>
          <Link>  Milk</Link>
            </Link>

           <Link to="/ghee" className={`col-lg-2 col-sm-4 col-md-4 col-4   shadow  r m-3 p-2 ho ${current === 'Ghee' ? 'clr': ''}`} onClick={()=>changeColor('Ghee')}>
            Ghee
            </Link>

           <Link to="/paneer" className={`col-lg-2 col-sm-4 col-md-4 col-4   shadow  r m-3 p-2 ho ${current === 'Paneer' ? 'clr': ''}`} onClick={()=>changeColor('Paneer')}>
              Paneer
            </Link>

           <Link to="/curd" className={`col-lg-2 col-sm-4 col-md-4 col-4   shadow  r m-3 p-2 ho ${current === 'curd' ? 'clr': ''}`} onClick={()=>changeColor('Curd')}>
             Curd
            </Link>

           <Link to="/buttermilk" className={`col-lg-2 col-sm-4 col-md-4 col-4   shadow  r m-3 p-2 ho ${current === 'Buttermilk' ? 'clr': ''}`} onClick={()=>changeColor('Buttermilk')}>
              ButtermilK
            </Link>

           <Link to="/combo" className={`col-lg-2 col-sm-4 col-md-4 col-4   shadow  r m-3 p-2 ho ${current === 'Combo Product' ? 'clr': ''}`} onClick={()=>changeColor('Combo Product')}>
            Combo Product
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Listmilk
