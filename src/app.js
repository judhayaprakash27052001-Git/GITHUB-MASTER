// VULNERABLE CODE — FOR SECURITY TESTING ONLY

function showSearch() {
  var search = document.getElementById("search").value;
  var results = document.getElementById("results");

  // ❌ XSS vulnerability: user input directly written to DOM
  results.innerHTML = "You searched for: " + search;
}

document.getElementById("btn").addEventListener("click", showSearch);
