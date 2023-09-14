import missingLetter from './missing-letter.js'

describe('Missing letter', () => {
  it('Case abce should return d', () => {
    missingLetter('abce').should.equal('d')
  })
  it('Case complete sequence', () => {
    (typeof missingLetter('abcdefghijklmnopqrstuvwxyz')).should.be.equal('undefined')
  })
})
