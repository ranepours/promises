const axios = require('axios');
//DECK OF CARDS
let baseURL = "https://deckofcardsapi.com/api/deck";
//make request to api from newly shuffled deck and log result to console
const getCard = () => {
    return Promise = axios.get(`${baseURL}/new/draw/`)
        .then(res => {
            let { suit, value } = res.cards[0];
            console.log(`${value} of ${suit}`);
        }).catch(err => {
            console.log("rejected", err)
        })
}
getCard();

//make request to get a card and another card after; log results from both to console
let first = null;
const getCards = () => {
    let Promise = axios.get(`${baseURL}/new/draw/`).then(res => {
        first = data.cards[0];
        let deckId = data.deck_id;
        return axios.get(`${baseURL}/${deckId}/draw`);
    }).then(res => {
        let second = data.cards[0];
        [first, second].forEach(function(card){
            console.log(`${card.value} of ${card.suit}`)
        })
    }).catch(err => {
        console.log("rejected", err);
    })
}
getCards();

//build html page which lets u draw from deck and render card to page each time u click "get card" button until all 52 cards have loaded onto page
