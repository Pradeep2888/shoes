import React from "react";
import { Link } from "react-router-dom";

//Get the shoe card data from props.
const ShoeCard = (shoeData) => {
  const {id,name,image,category}=shoeData.shoeData
  return (

    <div className="card" data-cy={`shoe-card-wrapper-${id}`}>
       <Link to={`/shoes/${id}`}>
      <div>
       <img className="image" data-cy="shoe-card-image" src={image} alt={name} />
      </div>
      <div>
        <div data-cy="shoe-name">{name}</div>
        <div data-cy="shoe-category">{category}</div>
      </div>
      </Link>
    </div>
  );
};

export default ShoeCard;
