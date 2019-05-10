import React from 'react';

const Select = ({ handleChange, value, handleClick }) => (
  <div className="input-group mb10">
    <select className="custom-select"  value={value} onChange={(event) => handleChange(event)}>
      <option selected value="none">Sort by...</option>
      <option value="price">Price</option>
      <option value="size">Size</option>
      <option value="id">ID</option>
    </select>
    <div className="input-group-append">
      <button className="btn btn-success" type="button" onClick={() => handleClick()} >Sort</button>
    </div>
  </div>
);

export default Select;
