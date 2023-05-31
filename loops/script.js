
/* 






~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
BASIC FOR LOOP
    ~~ some syntax found here -> https://www.w3schools.com/js/js_loop_for.asp ~~

    for (expression_1; expression_2; espression_3){
            // code_to_be_executed
    }
    ~~ some syntax breakdown ~~
        expression_1; This expression is executed a single time
            var i = 0;
                we have created a new variable called i and set it to equal the value of 0
        expression_2; This expression defines the condition for executing the code block
            i < 3
                if i is less than 3, then the code inside of the { } will be executed
        expression_3; This expression is executed every time AFTER the code in the { } is executed
            i++
                we want to increase i by 1 after the code executes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


*/
// random fish array
var fishArray = ["Salmon", "Tuna", "Trout", "Mackerel", "Swordfish", "Barracuda", "Marlin", "Cod", "Haddock", "Halibut", "Flounder", "Grouper", "Carp", "Catfish", "Pike", "Bass", "Sardine", "Anchovy", "Eel", "Shark", "Sturgeon", "Herring", "Tilapia", "Perch"];
// alphabet array 26 Letters!
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// an array of the index positions in the array
var alphabetIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

var buttonWeWantToClick = $("#wednesday");

console.log(buttonWeWantToClick)


console.log(alphabet.length)
var increaseMe = -1;

function seeFish() {

    increaseMe++;

    if (increaseMe > alphabet.length) {
        increaseMe = 0;
    }

    // var index = Math.floor(Math.random() * fishArray.length);
    console.log(alphabet[increaseMe])


    // for(var i = 0; i < fishArray.length; i++){
    //     console.log(fishArray[i])
    // }

}


buttonWeWantToClick.on("click", seeFish)


console.log(fishArray.length)

// if expression_2 is true

for (var i = 0; i < fishArray.length; i++) {
    // console.log(i, "This is i")
    // console.log(fishArray, "This is my fish array")
    // console.log(fishArray[i])
}




/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
A simple breakdown
        1. var i = 0 (this is expression_1 and only happens a single time)
        2. next it will check the condition of expression_2
        3. is i less than 3? Yes, so it will run the the code inside
        4. the browser will show a console.log of 0
        5. now expression_3 i++ will run and increment i from 0 to 1 (so now i = 1)
        6. next, the condition for expression_2 will be checked
        7. is i less than 3? Yes, i is currently equal to 1, so the code in the { } will run
        8. we will see that i was logged as 1 to the console
        9. next, expression_3 will run and increase i by 1 from 1 to 2
        10. next, the condition for expression_2 will be checked
        11. is i less than 3? Yes, i is currently 2 so the code in the { } will run
        12. we can see that i was logged to the console as 2
        13. next, expression_3 will run and increase i by 1 from 2 to 3
        14. next, the condition for expression_2 will be checked
        15. is i less than 3? NO, i is currently 3 so the code in the { } WILL NOT RUN
        16. The condition for expression_2 is no longer true, so the for loop has stopped running
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TAKE AWAYS?
    for (expression_1; expression_2; espression_3){
            // code_to_be_executed
    }
    expression_1 executes a single time
    expression_2; IF TRUE, will run the code inside of the { }
    expression_3; will run AFTER the code inside of the { } executes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/









var fishArray = ["Salmon", "Tuna", "Trout", "Mackerel", "Swordfish", "Barracuda", "Marlin", "Cod", "Haddock", "Halibut", "Flounder", "Grouper", "Carp", "Catfish", "Pike", "Bass", "Sardine", "Anchovy", "Eel", "Shark", "Sturgeon", "Herring", "Tilapia", "Perch"];







// array

console.log(fishArray)