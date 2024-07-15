document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("inputBox");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "AC") {
                currentInput = "";
                inputBox.value = "0";
            } else if (value === "DEL") {
                currentInput = currentInput.slice(0, -1);
                inputBox.value = currentInput || "0";
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = "Error";
                }
                inputBox.value = currentInput;
            } else {
                if (currentInput === "Error") {
                    currentInput = "";
                }
                currentInput += value;
                inputBox.value = currentInput;
            }
        });
    });
});