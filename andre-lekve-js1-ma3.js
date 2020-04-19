// question 1
const = (a, b) => a - b;
// your answer for question 1 goes here

// question 2
const baseUrl = "https://api.rawg.io/api/games?genres=sports";
const gamesUrl = `${baseUrl}games`;
fetch(gamesUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        loadGames(json);
    })
    .catch(function (error) {
        const queryString = document.location.search;
        const params = new URLSearchParams(queryString);

        let id;

        if (params.has("id")) {
            id = params.get("id");
        } else {
            document.location.href = "error.html";
        }
    });
// your answer for question 2 goes here

// question 3
<p id="word">These cats are outrageous.</p>
    const changeName = document.getElementById('word').innerHTML;
    const animalName = changeName.replace('cats', 'giraffes');
    document.getElementById('word').innerHTML = animalName;

// your answer for question 3 goes here

// question 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let persInfo = "userID";

if (params.has("persInfo")) {
    persInfo = params.get("persInfo");
} else if (persInfo < 10 ){
    document.location.href = "first.html";
} else if (persInfo > 10){
    document.location.href = "second.html";
} else {
    document.location.href = "third.html";
}
// your answer for question 4 goes here

// question 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
container.removeChild(button);
// your answer for question 5 goes here

// question 6
const animals = document.querySelector(".animals");
const list = document.createElement("li");
list.className = "parrots";
const listContent = document.createTextNode("Parrots");
list.appendChild(listContent);
animals.appendChild(list);
// your answer for question 6 goes here

// question 7
const baseUrl = 'https://api.rawg.io/api/games/3801';
const detailsUrl = `${baseUrl}games`;
fetch(detailsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        createDetails(json);
    })
    .catch(function (error) {
        console.dir(error);
    });
// your answer for question 7 goes here

