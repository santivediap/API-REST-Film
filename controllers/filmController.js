const filmsAPI = require("../utils/filmsApiRequest");

const getFilm = async (req, res) => {

    try {
        const film = await filmsAPI.fetchFilm(req.params.title)

        const movie =  {
            título: film.Title,
            Autor: film.Writer,
            Descripcion: film.Plot,
            src: film.Poster,
        };
        res.status(200).json(movie);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    };
};

const getFilms = async (req, res) => {
    try {
        const films = await filmsAPI.fetchFilms(req.params.title)
        const movies = films.Search.map(movie => ({
            título: movie.Title,
            Year: movie.Year,
            src: movie.Poster,
        }))
        res.status(200).json(movies);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    };
};

const createFilm = async (req, res) => {
  const {Title, Writer, Plot, Poster} = req.body;

  const newFilm = {
      "titulo": Title,
      Autor: Writer,
      Descripcion: Plot,
      src: Poster,
  };

  const postFilm = await filmsAPI.fetchPostFilm(newFilm) //fetchPostFilm --> llamada a la api
  res.status(200).json({message: `Se ha guardado: ${postFilm.titulo}` });
}

const editFilm = async (req, res) => {
  const {Title, Writer, Plot, Poster} = req.body;

  const editedFilm = {
      titulo: Title,
      Autor: Writer,
      Descripcion: Plot,
      src: Poster,
  }

  const putFilm = await filmsAPI.fetchPutFilm(editedFilm)
  let id = Math.floor(Math.random() * (10000 - 1) + 1);
  res.status(200).json({id, message: `Se ha actualizado: ${putFilm.titulo}` });
}

const deleteFilm = async (req, res) => {
  const film = await filmsAPI.fetchFilm(req.params.title)
    console.log('deleteFilm->film', film);
      let titulo = film.Title;
      let id = Math.floor(Math.random() * (10000 - 1) + 1);
      res.status(200).json({id, "message": `Se ha borrado ${titulo}`});
} 

module.exports = {
  getFilm,
  getFilms,
  createFilm,
  editFilm,
  deleteFilm
};