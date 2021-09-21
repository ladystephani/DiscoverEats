var userFormEl = document.querySelector("#user-form");
var restaurantEl = document.querySelector("#zipcode-entry");

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

var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from the input element
    var zipcode = restaurantEl.value.trim();

    if (zipcode) {
        getRestaurantInfo(zipcode);
        restaurantEl.value = "";
    } else {
        alert("Please enter a zipcode")
    }
}
userFormEl.addEventListener("submit", formSubmitHandler);