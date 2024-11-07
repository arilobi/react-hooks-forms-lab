import React, { useState } from 'react';

function Filter({ onCategoryChange, onSearchchange}) {
  const [category, setCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    const newSearchText = e.target.value
    setSearchText(newSearchText);
    onSearchchange(newSearchText);
  }

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value
    setCategory(newCategory);
    onCategoryChange(newCategory);
  };

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={searchText} onChange={handleSearchChange} />
      <select name="filter" value={category} onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
