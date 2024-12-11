import React from 'react'
import { Link} from "react-router-dom";

function CategoriesStyles(props) {
  return (
    <>
      <Link to={props.card.linkname} className={`col-lg-2 col-sm-4 col-md-4 col-4   shadow  r m-3 p-2 ho '}`}>
      {props.card.categoriesname}
            </Link>
    </>
  )
}

export default CategoriesStyles
