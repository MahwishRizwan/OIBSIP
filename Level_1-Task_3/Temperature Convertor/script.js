document.addEventListener('DOMContentLoaded', (event) => {
    const convertButton = document.querySelector('.convert_button button');
    const inputTemp = document.getElementById('input_temp');
    const outputTemp = document.getElementById('output_temp');
    const fromUnit = document.querySelector('.convert_from select');
    const toUnit = document.querySelector('.convert_to select');

    convertButton.addEventListener('click', () => {
        const fromValue = parseFloat(inputTemp.value);
        const fromUnitValue = fromUnit.value;
        const toUnitValue = toUnit.value;

        if (isNaN(fromValue)) {
            alert('Please enter a valid temperature.');
            return;
        }

        let result;

        if (fromUnitValue === toUnitValue) {
            result = fromValue;
        } else {
            switch (fromUnitValue) {
                case 'Celcius':
                    result = convertFromCelsius(fromValue, toUnitValue);
                    break;
                case 'Fahrenheit':
                    result = convertFromFahrenheit(fromValue, toUnitValue);
                    break;
                case 'Kelvin':
                    result = convertFromKelvin(fromValue, toUnitValue);
                    break;
                default:
                    alert('Invalid conversion unit.');
                    return;
            }
        }

        outputTemp.value = result.toFixed(2);
    });

    function convertFromCelsius(value, toUnit) {
        switch (toUnit) {
            case 'Fahrenheit':
                return (value * 9/5) + 32;
            case 'Kelvin':
                return value + 273.15;
            default:
                return value;
        }
    }

    function convertFromFahrenheit(value, toUnit) {
        switch (toUnit) {
            case 'Celcius':
                return (value - 32) * 5/9;
            case 'Kelvin':
                return (value - 32) * 5/9 + 273.15;
            default:
                return value;
        }
    }

    function convertFromKelvin(value, toUnit) {
        switch (toUnit) {
            case 'Celcius':
                return value - 273.15;
            case 'Fahrenheit':
                return (value - 273.15) * 9/5 + 32;
            default:
                return value;
        }
    }
});
