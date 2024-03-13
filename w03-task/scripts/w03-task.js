/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1+number2;
}

function addNumbers()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    //let sum = add(addNumber1,addNumber2); 
    document.querySelector('#sum').value = add(addNumber1,addNumber2); 
}
document.querySelector('#addNumbers').addEventListener('click',addNumbers);


/* Function Expression - Subtract Numbers */
function subtraction(number1,number2)
{
    return number1-number2;
}
function subtractNumbers()
{
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value); 
    document.querySelector('#difference').value = subtraction(subNumber1,subNumber2); 
}
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);



/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1*number2;

const multiplyNumbers = () =>
{
    let mulNumber1 = Number(document.querySelector('#factor1').value);
    let mulNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(mulNumber1,mulNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2)
{
    return number1/number2;
}

function divNumbers()
{
    let divNumber1 = Number(document.querySelector('#dividend').value);
    let divNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divNumber1,divNumber2); 
}
document.querySelector('#divideNumbers').addEventListener('click',divNumbers);


/* Decision Structure */
function getTotal()
{
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let isMember = document.getElementById("member").checked;
    if (isMember) {
        subtotal *= 0.8;
    }
    let totalSpan = document.getElementById("total");
    totalSpan.textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById('getTotal').addEventListener('click',getTotal)


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let sourceArraySpan = document.getElementById("array");
sourceArraySpan.textContent = `${numbersArray}`;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2!==0);
document.getElementById('odds').textContent = `${oddNumbers}`;

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2===0);
document.getElementById('evens').textContent = `${evenNumbers}`;

/* Output Sum of Org. Array */
let sumOrg = numbersArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').textContent = `${sumOrg}`;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number *2);
document.getElementById('multiplied').textContent = `${multiplied}`;


/* Output Sum of Multiplied by 2 Array */
let multiplied1 = numbersArray.map(number => number *2);
let sumMultiplied = multiplied1.reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').textContent = `${sumMultiplied}`;
