import minimumAbsoluteDifference from './min-abs-diff.js'

describe('Minimum Absolute Difference in a Array', () => {
  it('Case: With negative numbers', () => {
    minimumAbsoluteDifference([3, -7, 0]).should.be.equal(3)
  })
  it('Case: Bigger array', () => {
    minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]).should.be.equal(1)
  })
})
