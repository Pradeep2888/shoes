import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getShoes } from "../Redux/AppReducer/action";

const SingleShoe = () => {
  const {id}=useParams()
  const dispatch=useDispatch()
  const state=useSelector((state)=>{
    return state.AppReducer.shoes[id-1]
  })
  const {name,image,category}=state
console.log(name,id)
  useEffect(()=>{
    dispatch(getShoes)
  })

  return (
    <div>
      <h2>Shoe name</h2>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <div>{category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
