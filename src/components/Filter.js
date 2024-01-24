import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  
  function handleFilterInput(event) { //takes text from search field
    onSearchChange(event.target.value) //
  }
  
  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      placeholder="Search..."
      value={search}
      onChange={handleFilterInput} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
