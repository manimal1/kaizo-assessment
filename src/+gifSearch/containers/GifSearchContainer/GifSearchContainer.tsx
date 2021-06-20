import React, { FC, useState } from 'react';
import { Box } from '@material-ui/core';

import { getSearchGifs, GiphySearchResults, GiphySearchData } from '@services';
import { useScreensizeContext } from '@providers';

import { GifSearchDisplay, GifSearchForm } from '../../components';

export const GifSearchContainer: FC = () => {
  const { isPhone } = useScreensizeContext();
  const [gifSearchItem, setGifSearchItem] = useState<string>('');
  const [lastSearchItem, setLastSearchItem] = useState<string | null>(null);
  const [searchData, setSearchData] = useState<GiphySearchData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isSearchUnchanged: boolean = gifSearchItem === lastSearchItem;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // prevent multiple submissions of the same search item or a query with an empty value
    if (!gifSearchItem || isSearchUnchanged) {
      return;
    }

    setIsLoading(true);
    setLastSearchItem(gifSearchItem);
    getSearchGifs({ gifSearchItem })
      .then((res: GiphySearchResults) => {
        setIsLoading(false);
        setSearchData(res.data);
      })
      .catch((err: Error) => {
        setIsLoading(false);
        setErrorMessage(err.message || 'unknown error');
      });
  };

  return (
    <Box component="div" marginTop="2rem">
      <GifSearchForm
        onSubmit={handleSubmit}
        isPhone={isPhone}
        gifSearchItem={gifSearchItem}
        setGifSearchItem={setGifSearchItem}
        isLoading={isLoading}
        isSearchUnchanged={isSearchUnchanged}
      />
      <Box component="div" marginTop="2rem">
        <GifSearchDisplay
          searchData={searchData?.data}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </Box>
    </Box>
  );
};
