import myReplace from './my-replace.js'

describe('myReplace', () => {
  it('Case replace both lower case', () => {
    myReplace('Let us go to the store', 'store', 'mall').should.equal('Let us go to the mall')
  })

  it('Case replace before be upper case', () => {
    myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting').should.equal('He is Sitting on the couch')
  })

  it('Case replace after be upe case', () => {
    myReplace('I think we should look up there', 'up', 'Down').should.equal('I think we should look down there')
  })
})
