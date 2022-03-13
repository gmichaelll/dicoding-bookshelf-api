const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler, // handler Kriteria 1 Menggunakan addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler, // handler Kriteria 2 Menggunakan getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler, // handler Kriteria 3 Menggunakan getBookByIdHandler
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler, // handler Kriteria 4 Menggunakan EditBookByIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler, // handler Kriteria 5 Menggunakan deleteBookByIdHandler
  },
];

module.exports = routes; // exports, agar dapat di import di server.js
