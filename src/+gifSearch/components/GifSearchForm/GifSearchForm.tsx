import React, { FC } from 'react';
import { Box, Button, TextField } from '@material-ui/core';

import { useStyles } from './GifSearchFormStyles';

interface Props {
  onSubmit: (e: React.FormEvent) => void;
  isPhone: boolean;
  gifSearchItem: string;
  setGifSearchItem: (value: string) => void;
}

export const GifSearchForm: FC<Props> = ({
  onSubmit,
  isPhone,
  gifSearchItem,
  setGifSearchItem,
}) => {
  const classes = useStyles(isPhone)();

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.form}
      onSubmit={onSubmit}
    >
      <Box
        component="div"
        position="relative"
        display="flex"
        flexDirection={isPhone ? 'column' : 'row'}
      >
        <TextField
          id="search"
          name="search"
          label="Gif search"
          variant="outlined"
          value={gifSearchItem}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setGifSearchItem(event.currentTarget.value)
          }
          classes={{ root: classes.input }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
          data-testid="search-button"
        >
          Get gifs
        </Button>
      </Box>
    </form>
  );
};
