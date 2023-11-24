function openForceCalculator() {
  window.location.href = 'forceandpressurecalc.html';
}
function openTemperatureConversionCalculator() {
  window.location.href = 'temperatureconversion.html';
}
function opentimeandmotionCalculator() {
  window.location.href = 'timeandmotioncalc.html';
}
function openpressurecalculator() {
  window.location.href = 'pressure.html';
}
// Add more functions for other calculators

// Force and Pressure Calculator js
    document.addEventListener('DOMContentLoaded', function() {
        const calculateForceButton = document.getElementById('calculateForceButton');

        calculateForceButton.addEventListener('click', function() {
            const mass = parseFloat(document.getElementById('mass').value);
            const acceleration = parseFloat(document.getElementById('acceleration').value);

            if (isNaN(mass) || isNaN(acceleration)) {
                alert('Please enter valid values for mass and acceleration.');
                return;
            }

            const forceResult = document.getElementById('forceResult');
            const force = mass * acceleration;
            forceResult.textContent = `Force: ${force.toFixed(2)} N`;
        });
    });

            document.addEventListener('DOMContentLoaded', function() {
                const calculatePressureButton = document.getElementById('calculatePressureButton');

                calculatePressureButton.addEventListener('click', function() {
                    const force = parseFloat(document.getElementById('force').value);
                    const area = parseFloat(document.getElementById('area').value);

                    if (isNaN(force) || isNaN(area) || force <= 0 || area <= 0) {
                        alert('Please enter valid values for force and area.');
                        return;
                    }

                    const pressureResult = document.getElementById('pressureResult');
                    const pressure = force / area;
                    pressureResult.textContent = `Pressure: ${pressure.toFixed(2)} Pa`;
                });
            });

            

    



          //   Temperature Converter js
function convert() {
    const temperatureInput = document.getElementById('temperature');
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');

    let value = parseFloat(temperatureInput.value);

    if (isNaN(value)) {
        alert(`Please enter a valid temperature.`);
        return;
    }

    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    let result;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (value * 9/5) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = value + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (value - 32) * 5/9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (value - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = value - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = (value - 273.15) * 9/5 + 32;
    } else {
        // If fromUnit and toUnit are the same, no conversion needed
        result = value;
    }

    document.getElementById('result').innerHTML = `Converted to ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}: ${result.toFixed(2)}`;
}

// time and motion js
function calculate() {
    const outputType = document.getElementById('outputType').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);
    const speed = parseFloat(document.getElementById('speed').value);

    if (outputType === 'distance') {
        const calculatedDistance = time * speed;
        document.getElementById('result').innerHTML = `Distance: ${calculatedDistance.toFixed(2)} meters`;
    } else if (outputType === 'time') {
        const calculatedTime = distance / speed;
        document.getElementById('result').innerHTML = `Time: ${calculatedTime.toFixed(2)} seconds`;
    } else if (outputType === 'speed') {
        const calculatedSpeed = distance / time;
        document.getElementById('result').innerHTML = `Speed: ${calculatedSpeed.toFixed(2)} m/s`;
    }
}
