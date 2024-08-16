import miniMaxSum from './mini-max-sum.js'

describe('Mini max sum', () => {
  it('Case only positive numbers', () => {
    miniMaxSum([1, 2, 3, 4, 5]).should.equal('10 14')
  })
})
