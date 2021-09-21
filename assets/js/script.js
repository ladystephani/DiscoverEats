

var getRestaurantInfo = function(zipcode) {
    // format the restaurant API url
    const apiUrl = 'https://api.documenu.com/v2/restaurants/zip_code/' + zipcode + '?key=57aa84dc45dd3fe2fce56f8a1fe01f43'
    
    // make a request to the url
    fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    })
    
})
    
}
getRestaurantInfo(10016);

