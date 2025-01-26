const calculator = require('../app/calculator');

describe('Calculator', function () {
    let expect;

    before(async function () {
        // Dynamically import Chai inside CommonJS file
        const chai = await import('chai');
        expect = chai.expect;
    });

    // ADDITION PASS
    it('should add two numbers', function () {
        expect(calculator.add(5, 2)).to.equal(7);
    });

    // ADDITION FAIL
    it('should add two numbers', function () {
        expect(calculator.add(5, 2)).to.equal(8);
    });

    // SUBTRACTION PASS
    it('should subtract two numbers', function () {
        expect(calculator.sub(5, 2)).to.equal(3);
    });

    // SUBTRACTION FAIL
    it('should subtract two numbers', function () {
        expect(calculator.sub(5, 2)).to.equal(5);
    });

    // MULTIPLICATION PASS
    it('should multiply two numbers', function () {
        expect(calculator.mul(5, 2)).to.equal(10);
    });

    it('should multiply two numbers', function () {
        expect(calculator.mul(5, 2)).to.equal(12);
    });

    // DIVISION PASS
    it('should divide two numbers', function () {
        expect(calculator.div(10, 2)).to.equal(5);
    });

    // DIVISION FAIL
    it('should divide two numbers', function () {
        expect(calculator.div(10, 2)).to.equal(2);
    });
});
