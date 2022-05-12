import { useState, useEffect } from 'react';
import { getGifs } from '../api/Gifs';

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGifs(category)
      .then(imgs => {
        setState({
          data: imgs,
          loading: false
        })
      })
  }, [category])

  return state;
}

export default useFetchGifs;