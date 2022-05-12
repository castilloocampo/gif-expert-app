import React, { useState } from 'react';
import AddCategory from './components/Category/AddCategory';
import GifGrid from './components/Gif/GifGrid';

const GifExpertApp = () => {

  // const categories = ["One Punch", "One Piece", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Piece"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory onSetCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map( category => (
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
    </>
  );
}

export default GifExpertApp;
