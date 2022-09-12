import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {

  const [searchParams,setsearchParams]=useSearchParams()
  const initialCategoryFilter=searchParams.getAll("category")

  
  const [category,setCategory]=useState(initialCategoryFilter || [])


  const handleFilterCheckBox=(e)=>{
  
  const newCategoryies=[...category]
  if(newCategoryies.includes(e.target.value)){
   
      newCategoryies.splice(newCategoryies.indexOf(e.target.value),1)
  }
  else {
      newCategoryies.push(e.target.value)
  }
  
  setCategory(newCategoryies)
 
  }
  


  useEffect(()=>{
      if(category ){
          let params={}
          category && (params.category=category)
          setsearchParams(params)
      }
  },[category,setsearchParams])





  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" checked={category.includes("Sneakers")} onChange={handleFilterCheckBox} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" checked={category.includes("Loafers")} onChange={handleFilterCheckBox} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" checked={category.includes("Canvas")} onChange={handleFilterCheckBox} />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" checked={category.includes("Boots")} onChange={handleFilterCheckBox} />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
