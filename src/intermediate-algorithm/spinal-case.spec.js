import { spinalCase } from './spinal-case.js'

describe('Test spinal case', () => {
  it('Case with empty space', () => {
    spinalCase('This Is Spinal Tap').should.equal('this-is-spinal-tap')
  })
  it('Case with upper case', () => {
    spinalCase('thisIsSpinalTap').should.equal('this-is-spinal-tap')
  })
  it('Case combine', () => {
    spinalCase('Teletubbies say Eh-oh').should.equal('teletubbies-say-eh-oh')
  })
})
