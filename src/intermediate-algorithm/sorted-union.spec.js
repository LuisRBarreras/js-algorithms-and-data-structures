import sortedUnion from './sorted-union.js'
describe('Sorted Union', () => {
  it('Case: remove duplicate on same array ', () => {
    sortedUnion([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]).should.containDeepOrdered([1, 3, 2, 5, 4])
  })
  it('Case remove duplicate element on different arrays', () => {
    sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]).should.containDeepOrdered([1, 3, 2, 5, 4])
  })
})
