import { NameApiService } from "./nameApiService"

describe('nameApiService', () => {
  it("getFirstName", async () => {
    const service = new NameApiService()
    const firstName = await service.getFirstName()
    expect(firstName).toBe('John')
  })
})