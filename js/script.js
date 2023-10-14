
const numberOne = document.querySelector("#number1"); 
const numberTwo = document.querySelector("#number2"); 
const result = document.querySelector("#result");


const addition = document.querySelector("#add"); 
addition.onclick = () => {
    result.innerHTML = Number(numberOne.value) + Number(numberTwo.value);
  }



const substraction= document.querySelector("#substract"); 
 substraction.onclick = () => {
    result.innerHTML = Number(numberOne.value) -  Number(numberTwo.value); 
 }


const multiplication = document.querySelector("#multiply"); 
multiplication.onclick = () => {
    result.innerHTML = Number(numberOne.value) * Number(numberTwo.value); 
    
}

const division = document.querySelector("#divide");
division.onclick = () => {
    result.innerHTML = Number(numberOne.value) /  Number(numberTwo.value); 
}
