import React, { FC } from 'react';
import {
  Box,
  CircularProgress,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useStyles } from './GifSearchDisplayStyles';

interface Props {
  searchData: any;
  isLoading: boolean;
  errorMessage: string | null;
}

export const GifSearchDisplay: FC<Props> = ({
  searchData,
  isLoading,
  errorMessage,
}) => {
  const classes = useStyles();

  if (isLoading) {
    return (
      <Box component="div" display="flex" alignItems="center">
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  if (errorMessage) {
    return <Alert severity="error">{errorMessage}</Alert>;
  }

  if (!searchData && !isLoading && !errorMessage) {
    return null;
  }

  return (
    <Grid container spacing={3}>
      {searchData.map((gif: any) => (
        <Grid item xs={12} md={4} lg={3} key={gif.id} className={classes.grid}>
          <Card classes={{ root: classes.card }}>
            <CardContent>
              <img
                src={gif.images?.downsized_medium?.url}
                className={classes.image}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
