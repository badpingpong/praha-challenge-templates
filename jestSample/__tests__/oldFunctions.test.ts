import {
  originalAsyncSumOfArray,
  originalAsyncSumOfArraySometimesZero,
  originalGetFirstNameThrowIfLong,
  originalSumOfArray,
} from '../oldFunctions'
import { DatabaseMock } from '../util'

describe('original sumOfArray', () => {
  test('should return sum of array', () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = originalSumOfArray(numbers)
    expect(result).toBe(15)
  })
  test('空配列のときはエラー', () => {
    const numbers: number[] = []
    expect(() => originalSumOfArray(numbers)).toThrowError()
  })
})

describe("original asyncSumOfArray", () => {
  test('should return sum of array', async () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = await originalAsyncSumOfArray(numbers)
    expect(result).toBe(15)
  })

  test('空配列のときはエラー', async () => {
    const numbers: number[] = []
    await expect(async () => originalAsyncSumOfArray(numbers)).rejects.toThrowError()
  })
})

describe('original asyncSumOfArraySometimesZero', () => {
  test('should return sum of array', async () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = await originalAsyncSumOfArraySometimesZero(numbers)
    expect(result).toBe(15)
  })
  test('空配列のときは0を返す', async () => {
    const numbers: number[] = []
    const result = await originalAsyncSumOfArraySometimesZero(numbers)
    expect(result).toBe(0)
  })

})


describe('original getFirstNameThrowIfLong', () => {
  test('最初の文字を返す', async () => {
    const maxNameLength = 5

    const result = await originalGetFirstNameThrowIfLong(maxNameLength)

    expect(result).toBe('John')
  })
  test("4文字の場合は最初の文字数を返す",async () => {
    const maxNameLength = 4

    const result = await originalGetFirstNameThrowIfLong(maxNameLength)

    expect(result).toBe('John')
  
  })
  test("0文字の場合はエラー",async () => {
    const maxNameLength = 0

    await expect(() => originalGetFirstNameThrowIfLong(maxNameLength)).rejects.toThrowError()
  
  })
  test('文字数制限を超えた場合はエラー', async () => {
    const maxNameLength = 3

    await expect(async () =>
      originalGetFirstNameThrowIfLong(maxNameLength)
    ).rejects.toThrowError('first_name too long')
  })
})