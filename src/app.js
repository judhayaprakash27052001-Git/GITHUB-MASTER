// VULNERABLE CODE — FOR SECURITY TESTING ONLY

function showSearch() {
  var search = document.getElementById("search").value;
  var results = document.getElementById("results");

  // ✅ Safe: user input written as text, not HTML
  results.textContent = "You searched for: " + search;
}

document.getElementById("btn").addEventListener("click", showSearch);

alert("Hello, World!");
alert("Hello, World!");

