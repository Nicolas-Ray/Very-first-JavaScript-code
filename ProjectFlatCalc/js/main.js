const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input')

// кнопки
const radioType = document.querySelectorAll('input[name="type"');
const radioBuilding = document.querySelectorAll('input[name="building"');
const radioRooms = document.querySelectorAll('input[name="rooms"');

// Чекбоксы
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');


const basePrice = 6000;
const totalPriceEl = document.querySelector('#total-price');


squareRange.addEventListener('input', function() {
    squareInput.value = squareRange.value;
});


squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value;
});


function calculate() {
    let totalPrice = basePrice * parseInt(squareInput.value);

    for (const radio of radioType) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    };

    for (const radio of radioBuilding) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    };

    for (const radio of radioRooms) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    if (ceilings.checked) {
        totalPrice = totalPrice * parseFloat(ceilings.value);
    }

    if (walls.checked) {
        totalPrice = totalPrice * parseFloat(walls.value);
    }

    if (floor.checked) {
        totalPrice = totalPrice * parseFloat(floor.value);
    }
 
    const formater = new Intl.NumberFormat('ru');
    totalPriceEl.innerText = formater.format(totalPrice);
};

calculate();

for (const input of inputs) {
    input.addEventListener('input', function() {
    calculate();
    })
};
