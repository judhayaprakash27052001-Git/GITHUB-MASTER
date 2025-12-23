function showSearch() {
  var search = document.getElementById("search").value;
  var results = document.getElementById("results");

  // ❌ Vulnerable: user input written directly to DOM as HTML
  results.innerHTML = "You searched for: " + search;
}
