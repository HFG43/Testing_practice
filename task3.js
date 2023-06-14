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


}
module.exports = Calculator;