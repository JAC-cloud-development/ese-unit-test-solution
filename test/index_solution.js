import { describe, it } from 'mocha'
import { expect } from 'chai'

import { checkFive } from '../src/index_solution.js'
describe("specifications", function () {
    it("verificare che il risultato è una stringa", function () {
        expect(checkFive(1)).to.be.a('string');
    })
    it("verificare che passando un numero minore di 5 il risultato è 'x is less than 5.'", function () {
        expect(checkFive(1)).to.equal('1 is less than 5');
    })
    it("verificare che passando un numero maggiore di 5 il risultato è 'x is greater than 5.'", function () {
        expect(checkFive(6)).to.equal('6 is greater than 5');
    })
    it("verificare che passando un numero uguale a 5 il risultato è 'x is equal to 5.'", function () {
        expect(checkFive(5)).to.equal('5 is equal to 5');
    })
    it("verificare che se viene passato qualcosa che non è un numero viene restituito 'Error'", function () {
        expect(checkFive(null)).to.equal('Error');
    })
})