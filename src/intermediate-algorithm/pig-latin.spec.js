import translatePigLatin from './pig-latin.js'

describe('Pig latin', () => {
  it('Case with only one consonant', () => {
    translatePigLatin('california').should.equal('aliforniacay')
  })
  it('Case with more than one consonant', () => {
    translatePigLatin('glove').should.equal('oveglay')
  })
  it('Case with vowels', () => {
    translatePigLatin('algorithm').should.equal('algorithmway')
  })
})
