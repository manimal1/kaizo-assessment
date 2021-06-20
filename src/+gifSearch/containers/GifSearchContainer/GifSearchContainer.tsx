import React, { FC, useState } from 'react';
import { Box } from '@material-ui/core';

import { getSearchGifs } from '@services';
import { useScreensizeContext } from '@providers';

import { GifSearchDisplay, GifSearchForm } from '../../components';

export const GifSearchContainer: FC = () => {
  const { isPhone } = useScreensizeContext();
  const [gifSearchItem, setGifSearchItem] = useState<string>('');
  const [searchData, setSearchData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // prevent call with an empty value
    if (!gifSearchItem) {
      return;
    }

    setIsLoading(true);
    getSearchGifs({ gifSearchItem })
      .then((res: any) => {
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
