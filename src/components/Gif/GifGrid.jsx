import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';

const API_KEY = "t8efOi4sM27mFICI9gxlJQHSrdnBulnH";



const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${API_KEY}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    setImages(gifs);
  }

  useEffect(() => {
    getGifs();
  }, [category]);





  return (
    <div>
      <h3>{category}</h3>
      {
        images?.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))
      }
    </div>
  );
};


GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};


export default GifGrid;
