const parseOptions = require('./')

describe('parseOptions', () => {
  it('should return empty options if nothing provided', () => {
    expect(parseOptions()).toEqual({})
  })

  it('should parse options in string', () => {
    expect(parseOptions('--red=yes --old=no --what no ---thanks ---wat=ok'))
      .toEqual({ red: 'yes', old: 'no', what: true })
  })

  it('should be resilient to chicanery', () => {
    expect(parseOptions('--red=yes--=faroutman --old=no --cold========>bang! --spaces="rule over tabs"'))
      .toEqual({
        red: 'yes--=faroutman ',
        old: 'no',
        cold: '=======>bang!',
        spaces: 'rule over tabs',
      })
  })
})
