// Libs
import {
  render,
  waitForElementToBeRemoved,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { mockedServer } from '../server/';

// Page
import Discover from '../pages/discover/discover';

let server

beforeEach(() => {
  server = mockedServer();
  server.logging = false;
});

afterEach(() => {
  server.shutdown();
});

it('should fetch initial books & render', async () => {
  const { getAllByTestId, getByTestId } = render(<Discover />);

  await waitForElementToBeRemoved(() => getByTestId('discover-loading'));

  expect(getAllByTestId('book-list-item')).toHaveLength(9);
});

it('should add book to read list', async () => {
  const { getByTestId, getAllByTestId } = render(<Discover />);

  await waitForElementToBeRemoved(() => getByTestId('discover-loading'));

  const books = getAllByTestId('book-list-item');
  const button = books[0].querySelector('button');

  fireEvent.click(button);

  await waitFor(() => {
    expect(getByTestId('reading-button')).toBeInTheDocument();
    expect(getByTestId('remove-button')).toBeInTheDocument();
  });
});

it('should search books', async () => {
  const { getByTestId, getAllByTestId } = render(<Discover />);

  await waitForElementToBeRemoved(() => getByTestId('discover-loading'));

  const input = getByTestId('search-input');

  fireEvent.change(input, { target: { value: 'italo' } });
  fireEvent.click(getByTestId('search-button'));

  await waitForElementToBeRemoved(() => getByTestId('discover-loading'));
  await waitFor(() => {
    expect(getAllByTestId('book-list-item')).toHaveLength(2);
  });

  const { getByText } = within(getByTestId('discover-list'));

  expect(getByText('O Cavaleiro Inexistente')).toBeInTheDocument();
  expect(getByText('O Visconde Partido ao Meio')).toBeInTheDocument();
});