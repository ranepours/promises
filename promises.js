let baseURL = "https://deckofcardsapi.com/api/deck";
// //get A card and log its value
let getCard = axios.get(`${baseURL}/new/draw/`).then(res => {
    let value = res.data.cards[0].value;
    let suit = res.data.cards[0].suit;
    //console.log(res.data.cards[0]);
    console.log(`${value} of ${suit}`);
})

// //make two requests FROM THE SAME DECK so we get two separate cards and log their values
let cardOne;
let getCards = axios.get(`${baseURL}/new/draw/`).then(res => {
    cardOne = res.data.cards[0];
    let deckID = res.data.deck_id;
    return axios.get(`${baseURL}/${deckID}/draw/`)
}).then(res => {
    let cardTwo = res.data.cards[0];
    [cardOne, cardTwo].forEach((card) => {
        console.log(`${card.value} of ${card.suit}`)
    })
})

//build html page which lets u draw from deck and render card to page each time u click "get card" button until all 52 cards have loaded onto page
let deckID;
let button = document.querySelector("button");
let cardSpace = document.getElementById("#card-space");

let deck = axios.get(`${baseURL}/new/shuffle`).then(res => {
    deckID = res.data.deck_id;
})
button.addEventListener("click", () => {
    render = axios.get(`${baseURL}/${deckID}/draw/`).then(res => {
        let imgSrc = res.data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let xAxis = Math.random() * 40 - 20;
        let yAxis = Math.random() * 40 - 20;

        let card = document.createElement("img");
        card.src = imgSrc;
        console.log(card.src);
        if (res.data.remaining === 0) button.remove()
    })
})