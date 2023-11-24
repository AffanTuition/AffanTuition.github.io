document.addEventListener("DOMContentLoaded", function () {
    const options = ["rock", "paper", "scissors"];

    const buttons = document.querySelectorAll("button");
    const resultDiv = document.getElementById("result");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const userChoice = this.id;
            const computerChoice = options[Math.floor(Math.random() * 3)];

            const result = determineWinner(userChoice, computerChoice);
            displayResult(result, userChoice, computerChoice);
        });
    });

    function determineWinner(user, computer) {
        if (user === computer) return "It's a tie!";
        if ((user === "rock" && computer === "scissors") ||
            (user === "paper" && computer === "rock") ||
            (user === "scissors" && computer === "paper")) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    function displayResult(result, user, computer) {
        resultDiv.textContent = `Your choice: ${user} | Computer's choice: ${computer} | Result: ${result}`;
    }
});
