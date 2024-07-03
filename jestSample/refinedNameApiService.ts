import axios from "axios";

type FirstNameFetcherInterface = {
  fetch: () => Promise<{data: {first_name: string}}>
}
type Constructor = {
  maxLength: number;
  firstNameFetcher: FirstNameFetcherInterface
};
export class RefinedNameApiService {
  private maxLength: number;
  private firstNameFetcher: FirstNameFetcherInterface;

  public constructor(deps: Constructor) {
    this.maxLength = deps.maxLength;
    this.firstNameFetcher = deps.firstNameFetcher;
  }

  public async getFirstName(): Promise<string> {
    const { data } = await axios.get<{first_name: string}>(
      "https://random-data-api.com/api/name/random_name"
    );
    const firstName = data.first_name;
    if (firstName.length > this.maxLength) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}
