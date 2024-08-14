function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years); /*This will ensure that the input taken as “No. of Years” is converted into an actual year (e.g. 2024 + No.of.Years). */
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    
    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit Rupees " + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of Rupees " + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    } 
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}