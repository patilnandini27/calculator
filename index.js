//calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;    //adds input to display and saves back in display
}
function clearDisplay(){
    display.value = ""; 
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}