
        function toggleForm(){
            let form =document.getElementById("calculationForm");
            form.classList.toggle("hidden");
        }
        function Calculation() {

            let num1 =  Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);

            let sum = num1 + num2;
            let difference = num1 - num2;
            let product = num1 * num2;
            let division = num1 / num2;

       document.getElementById("result").innerHTML =

        "Sum: " + sum + "<br>" +
        "Difference: " + difference + "<br>" +
        "Product: " + product + "<br>" +
        "Division: " + division;

        }
