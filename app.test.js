const { fromEuroToDollar } = require('./app.js');
test("One euro should be 1.2 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2);
    const result = typeof(fromEuroToDollar) ==='function';
    expect(result ).toBe(true);
    const number = !isNaN(fromEuroToDollar(3.5));
    expect(number).toBe(true)
    
});


const { sum } = require('./app.js');
test('adds 7 + 3 to equal 10', () => {
    expect(sum(7,3)).toBe(10);
    const number = !isNaN(sum(7,3));
    expect(number).toBe(true)
    const numberSum = sum(7,3);
    const numberEntero = numberSum % 1 == 0;
    expect(numberEntero).toBe(true)
}); 