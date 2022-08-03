function Calculator() {
    this.read = function(){
        num1 = +prompt('Num1', 0)
        num2 = +prompt('Num2', 0)
    }
    this.sum = function(){
        let sum = num1 + num2
        return sum
    };
    this.mul = function(){
        let mul = num1 * num2
        return mul
    }
};

let calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
