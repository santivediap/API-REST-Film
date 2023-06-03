const fetch = require('node-fetch');


const fetchFilm = async (title) => {
    let film = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.SAVE_API_KEY}`);
    const filmData = film.json();
    return filmData;
}

module.exports = {
  fetchFilm
}