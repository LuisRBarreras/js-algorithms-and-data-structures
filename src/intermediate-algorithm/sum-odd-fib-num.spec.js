import sumOddFibs from './sum-odd-fib-num.js'

describe('Sum All Odd fib numbers', () => {
  it('Case: 1000', () => {
    sumOddFibs(1000).should.be.equal(1785)
  })
  it('Case: 4', () => {
    sumOddFibs(4).should.be.equal(5)
  })
  it('Case: Big number 4000000', () => {
    sumOddFibs(4000000).should.be.equal(4613732)
  })
})
