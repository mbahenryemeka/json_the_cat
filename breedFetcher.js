const needle = require('needle');
const fetchBreedDescription = function(breedName, callback) {
  const searchUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  needle.get(searchUrl,(err,res) =>{
    if (err) {
      return callback(err, null);
    }
    if (res.body.length > 0) {
      callback(null, res.body[0].description);
    } else {
      callback('breed not found', null);
    }

  });
};

module.exports = {fetchBreedDescription};