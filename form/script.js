var formElement = $("#form");
var nameElement = $("#name");
var emailElement = $("#email");
var confirmEmailElement = $("#confirm-email");


var allUsers = [];

console.log(formElement, nameElement, emailElement, confirmEmailElement)

function onFormSubmit(event) {

    event.preventDefault();
    console.log(nameElement.val());

    if(emailElement.val().toLowerCase() !== confirmEmailElement.val().toLowerCase()){
        alert("your emails to not match!!");
        return;
    }

    // create a newUser object

    var newUser = {
        name: nameElement.val().toLowerCase(),
        email: emailElement.val().toLowerCase()
    }

    var users = JSON.parse(localStorage.getItem('users'));
    console.log(users)
    if (users === null) {
        // push new user into empty users array
        allUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(allUsers))
    } else if (users.length > 0) {
        // setting the empty users array to the users that exist in local storage
        allUsers = users;
        allUsers.push(newUser)
        localStorage.setItem('users', JSON.stringify(allUsers))
    }
}

formElement.on('submit', onFormSubmit);

function displayCatFactPlease() {

    fetch('https://catfact.ninja/fact')
        .then(res => res.json()) // 
        .then(data => {
            // Handle the retrieved data
            console.log(data);

            $("#display-cat-fact").text(data.fact);

        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.log('Error:', error);
        });

}


$("#cat-fact-button").on("click", displayCatFactPlease)


var requestUrl = "https://catfact.ninja/fact";

$.ajax({
    url: requestUrl,
    method: 'GET'
}).then(function (res) {
    console.log(res)
    $("#display-cat-fact").text(res.fact);

})



