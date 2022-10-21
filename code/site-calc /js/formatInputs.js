// Import

import { priceFormatter, priceFormatterDecimals } from "./formatters.js";


// Inputs

const inputCost = document.querySelector('#input-cost');
const inputDownpayment = document.querySelector('#input-downpayment');
const inputTerm = document.querySelector('#input-term');
const form = document.querySelector('#form');
const totalCost = document.querySelector('#total-cost');
const totalMonthPayment = document.querySelector('#total-month-payment');


const maxPrice = 100000000;

// Cleave 

const cleavePriceSettings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',
};

const cleaveCost = new Cleave(inputCost, cleavePriceSettings);
const cleaveDownPayment = new Cleave(inputDownpayment, cleavePriceSettings);

const cleaveTerm = new Cleave(inputTerm, cleavePriceSettings)

// form

calcMortgage();

form.addEventListener('input', function () {

    // Creadit sum
    calcMortgage();
})

function calcMortgage () {

    let cost = +cleaveCost.getRawValue();

    if (cost > maxPrice) {
        cost = maxPrice;
    };

    const totalAmount = +cleaveCost.getRawValue() - cleaveDownPayment.getRawValue();
    totalCost.innerText = priceFormatter.format(totalAmount);

    const creditRate = +document.querySelector('input[name="program"]:checked').value;
    const monthRate = (creditRate * 100) / 12;

    const years = +cleaveTerm.getRawValue();
    const month = years * 12;
    

    // Credit formula

    const monthPayment = (totalAmount * monthRate) / (1 - (1 + monthRate) * (1 - month));
    totalMonthPayment.innerText = priceFormatterDecimals.format(monthPayment);
    console.log(creditRate)
};


// Slider cost

const sliderCost = document.getElementById('slider-cost');

noUiSlider.create(sliderCost, {
    start: 12000000,
    connect: 'lower',
    step: 100000,
    range: {
        'min': 375000,
        '50%': [10000000, 1000000],
        'max': 100000000
    },
    format: wNumb ({
        decimals: 0,
        thousand: '',
        suffix: '',
    }),
});


sliderCost.noUiSlider.on('slide', function () {
    const sliderValue = parseInt(sliderCost.noUiSlider.get(true))
    cleaveCost.setRawValue(sliderValue);
    calcMortgage();
});


// Slider downpayment

const sliderDownPayment = document.getElementById('slider-downpayment');

noUiSlider.create(sliderDownPayment, {
    start: 2000000,
    connect: 'lower',
    step: 100000,
    range: {
        'min': 375000,
        '50%': [10000000, 1000000],
        'max': 90000000
    },
    format: wNumb ({
        decimals: 0,
        thousand: '',
        suffix: '',
    }),
});


sliderDownPayment.noUiSlider.on('slide', function () {
    const sliderValue = parseInt(sliderDownPayment.noUiSlider.get(true))
    cleaveDownPayment.setRawValue(sliderValue);
    calcMortgage();
});


// Slider term

const sliderTerm = document.getElementById('slider-term');

noUiSlider.create(sliderTerm, {
    start: 6,
    connect: 'lower',
    step: 1,
    range: {
        'min': 1,
        'max': 30
    },
    format: wNumb ({
        decimals: 0,
        thousand: '',
        suffix: '',
    }),
});


sliderTerm.noUiSlider.on('slide', function () {
    const sliderValue = parseInt(sliderTerm.noUiSlider.get(true))
    cleaveTerm.setRawValue(sliderValue);
    calcMortgage();
});


// Inpur formater

inputCost.addEventListener('input', function () {

    const value = +cleaveCost.getRawValue();

    sliderCost.noUiSlider.set(value);

    if (value > maxPrice) {
        inputCost.closest('.param__details').classList.add('param__details--error');
    }   

    if (value <= maxPrice) {
        inputCost.closest('.param__details').classList.remove('param__details--error');
    }   


    // downpayment to input coast


})

inputCost.addEventListener('change', function () {

    const value = +cleaveCost.getRawValue();

    if (value > maxPrice) {
        inputCost.closest('.param__details').classList.remove('param__details--error');
        cleaveCost.setRawValue(maxPrice);
    }   
})