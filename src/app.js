function showSearch() {
  var search = document.getElementById("search").value;
  var results = document.getElementById("results");

  // ❌ Vulnerable: user input written directly to DOM as HTML
  results.innerHTML = "You searched for: " + search;
}

document.getElementById("btn").addEventListener("click", showSearch);
const express = require('express');
const router = express.Router()
const request = require('request');

router.post('/downlad-url', (req, res) => {
    downloadURL(req.body.url, () =>{
        res.send('Done')
    }) 
});

const downloadURL = (url, onend) => {
    const opts = {
      uri: url,
      method: 'GET',
      followAllRedirects: true
    }
  
    request(opts)
      .on('data', ()=>{})
      .on('end', () => onend())
      .on('error', (err) => console.log(err, 'controller.url.download.error'))
}

module.exports = router

