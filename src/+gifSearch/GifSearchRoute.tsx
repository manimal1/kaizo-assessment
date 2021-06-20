import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

import { GifSearchContainer } from './containers';

export const GifSearchRoute: FC = () => {
  return (
    <Box
      component="main"
      position="relative"
      padding={{ xs: '1rem', md: '2rem' }}
    >
      <Typography variant="h2" component="h1">
        Search for any Gif
      </Typography>
      <GifSearchContainer />
    </Box>
  );
};
