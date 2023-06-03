const filmsAPI = require("../utils/filmsAPI")

const getFilm = async (req, res) => {
    if (req.params.id) {
         try {
            const film = await filmsAPI.fetchFilm(req.params.title)

                film.then(response => {
                const movie =  {
                    título: response.Title,
                    Autor: response.Writer,
                    Descripcion: response.Plot,
                    src: response.Poster,
                };
                res.status(200).json(movie);
            });
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        };
    } else {
        try {
            const films = await filmsAPI.fetchFilms(req.params.title)
                .then(response => {
                console.log(response);
                
                const movie =  {
                    título: response.Title,
                    Autor: response.Writer,
                    Descripcion: response.Plot,
                    src: response.Poster,
                };
                res.status(200).json(movie);
            });
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        };
    };
};

module.exports = {
  getFilm
};