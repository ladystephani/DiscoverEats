const userFormEl = document.querySelector("#user-form");
const restaurantEl = document.querySelector("#zipcode-entry");
const restaurantContainerEl = document.querySelector("#restaurant-container");
const restaurantSearchTerm = document.querySelector("#restaurant-search-term");
let  subtitle = document.querySelector(".subtitle");
let  message = document.querySelector("#message");


const displayRestaurants = function(restaurants, zipcode) {
    // console.log(restaurants);
    // console.log(zipcode);

   

    // error handler: check if API returned any restaurant data
    if (restaurants.data.length === 0) {
        restaurantContainerEl.textContent = "No restaurants found."
        return;
    }

    //clear old content every time search is performed
    restaurantContainerEl.textContent = "";
    restaurantSearchTerm.textContent = zipcode;


    // loop over restaurants
    for (let i = 0; i < 6; i++) {
        var random = Math.floor(Math.random() * 12)
        //create a constainer for each restaurant
        const resEl = document.createElement("div");
        resEl.classList = "list-item"


        //format the name line
        const restaurantName =  restaurants.data[random].restaurant_name;

        //create span to hold the name line
        const nameEl = document.createElement("span");
        nameEl.textContent = restaurantName;

        // append span
        resEl.appendChild(nameEl);

        //format address
        const address = restaurants.data[random].address.formatted;

        // add class to js 
        // have to declare the class in css

        //create p to hold address
        const addressEl = document.createElement("p");
        addressEl.textContent = address;

        //appendd p
        resEl.appendChild(addressEl);

        //format phone
        const phone = restaurants.data[random].restaurant_phone;

        //create p to hold phone
        const phoneEl = document.createElement("p");
        phoneEl.textContent = "Phone:"+  phone;

        //append
        resEl.appendChild(phoneEl);

        //format hours
        const hours = restaurants.data[random].hours;

        //create p to hold phone
        const hoursEl = document.createElement("p");
        if (hours) {
            hoursEl.textContent = "Hours: " + hours;
        } else {
            hoursEl.textContent = "Hours: Info not available."
        }
        
        //append
        resEl.appendChild(hoursEl);

        // append container
        restaurantContainerEl.appendChild(resEl);
    }
}

const getRestaurantInfo = function(zipcode) {
    // format the restaurant API url
    const apiUrl = 'https://api.documenu.com/v2/restaurants/zip_code/' + zipcode + '?key=85f1b21e63c4501457407bbbd51c2bc9'
    
    // make a request to the url
    fetch(apiUrl).then(function(response) {
        //add zipcode not found error
        if (response.ok) {
            response.json().then(function(data) {
                displayRestaurants(data, zipcode);
            })
        } else {
            alert("Error: zipcode info not found");
        }  
    })
    .catch(function(error) {
        alert("Unable to connect to network");
    })
}

const formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from the input element
    const zipcode = restaurantEl.value.trim();

    if (zipcode) {
        getRestaurantInfo(zipcode);
        restaurantEl.value = "";
        // stops hiding subtitle and message from html 
        message.classList.remove('hide');
        subtitle.classList.remove('hide');
    } else {
        alert("Please enter a zipcode")
    }

    //local storage 
localStorage.setItem("zipcode", JSON.stringify(zipcode));
console.log(localStorage);
}



userFormEl.addEventListener("submit", formSubmitHandler);