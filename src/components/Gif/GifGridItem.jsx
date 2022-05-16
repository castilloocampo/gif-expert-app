import React from 'react';
import { PropTypes } from 'prop-types';

const GifGridItem = ({title, url}) => {
  return (
    <div data-testid="gif-grid-item"
      className='card animate__animated animate__fadeIn' >
      <img src={url} alt={title+""} />
      <p data-testid="title" >{title}</p>
    </div>
  );
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifGridItem;
