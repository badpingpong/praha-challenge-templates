import {
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
  sumOfArray,
} from '../functions'

describe('sumOfArray', () => {
  test('should return sum of array', () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = sumOfArray(numbers)
    expect(result).toBe(15)
  })
  test('空配列のときは0', () => {
    const numbers: number[] = []
    const result = sumOfArray(numbers)
    expect(result).toBe(0)
  })
  test.todo("小数に対応")
  test.todo("0に対応")
  test.todo("負の数に対応")
})

describe('asyncSumOfArray', () => {
  test('should return sum of array', async () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = await asyncSumOfArray(numbers)
    expect(result).toBe(15)
  })

  test('空配列のときは0', async () => {
    const numbers: number[] = []
    const result = await asyncSumOfArray(numbers)
    expect(result).toBe(0)
  })
  test.todo("小数に対応")
  test.todo("0に対応")
  test.todo("負の数に対応")
})
describe('asyncSumOfArraySometimesZero', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('should return sum of array', async () => {
    const mockSave = jest.fn().mockReturnValueOnce(undefined)
    const numbers = [1, 2, 3, 4, 5]
    const result = await asyncSumOfArraySometimesZero(numbers, {
      save: mockSave,
    })
    expect(result).toBe(15)
  })
  test('空配列のときは0を返す', async () => {
    const numbers: number[] = []
    const mockSave = jest.fn().mockReturnValueOnce(undefined)
    const result = await asyncSumOfArraySometimesZero(numbers, {
      save: mockSave,
    })
    expect(result).toBe(0)
  })
  test('dbのsaveが失敗したときは0を返す', async () => {
    const mockSave = jest.fn().mockImplementationOnce(() => {
      throw new Error('fail')
    })

    const numbers = [1, 2, 3, 4, 5]
    const result = await asyncSumOfArraySometimesZero(numbers, {
      save: mockSave,
    })
    expect(result).toBe(0)
  })
})

describe('getFirstNameThrowIfLong', () => {
  test('最初の文字を返す', async () => {
    const mockGetFirstName = jest.fn()
    mockGetFirstName.mockReturnValue('John')
    const maxNameLength = 5

    const result = await getFirstNameThrowIfLong(maxNameLength, {
      getFirstName: mockGetFirstName,
    })

    expect(result).toBe('John')
  })
  test('文字数制限を超えた場合はエラー', async () => {
    const mockGetFirstName = jest.fn()
    mockGetFirstName.mockReturnValue('John')

    const maxNameLength = 3

    await expect(async () =>
      getFirstNameThrowIfLong(maxNameLength, {
        getFirstName: mockGetFirstName,
      })
    ).rejects.toThrowError('first_name too long')
  })
})