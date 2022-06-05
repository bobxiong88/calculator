function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}
function pow(a, b){
    return a**b;
}
function mod(a, b){
    return a%b;
}
function mystery(a, b){
    return (a+b)*(a-b);
}
function operate(a, b, operator){
    a = parseFloat(a);
    b = parseFloat(b);
    if (operator==="+") return add(a,b);
    else if (operator==="-") return subtract(a,b);
    else if (operator==="*") return multiply(a,b);
    else if (operator==="÷") return divide(a,b);
    else if (operator==="^") return pow(a,b);
    else if (operator==="%") return mod(a,b);
    else return mystery(a,b);
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

let displayText = "";
let prevNumber = "";
let currOp = "";
let oped = false;
let eqed = false;
let error = false;

let operators = "+-*÷^%m";
let digits = "0123456789."

let n = 20;

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        let char = button.id;
        if (char==="CE"||error === true){
            displayText = "";
            prevNumber = "";
            oped = false;
            eqed = false;
            error = false;
        }
        if (digits.includes(char)) {
            if (eqed ===true){
                prevNumber = "";
                displayText = "";
                eqed = false;
            }
            else if (oped===true){
                prevNumber = displayText;
                displayText = "";
                oped = false;
            }
            if ((char==="."&&!displayText.includes(char))||char!==".") displayText = displayText+char;  
        }
        else if (operators.includes(char)){
            if (displayText!==""){
                if (eqed === true){
                    prevNumber = "";
                }
                if (prevNumber!==""){
                    displayText = operate(prevNumber, displayText, currOp);
                    prevNumber = "";
                }
                else{
                    prevNumber = displayText;
                }
                currOp = char;
                oped = true;
                eqed = false;
            }
        }
        else if (char==="="){
            if (displayText!==""&&prevNumber!==""){
                if (eqed === true){
                    displayText = operate(displayText, prevNumber, currOp);
                }
                else{
                    [prevNumber,displayText] = [displayText, operate(prevNumber,displayText,currOp)];
                }
                eqed = true;
            }
        }
        if (displayText.length>20){
            displayText = "ERROR";
            error = true;
        }
        display.textContent = displayText;
    });
});