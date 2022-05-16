import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({ onSetCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      onSetCategories(cats => [inputValue, ...cats]);
      // onSetCategories(871263);
      setInputValue("");
    }
  }
  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Ingrese búsqueda...'
        value={inputValue}
        onChange={handleInputChange} />
    </form>
  );
}

AddCategory.propTypes = {
  onSetCategories: PropTypes.func.isRequired,
}

export default AddCategory;
