/* The `calculate` function in the provided JavaScript code is performing the following tasks: */
function calculate(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;

/* The `switch` statement in the provided JavaScript code is evaluating the `operator` variable to
determine which arithmetic operation to perform based on the value of the operator. */
    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";

    }
    document.getElementById('result').value = result;
}
/* The code snippet you provided is adding event listeners to the input fields with IDs 'num1' and
'num2'. Specifically, it is listening for the 'focus' event on these input fields. When the input
field gains focus (i.e., when the user clicks on or tabs into the input field), the associated
function is executed. */
document.getElementById('num1').addEventListener('focus' , function(){
    this.value = '';
});
document.getElementById('num2').addEventListener('focus' , function(){
    this.value = '';
});