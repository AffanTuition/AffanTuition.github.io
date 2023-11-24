function openTableCalculator() {
    window.open('table-calculator.html', '_blank');
}

function openSquareCalculator() {
    window.open('square-calculator.html', '_blank');
}

function openCubeCalculator() {
    window.open('cube-calculator.html', '_blank');
}
 /* table calculator js*/
 function generateTable() {
     // Get the input value
     const numberInput = document.getElementById('numberInput');
     const inputValue = numberInput.value;

     // Get the table output element
     const tableOutput = document.getElementById('tableOutput');

     // Clear previous results
     tableOutput.innerHTML = '';

     // Validate input
     if (inputValue === '' || isNaN(inputValue)) {
         alert('Please enter a valid number.');
         return;
     }

     // Generate and display the table
     for (let i = 1; i <= 10; i++) {
         const result = inputValue * i;
         tableOutput.innerHTML += `<p>${inputValue} x ${i} = ${result}</p>`;
     }
 }
/* square and cube calculator js*/
function calculate() {
    const number = document.getElementById('number').value;

    if (number !== '') {
        const square = Math.pow(number, 2);
        const cube = Math.pow(number, 3);

        const resultOutput = document.getElementById('resultOutput');
        resultOutput.innerHTML = `<p>Square: ${square}</p><p>Cube: ${cube}</p>`;
    } else {
        alert('Please enter a number.');
    }
}

/* interest(S.I. and C.I.) calculator js */
function calculateSimpleInterest() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    if (principal !== '' && rate !== '' && time !== '') {
        const simpleInterest = (principal * rate * time) / 100;

        const resultOutput = document.getElementById('resultOutput');
        resultOutput.innerHTML = `<p>Simple Interest: ${simpleInterest}</p>`;
    } else {
        alert('Please enter all values.');
    }
}

function calculateCompoundInterest() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    if (principal !== '' && rate !== '' && time !== '') {
        const compoundInterest = principal * Math.pow(1 + rate / 100, time) - principal;

        const resultOutput = document.getElementById('resultOutput');
        resultOutput.innerHTML = `<p>Compound Interest: ${compoundInterest}</p>`;
    } else {
        alert('Please enter all values.');
    }
}
