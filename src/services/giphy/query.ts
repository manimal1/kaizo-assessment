import axios from 'axios';

import { Giphy, GiphyQueryParams } from './types';

// I am creating an instance here as not to always have to write out the baseURL for different calls
// and to add a standard timeout time (one of the advantages of useing Axios over fetch)
export const giphyAPI = axios.create({
  baseURL: 'https://api.giphy.com/v1/',
  timeout: 2500,
});

// even though I do not use them, I added params here to be able to configure them
export const getSearchGifs = ({
  gifSearchItem,
  params = {
    limit: 10,
    offset: 0,
    rating: 'pg-13',
    lang: 'en',
  },
}: {
  gifSearchItem: string;
  params?: GiphyQueryParams;
}) =>
  giphyAPI.get(
    `gifs/search?api_key=${Giphy.ApiKey}&q=${gifSearchItem}&limit=${params.limit}&offset=${params.offset}&rating=${params.rating}&lang=${params.lang}`
  );
