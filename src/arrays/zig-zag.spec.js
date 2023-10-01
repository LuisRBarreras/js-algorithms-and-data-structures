import zigZagFunction from './zig-zag.js'

describe('Zig zag', () => {
  it('Case 7 elements', () => {
    zigZagFunction([4, 5, 1, 3, 6, 2, 7]).should.containDeepOrdered([1, 2, 3, 7, 6, 5, 4])
  })
})
