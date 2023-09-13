import dnaPairing from './dna-pairing.js'

describe('DNA Pairing', () => {
  it('Case complete sequence ATCGA', () => {
    dnaPairing('ATCGA').should.containDeepOrdered([['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C'], ['A', 'T']])
  })
})
