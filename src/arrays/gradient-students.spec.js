import gradingStudents from './gradient-students.js'

describe('Gradient Students', () => {
  it('Case 84 should round up to 85', () => {
    gradingStudents([84]).should.containDeepOrdered([85])
  })

  it('Case 29 should not round up', () => {
    gradingStudents([29]).should.containDeepOrdered([29])
  })

  it('Case 57 should not round up', () => {
    gradingStudents([57]).should.containDeepOrdered([57])
  })
})
