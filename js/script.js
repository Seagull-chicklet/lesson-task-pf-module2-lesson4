function logScentence (word){
console.log(word)
}
logScentence("What the func is this nonsense?")

//question 2 Create and call a function with two arguments, `firstName` and `lastName`.
//The function should log both the argument values with a space between them.

function logName(firstName, lastName){
    var fullName = firstName + " " + lastName;
    console.log(fullName);
}
logName("Jenny", "Polkadot")


// Question 3
function multiply(firstNumber, secondNumber) {

    // find out the type of the argument values
    var typeofFirst = typeof firstNumber;
    var typeofSecond = typeof secondNumber;

    if (typeofFirst !== "number" || typeofSecond !== "number") {
        // as soon as a return statement is encountered the function will exit
        return "Please supply number values";
    }

    return firstNumber * secondNumber;

}
var result = multiply(3, 5);
console.log(result);ß

// Question 4
function addition(num1, num2, num3) {
    // try and convert all the arguments to number values
    var convertedNum1 = parseFloat(num1);
    var convertedNum2 = parseFloat(num2);
    var convertedNum3 = parseFloat(num3);

    // if any of the arguments cannot be converted to a number they will have the value NaN - Not a Number
    // check for a NaN value using isNaN()
    if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)) {
        // as soon as a return statement is encountered the function will exit
        return "Invalid argument types";
    }

    return convertedNum1 + convertedNum2 + convertedNum3;

}

// select the p element
var paragraph = document.querySelector("p");

var sum = addition(6, true, "f");

paragraph.innerHTML = sum;
// Question 5
var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function () {
    var heading = document.querySelector("h1");
    heading.innerHTML += ": Updated";
};



// Question 6
var buttonTitle = document.querySelector(".title");

function changeTitle() {
    document.title = "I've been updated";
}

buttonTitle.onclick = changeTitle;



// Question 7
var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");

// this function will be called by the other functions
function changeBackground(colour) {
    document.body.style.backgroundColor = colour;
}

redButton.onclick = function () {
    changeBackground("red");
};

orangeButton.onclick = function () {
    changeBackground("orange");
};

pinkButton.onclick = function () {
    changeBackground("pink");
};