const API_KEY = "t8efOi4sM27mFICI9gxlJQHSrdnBulnH";

export const getGifs = async (category = "") => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${API_KEY}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = (data !== [] ) ? data.map(img => {
    return {
      id: img.id,
      title: (img.title.trim() !== "") ? img.title.trim(): "Default Title" ,
      url: img.images?.downsized_medium.url
    }
  }) : [];
  return gifs;
}