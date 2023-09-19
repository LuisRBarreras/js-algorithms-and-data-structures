import convertHTML from './convert-html-entities.js'

describe('Convert html entities', () => {
  it('Case: &', () => {
    convertHTML('Dolce & Gabbana').should.be.equal('Dolce &amp; Gabbana')
  })
  it('Case: < (less than) and > (greater than)', () => {
    convertHTML('Hamburgers < Pizza <> Tacos').should.be.equal('Hamburgers &lt; Pizza &lt;&gt; Tacos')
  })
})
