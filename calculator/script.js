const input = document.getElementById("input");
const buttons = document.querySelectorAll(".btn");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // This allows the user to enter their expressions
        input.value += button.getAttribute("data-value");
    });
});

calculateButton.addEventListener("click", () => {
    const expression = input.value;

    if (expression === "1+1") {
        input.value = "love you jennn :C" // This is the answer that will appear if you type 1+1. (OH REALLY?)
    } else {
        try {
            const result = eval(expression);
            input.value = result; // This display the result inside the field.
        } catch (error) {
            input.value = "Invalid expression"; // This is a error handler.
        }
    }
});

clearButton.addEventListener("click", () => {
    input.value = ""; // Blank, will clear the entire field
});
