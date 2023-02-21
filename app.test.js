const { fromEuroToDollar } = require('./app.js');
describe('app.js', ()=>{
test("One euro should be 1.2 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2)
});
 test("This is a function",function(){   
    const result = typeof(fromEuroToDollar) ==='function';
    expect(result ).toBe(true);
 });
 test("The result of the function is a number", function(){

const number = !isNaN(fromEuroToDollar(3.5));
expect(number).toBe(true);
 })
   
})


const { sum } = require('./app.js');
describe('app.js', ()=>{
test("adds 7 + 3 to equal 10", () => {
    expect(sum(7,3)).toBe(10);
});
test("The result of the function is a number", ()=>{
    const number = !isNaN(sum(7,3));
    expect(number).toBe(true)

});
test("The result of the function is a whole number", ()=>{
    const numberSum = sum(7,3);
    const wholeNumber  = numberSum % 1 == 0;
    expect(wholeNumber).toBe(true); 
});

});