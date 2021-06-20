import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useScreensizeContext } from '@providers';

import { GifSearchForm } from './GifSearchForm';

jest.mock('@providers');

(useScreensizeContext as jest.Mock).mockImplementation(() => ({
  isPhone: false,
}));

const getWrapper = (
  overrideProps?: Partial<React.ComponentProps<typeof GifSearchForm>>
) => {
  const defaultProps: React.ComponentProps<typeof GifSearchForm> = {
    onSubmit: jest.fn(),
    setGifSearchItem: jest.fn(),
    isPhone: false,
    gifSearchItem: '',
  };
  const props = {
    ...defaultProps,
    ...overrideProps,
  };
  return render(<GifSearchForm {...props} />);
};

it('should render the gif form', () => {
  const { queryByLabelText, getByText } = getWrapper({});
  const inputElement = queryByLabelText(/Gif search/i);
  const buttonElement = getByText(/Get gifs/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

it('should fire the onSubmit function on button click', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = getWrapper({ onSubmit });
  const button = getByTestId('search-button');
  fireEvent.click(button);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
