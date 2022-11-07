function Operator(clickId){
    let number1 = +document.getElementById('number1').value
    let number2 = +document.getElementById('number2').value
    let result = document.getElementById('result')
    // let operator;
    // if(operator = document.getElementById().)
    if(clickId == "addition"){
        result.innerHTML = number1 + number2;
    }else if(clickId == "subtraction"){
        result.innerHTML = number1 - number2;}
        else if(clickId == "multiplication"){
        result.innerHTML = number1 * number2;
    }else{
        result.innerHTML = number1 / number2;
    }

}
function Addition(){
    let number1 = +document.getElementById('number1').value
    let number2 = +document.getElementById('number2').value
    let result = document.getElementById('result')
    // let operator;
    // if(operator = document.getElementById().)
    console.log(number1);
    result.innerHTML = number1 + number2;
    console.log(result);
}
function Subtraction(){
    let number1 = +document.getElementById('number1').value
    let number2 = +document.getElementById('number2').value
    let result = document.getElementById('result')
    console.log(number1);
    result.innerHTML = number1 - number2;
    console.log(result);
}
function Multiplication(){
    let number1 = +document.getElementById('number1').value
    let number2 = +document.getElementById('number2').value
    let result = document.getElementById('result')
    console.log(number1);
    result.innerHTML = number1 * number2;
    console.log(result);
}
function Division(){
    let number1 = +document.getElementById('number1').value
    let number2 = +document.getElementById('number2').value
    let result = document.getElementById('result')
    console.log(number1);
    result.innerHTML = number1 / number2;
    console.log(result);
}