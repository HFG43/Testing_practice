class Calculator {
    constructor() {
  this.input = "...numb";
    }

  add = (...numb) => {
    return numb.reduce((counter, num) => counter + num, 0);
  }

  subtract = (...numb) => {
    return numb.reduce((countr, num) => countr - num)
  } 

  divide = (a,b) => {
    if(b === 0) {
      return null;
    }
    return a / b
  }

  multiply = (...numb) => {
    return numb.reduce((counter, num) => counter * num);
  }
}
module.exports = Calculator;