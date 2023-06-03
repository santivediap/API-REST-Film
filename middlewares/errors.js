const error404 = (req, res, next) => {
  return res.status(404).send({ message: `Route ${req.url} Not found.` });
}

const error500 = (err, req, res, next) => {
  return res.status(500).send({ error: err });
}

module.exports = {
  error404,
  error500,
};