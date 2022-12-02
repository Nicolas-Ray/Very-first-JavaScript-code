function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){

    let manMoney = 0;
    let counter = 0;
    let month = 0

    output = [];

    while (startPriceNew - startPriceOld > manMoney) {
        counter += 1;
        month += 1;
        
        if (counter === 2) {
            percentLossByMonth = percentLossByMonth + 0.5;
            counter = 0;
        }

        startPriceOld = (startPriceOld * (100 -  percentLossByMonth)) / 100;
        startPriceNew = (startPriceNew * (100 -  percentLossByMonth)) / 100;

        manMoney += savingperMonth;
    }

    manMoney += startPriceOld;
    manMoney = manMoney - startPriceNew;

    if (manMoney - parseInt(manMoney) < 0.5) {
        manMoney = parseInt(manMoney)
    } else {
        manMoney = parseInt(manMoney) + 1;
    }

    output.push(month, manMoney)
    
    return output
  }

nbMonths(2000, 8000, 1000, 1.5)
