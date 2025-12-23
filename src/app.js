// VULNERABLE CODE — FOR SECURITY TESTING ONLY

function showSearch() {
  var search = document.getElementById("search").value;
  var results = document.getElementById("results");

  // ✅ Safe: render user input as plain text instead of HTML
  results.textContent = "You searched for: " + search;
}

document.getElementById("btn").addEventListener("click", showSearch);
