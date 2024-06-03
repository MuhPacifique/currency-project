function showAlert() {
    alert("Do you want to convert");
}


function validateform(){
    let amount = document.getElementById("Amount").Value;

    if(amount === ""){
        alert("amount must be filled out");
        return false;
    }
    return true;
}



// ../js/index.js

function validateForm() {
    // Perform any additional validation if needed
    return true;
}

function showAlert() {
    // Prevent form submission
    event.preventDefault();

    // Get the values from the form
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Define exchange rates (this is an example, rates should be dynamic in a real application)
    const exchangeRates = {
        "USD": { "EUR": 0.85, "RWF": 1000, "GBP": 0.75 },
        "EUR": { "USD": 1.18, "RWF": 1180, "GBP": 0.88 },
        "RWF": { "USD": 0.001, "EUR": 0.00085, "GBP": 0.00075 },
        "GBP": { "USD": 1.33, "EUR": 1.14, "RWF": 1330 }
    };

    // Perform the conversion
    let result = 0;
    if (fromCurrency === toCurrency) {
        result = amount; // No conversion needed if both currencies are the same
    } else {
        result = amount * exchangeRates[fromCurrency][toCurrency];
    }

    // Display the result
    document.getElementById('result').innerText = result.toFixed(2);
}
