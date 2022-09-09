import { isError } from '../is-error-guard'

describe('is-error type-guard', () => {
  it('is able to identify errors', () => {
    const error = new Error('brrrrrzzlllll')

    const result = isError(error)

    expect(result).toBe(true)
  })

  it('is able to identify non-errors', () => {
    const noError = { foo: 'bar' }

    const result = isError(noError)

    expect(result).toBe(false)
  })
})
