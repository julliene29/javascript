const readline=require("readline");
const a = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

a.question("Enter First number:",function(num1){
a.question("Enter Second number:",function(num2){

    num1 = Number(num1);
    num2 = Number(num2);

    console.log("Sum:" ,num1+num2);
    console.log("Difference:", num1-num2);
    console.log("Product:", num1*num2);
    console.log("Division:", num1/num2);
    
    a.close();
});
});