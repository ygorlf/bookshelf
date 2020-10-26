// Libs
import { createServer, Model } from 'miragejs';

// Data
import { books } from './data/books';

export default createServer({
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
          favorite: false,
          finished: false,
        }
      )
    }
  },
  routes() {
    this.namespace = '';

    this.get('/discover', (schema) => {
      return {
        books: schema.books.all().models
      }
    });

    this.get('/list', (schema) => {
      return {
        books: schema.books.where({ favorite: true }).models
      }
    });
  },
});