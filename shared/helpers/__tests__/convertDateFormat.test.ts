import { convertDateFormat } from '../convertDateFormat'

describe('convertDateFormat', () => {
  it('converts date', () => {
    expect(convertDateFormat('2021-03-03')).toBe('April 3, 2021')
  })

  it('returns empty string if input date is falsy', () => {
    expect(convertDateFormat('')).toBe('')
  })
})