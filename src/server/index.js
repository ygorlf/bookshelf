// Libs
import { createServer, Model } from 'miragejs';

// Data
import { books } from './data/books';

export const mockedServer = () => createServer({
  models: {
    book: Model,
  },
  seeds(server) {
    for (let i = 0; i < books.length; i++) {
      const element = books[i];
      
      server.create(
        'book',
        {
          ...element,
          list: 'discover',
        }
      )
    }
  },
  routes() {
    this.namespace = '/';

    this.get('/discover', (schema) => {
      return {
        books: schema.books.all().models
      };
    });

    this.get('/reading', (schema) => {
      return {
        books: schema.books.where({ list: 'reading' }).models
      };
    });

    this.get('/finished', (schema) => {
      return {
        books: schema.books.where({ list: 'finished' }).models
      };
    });

    this.patch('/books/:id', (schema, request) => {
      const newAttrs = JSON.parse(request.requestBody);

      const id = request.params.id;
      const book = schema.books.find(id);

      return book.update(newAttrs);
    });

    this.get('/search', (schema, request) => {
      const { query } = request.queryParams;

      if (!query) {
        return {
          books: schema.books.all().models,
        };
      }

      const booksByTitle = schema.books.where(book => book.title.toLowerCase().includes(query)).models;
      const booksByAuthor = schema.books.where(book => book.author.toLowerCase().includes(query)).models;

      return {
        books: booksByTitle.concat(booksByAuthor),
      };
    });
  },
});