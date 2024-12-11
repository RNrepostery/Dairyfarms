import React from "react";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';

function Advertisemnet(props) {
  return (
    <>
     <div class={props.im.divclassName}>
      <Link to={props.im.linkto}>
        {/* { picture.map((da)=> <Advertisemnet im={da}/>)} */}
        <img
          className={props.im.imgclassName}
          alt="avatar1"
          src={props.im.imgsrc}
        />
      </Link>
      <h4 className={props.im.h4className}>{props.im.h4name}</h4>

      {/* <Image src={props.im.src} className={props.im.className} ></Image> */}
    </div>
    </>
  );
}

export default Advertisemnet;
