import React, { useState } from 'react';
import AddCategory from './Category/AddCategory';

const GifExpertApp = () => {

  // const categories = ["One Punch", "One Piece", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch", "One Piece", "Dragon Ball"]);
  const [newCategory, setNewCategory] = useState("");
  
  const handleAdd = () => {
    // setCategories([...categories, "Naruto"]);
    setCategories((cats => [ "Fairy Tail", ...cats]))
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory onSetCategories={setCategories}/>
      <hr />
      <ol>
        {
          categories.map((cat) => (<li key={cat}>{cat}</li>))
        }
      </ol>
    </>
  );
}

export default GifExpertApp;
