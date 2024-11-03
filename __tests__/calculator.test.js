const {Calculator}  = require('../utilities/calcuator');

describe('calculator function', ()=>{
    myCalc = new Calculator;

it('should add numbers', ()=>{
    expect(myCalc.add(1,3)).toBe(4)})

it('should subtract numbers', ()=>{
    expect(myCalc.subtract(1,3)).toEqual(-2);
})

it('should multiply', ()=>{
    expect(myCalc.multiply(10,3)).toEqual(30);
})

it('should divide', ()=>{
    expect(myCalc.divide(4,2)).toEqual(2);
})

it('should throw error when divided by zero', ()=>{
    expect(()=>{myCalc.divide(4,0)}).toThrow('Cannot divide by zero')
})

})
