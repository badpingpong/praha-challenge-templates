import { asyncSumOfArray, sumOfArray } from "../functions";

describe('functions', () => {
  describe("sumOfArray", () => {
    test("should return sum of array", () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = sumOfArray(numbers);
      expect(result).toBe(15);
    })
    test('空配列のときはエラー', () => {
      const numbers: number[] = []
      expect(() => sumOfArray(numbers)).toThrowError()
    })
  })
  
  describe("asyncSumOfArray", () => {
    test("should return sum of array", async () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = await asyncSumOfArray(numbers);
      expect(result).toBe(15);
    })

    test('空配列のときはエラー', async () => {
      const numbers: number[] = []
      await expect(async() => asyncSumOfArray(numbers)).rejects.toThrowError()
    })
  })
})