console.log(fetch('https://api.giphy.com/v1/gifs/search?q=cheeseburgers&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'))
    .then(res => {
        if(res.ok) {
            console.log('SUCCESS')
        }   else {
            console.log("UNSUCCESSFUL")
        }
    })
    .then(_res => console.log(data))
    .catch(_error => console.log('No Cheeseburger For You'))
