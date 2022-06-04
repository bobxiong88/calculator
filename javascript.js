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
    if (operator==="+") return add(a,b);
    else if (operator==="-") return subtract(a,b);
    else if (operator==="*") return multiply(a,b);
    else if (operator==="÷") return divide(a,b);
    else if (operator==="^") return pow(a,b);
    else if (operator==="%") return mod(a,b);
    else return mystery(a,b);
}