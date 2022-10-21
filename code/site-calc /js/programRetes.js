// Import

import { percentFormatter } from "./formatters.js";


// Percents

const programBase = 0.099;
const programIT = 0.047;
const programGov = 0.067;
const programZero = 0.108;
const totalPercent = document.querySelector('#total-percent');


// HTML percents

document.querySelector('#base-value').value = programBase;
document.querySelector('#it-value').value = programIT;
document.querySelector('#gov-value').value = programGov;
document.querySelector('#zero-value').value = programZero;


// Adding text

document.querySelector('#base-text').innerText = percentFormatter.format(programBase);
document.querySelector('#it-text').innerText = percentFormatter.format(programIT);
document.querySelector('#gov-text').innerText = percentFormatter.format(programGov);
document.querySelector('#zero-text').innerText = percentFormatter.format(programZero);


// Percents chnaging

const programInputs = document.querySelectorAll('input[name="program"]');

programInputs.forEach((input) => {

    if (input.checked) {
        totalPercent.innerText = percentFormatter.format(input.value);
    }

    input.addEventListener('click', function () {
        totalPercent.innerText = percentFormatter.format(this.value);
    })
})