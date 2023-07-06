import { it, expect } from 'vitest'

import { validateStringNotEmpty, validateNumber } from './validation'

it('should throw an error message if a string is empty', () => {
  const input = 'test'

  const result = validateStringNotEmpty(input)

  expect(result).toThrowError(Error)
})

it('should throw an error message if is NaN', () => {
  const input = 1

  const result = validateNumber(input)

  expect(result).toThrowError(Error)
})