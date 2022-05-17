import { useState } from 'react';
import { PropTypes } from 'prop-types';
import AddCategory from './components/Category/AddCategory';
import GifGrid from './components/Gif/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

  // const categories = ["One Punch", "One Piece", "Dragon Ball"];
  const [categories, setCategories] = useState(defaultCategories);

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

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.array,
}

export default GifExpertApp;
