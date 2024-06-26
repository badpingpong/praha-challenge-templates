export const sumOfArray = (numbers: number[]): number => {
  if (numbers.length === 0) {
    return 0
  }
  return numbers.reduce((a: number, b: number): number => a + b)
}


export const asyncSumOfArray = (numbers: number[]): Promise<number> => {
  return new Promise((resolve): void => {
    resolve(sumOfArray(numbers))
  })
}

type DBInterface = {
  save: (numbers: number[]) => void
}
export const asyncSumOfArraySometimesZero = (
  numbers: number[],
  database: DBInterface
): Promise<number> => {
  return new Promise((resolve): void => {
    try {
      // const database = new DatabaseMock(); // fixme: この関数をテストするには、DatabaseMockの使い方を変える必要がありそう！ヒント：依存性の注入
      database.save(numbers)
      resolve(sumOfArray(numbers))
    } catch (error) {
      resolve(0)
    }
  })
}

type NameApiServiceInterface = {
  getFirstName: () => Promise<string>
}
export const getFirstNameThrowIfLong = async (
  maxNameLength: number,
  nameApiService: NameApiServiceInterface
): Promise<string> => {
  // const nameApiService = new NameApiService.getFirstName(); // fixme: この関数をテストするには、NameApiServiceの使い方を変える必要がありそう！ヒント：依存性の注入
  const firstName = await nameApiService.getFirstName()

  if (firstName.length > maxNameLength) {
    throw new Error('first_name too long')
  }
  return firstName
}
