//http://localhost:3000/api/film?API_KEY=123abc

const checkApiKey = function (req, res, next) {

  if (req.query.API_KEY === process.env.API_KEY_TO_USE) {
      next(); 
  } 
  else {
      res.status(401).send("Error. API KEY no proveída");
  }
}

module.exports = checkApiKey;