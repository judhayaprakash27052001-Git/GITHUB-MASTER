var search = document.getElementById('search').value;
var results = document.getElementById('results');
// VULNERABLE: User input is directly inserted into the DOM via innerHTML
results.innerHTML = 'You searched for: ' + search;
