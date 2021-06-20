// for speed I am adding the api key here as an enum, but you could:
// 1) put it in the .env file and use process.env to separate out production and dev build keys
// 2) securely handle it by letting the server administer the correct keys
export enum Giphy {
  ApiKey = 'HU6oywJYF2ZqC6wmMqpb71ExldlTECVc',
}

export interface GiphyQueryParams {
  limit: number;
  offset: number;
  rating: string;
  lang: string;
}
