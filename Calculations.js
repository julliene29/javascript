
        function toggleForm(){
            let form =document.getElementById("calculationForm");
            form.classList.toggle("hidden");
        }
        function toggleOperators{
            let buttons = doccument.getElementById("operatorButton");
            buttons.classList.toggle("hidden");
        }
        function checkNumbers() {

            let num1 =  Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);

            let buttons = DocumentFragment.querySelectorAll("#opetorButtons button");

            buttons.forEach(function(button){
             button.disable = (num1 === "" || num2 === "");   
            });
        }
        document.getElementById("num1").addEventListener("input", checkNumbers);

        document.getElementById("num2").addEventListener("input", checkNumbers);

        function calculate(operator) {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result;

    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {

        if (num2 === 0) {
            document.getElementById("result").innerHTML = "Cannot divide by zero";
            return;
        }

        result = num1 / num2;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}
             
