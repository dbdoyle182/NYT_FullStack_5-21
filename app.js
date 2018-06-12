// Var query
var apiKey = "api-key=8de9135e72bd4a4ca79255deee6b17bf"
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + apiKey + "&q=";

var searchTerm;

$("#submitBtn").click(function(event) {
    console.log(queryUrl)
    event.preventDefault();

    searchTerm = $("#searchTerm").val().trim();

    console.log(searchTerm);

    queryUrl += searchTerm;

    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
        console.log(response.response);
      })

     
})
