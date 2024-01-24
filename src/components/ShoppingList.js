import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All"); //what category is currently selected
  const [filterInput, setFilterInput] = useState("") //what's currently typed in blue search bar
  const [formNameInput, setFormNameInput] = useState("") //for name of new item
  const [formDropdown, setFormDropdown] = useState("Produce") //for category of NI
  const [newItems, setNewItems] = useState([...items]); //for array of new items

  function handleCategoryChange(event) { //called when filter category dropdown changes
    const userInput = event.target.value //userInput holds the category they selected
    setSelectedCategory(userInput); //updates state variable for selected category
  }
  
  function onItemFormSubmit(newItem) { //takes shopping list object from form submit
    console.log(newItem)
    setNewItems([...newItems, newItem]) //spreads old items array and adds new item objec to the end
  }

  function onSearchChange(search) { //receives text from search field
    console.log(search)
    setFilterInput(search); //sets filterInput with search term
  }
  
  const itemsToDisplay = newItems.filter((item) => {
    if (selectedCategory === "All" && filterInput === "") return true;
    else if (filterInput === "") {
      return item.category === selectedCategory
    }
    else if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(filterInput.toLowerCase());
    }
    return item.category === selectedCategory && item.name.toLowerCase() === filterInput.toLowerCase();
  });

  return (
    <div className="ShoppingList">
      <ItemForm setFormNameInput = {setFormNameInput} formNameInput = {formNameInput} setFormDropdown = {setFormDropdown} formDropdown={formDropdown} onItemFormSubmit={onItemFormSubmit} newItems={newItems}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={filterInput}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
