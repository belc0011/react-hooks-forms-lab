import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, newItems}) {

  const [formNameInput, setFormNameInput] = useState("") //for name of new item
  const [formDropdown, setFormDropdown] = useState("Produce") //for category of NI

  function handleOnChange(event) { //to capture dropdown selection for new item
    setFormDropdown(event.target.value) //updates state for form dropdown
  }

  function handleInputOnChange(event) { //to capture name of new item typed in
    //console.log("handleInputOnChange")
    const itemName = event.target.value 
    setFormNameInput(itemName); //updates state for name of new item
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: formNameInput,
      category: formDropdown
    }
    console.log(newItem)
    onItemFormSubmit(newItem);
    return ""
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInputOnChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleOnChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
