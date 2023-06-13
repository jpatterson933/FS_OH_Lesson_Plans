var dietDropdownItems = document.querySelectorAll(".dropdown-item")
var dropDownButton = document.getElementsByClassName("dropdown");



// dietDropdownItems.forEach(function (item) {
//     item.addEventListener("click", function (event) {
//         var element = event.target;
//         var selectedDiet = event.target.textContent;

//         dietDropdownItems.forEach(function (item) {
//             item.classList.remove("is-active");
//         })
//         element.classList.add("is-active");
//         console.log("Selected Diet:", selectedDiet);
//         // Use the selected diet value as needed
//     });
// });

const url = 'https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3ae9d6acaemshb175628a0959ccfp18deb7jsn8c86242e0312',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};




fetch(url, options)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })


// var animalAPI = "https://api.gbif.org/v1/species/"; //the end should add an integer for a random animal. it will output
// var keyAnimals = "epzENF8Vuzg2XiYxDER5/g==LHqnoNfdprsV6lsX";
// var plantsAPI = "https://perenual.com/api/species-list?page=1&key=";
// var keyPlants = "sk-kDQd647e4a0a7cc661162";
// var plantsPageRange = 377; //last page of the plants API that we are using
// var plantsEntryRange = 30;
// var animalsRange = 8000;

// var outputBox = document.getElementById('output-box');

// var myPlant = '';
// var myAnimal = 'pig';

// var randNum = function (num) {
//     let newNum = Math.floor(Math.random() * num);

//     return newNum;
// }


// function getAnimal(num) {

//     fetch(animalAPI + num)
//         .then(function (response) {
//             console.log("Testing...");
//             console.log(response);
//             // v check if page exists v
//             if (response.status == 404) {
//                 return undefined;
//             } else { return response.json(); }
//         })
//         .then(function (data) {

//             if (data === undefined) {
//                 getAnimal(randNum(animalsRange))
//             } else {

//                 console.log(data, "data")
//                 myAnimal = data.scientificName;
//                 console.log('Animal: ' + myAnimal);
//             }
//         });
// }

// getAnimal(11309)
