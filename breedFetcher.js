const needle = require('needle');
const breed = process.argv[2];
const searchUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
needle.get(searchUrl,(err,res) =>{
  if (err) {
    console.log(`Failed to fetch breed: ${err}`);
    return;
  } else {
    if (res.body.length > 0) {
      console.log(res.body[0].description);
    } else {
      console.log(`breed not found`);
    }
  }
});

