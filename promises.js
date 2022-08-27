const axios = require('axios');
//NUMBER FACTS
//get fact about favorite number
const someFact = (num) => {
    return somePromise = axios.get(`http://numbersapi.com/${num}`)
        .then(res => console.log(res.data))
        .catch(err => console.log("rejected", err))
}
someFact(7);
//get data on multiple numbers in single request and put all of them on page
let fourNumPromises = [];
for(let i = 1; i < 5; i++){
    fourNumPromises.push(axios.get(`http://numbersapi.com/${i}`));
}
Promise.all(fourNumPromises)
    .then(numArr => {
        for(res of numArr){
            console.log(res.data);
        }
    })
    .catch(err => console.log(err));

//get 4 facts on favorite number and put them on page
let url = "http://numbersapi.com/3";
let Promise1 = axios.get(url)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => console.log("rejected", err));
let Promise2 = axios.get(url)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => console.log("rejected", err));
let Promise3 = axios.get(url)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => console.log("rejected", err));
let Promise4 = axios.get(url)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => console.log("rejected", err));


//DECK OF CARDS
 