// Var query

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + apiKey + "&q="
var apiKey = "api-key=8de9135e72bd4a4ca79255deee6b17bf&q"
var searchTerm;

$("#searchBtn").click(function(event) {
    
    event.preventDefault();

    searchTerm = $("#searchTerm").val().trim();

    console.log(searchTerm);

    queryUrl += searchTerm;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      })

     
})
