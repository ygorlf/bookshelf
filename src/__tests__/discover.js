// Libs
import { render, waitForElementToBeRemoved } from '@testing-library/react';

import { mockedServer } from '../server/';

// Page
import Discover from '../pages/discover/discover';

let server

beforeEach(() => {
  server = mockedServer('development');
  server.logging = false;
});

afterEach(() => {
  server.shutdown();
});

test('should fetch initial books & render', async () => {
  server.get('/discover', (schema) => {
    return {
      books: schema.books.all().models
    }
  });

  const { getAllByTestId, getByTestId } = render(<Discover />);

  await waitForElementToBeRemoved(() => getByTestId('discover-loading'));

  expect(getAllByTestId('book-list-item')).toHaveLength(9);
});