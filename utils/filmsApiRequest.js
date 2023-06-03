const fetch = require('node-fetch');


const fetchFilm = async (title) => {
    let film = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.SAVE_API_KEY}`);
    const filmData = film.json();
    return filmData;
}

const fetchFilms = async (word) => {
  let films = await fetch(`https://www.omdbapi.com/?s=${word}&apikey=${process.env.SAVE_API_KEY}`);
  const filmData = films.json();
  return filmData;
}


const fetchPostFilm = async (newProduct) => {

  let postFilm = await fetch(`https://www.omdbapi.com/?&apikey=${process.env.SAVE_API_KEY}`,  {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
  });
  const filmData = postFilm.json();
  return newProduct;
};

const fetchPutFilm = async (newProduct) => {

  let postFilm = await fetch(`https://www.omdbapi.com/?&apikey=${process.env.SAVE_API_KEY}`,  {
      method: "PUT",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
  });
  const filmData = postFilm.json();
  return newProduct;
}

module.exports = {
  fetchFilm,
  fetchFilms,
  fetchPostFilm,
  fetchPutFilm
}