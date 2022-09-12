import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import ShoeCard from '../Components/ShoeCard'
import { getShoes } from '../Redux/AppReducer/action'

const Shoes = () => {


  const dispatch=useDispatch()
  const shoes=useSelector((state)=>{
      return state.AppReducer.shoes
  })
  // console.log(shoes)
  
  const location=useLocation()
  const [searchParams]=useSearchParams()
  // console.log(location)
  
  useEffect(()=>{
      if(location || shoes.length===0){
          const sortBy=searchParams.get("sortBy")
          let getShoesParams={
              params:{
                  category:searchParams.getAll("category"),
                  // _sort:sortBy&&"release_year",
                  _order:sortBy
              }
          }
          // console.log(getShoesParams)
          dispatch(getShoes(getShoesParams))
      }
  },[location.search])

  return (
    <div className="body" >
      <div className="col1">
      <Filter />
      </div>
      <div className="col2">
        {/* Map through the shoes list here using ShoeCard Component */}
        {
            shoes.length>0 && shoes.map(singleShoes=>{
                return (
                    <ShoeCard key={singleShoes.id} shoeData={singleShoes}/>
                )
            })
        }
      </div>
    </div>
  );
};

export default Shoes;
