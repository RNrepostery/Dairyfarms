import React from 'react'


import { useState } from "react";
import CategoriesStyles from './CategoriesStyles';
import CateStore from './CateStore';

function Categorylist() {
  const [current, setCurrent] = useState();

  const changeColor = (name) => {
    setCurrent(name);
    
  };

  const categories=[
    { 
      slugs:"product-all",
      categoriesname:"All",
      
      linkname:'/all'
    },
    { 
      slugs:"product-milk",
      categoriesname:"Milk",
     
      linkname:'/milk'
    },
    { 
      slugs:"product-ghee",
      categoriesname:"Ghee",
      linkname:'/ghee'
     
    },
    { 
      slugs:"product-paneer",
      categoriesname:"Paneer",
      
      linkname:'/paneer'
    },
    { 
      slugs:"product-curd",
      categoriesname:"Curd",
   
      linkname:'/curd'
    },
    { 
      slugs:"product-butter",
      categoriesname:"Buttermilk",
   
      linkname:'/buttermilk'
    },
    { 
      slugs:"product-combo",
      categoriesname:"Combo Product",
      
      linkname:'/combo'
    },
  ]

 


  return (
    <div>
    
      <div className=' pt-5'>
        
       <div className="mt-5 pt-5 ">
      
      <div className=" container product-list-container   text-center">
        <div className="row ms-1 py-4">
       
        {CateStore.map((data) => (
            <CategoriesStyles card={data} />
          ))}
        </div>
      </div>
    </div>
      </div>
      
    </div>
  )
}

export default Categorylist

