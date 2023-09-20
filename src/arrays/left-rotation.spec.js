import leftRotation from './left-rotation.js'

describe('Left rotation array', () => {
  it('Case rotation less than array size', () => {
    leftRotation([1, 2, 3, 4, 5], 2).should.containDeepOrdered([3, 4, 5, 1, 2])
  })

  it('Case rotation bigger than array size', () => {
    leftRotation([1, 2, 3, 4, 5], 6).should.containDeepOrdered([2, 3, 4, 5, 1])
  })
})
