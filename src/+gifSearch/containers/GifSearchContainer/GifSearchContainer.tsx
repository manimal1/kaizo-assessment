import React, { FC, useEffect, useState } from 'react';

import { getSearchGifs } from '@services';

export const GifSearchContainer: FC = () => {
  const [searchData, setSearchData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!searchData && !isLoading) {
      setIsLoading(true);
      getSearchGifs({
        gifSearchItem: 'pizza',
      })
        .then((res: any) => {
          setIsLoading(false);
          setSearchData(res.data);
        })
        .catch((err: Error) => {
          setIsLoading(false);
          setErrorMessage(err.message || 'unknown error');
        });
    }
  }, []);

  if ((!searchData && !errorMessage) || isLoading) {
    return null;
  }

  return <div>Welcome!</div>;
};
