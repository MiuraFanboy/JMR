import { create } from 'zustand';
import { BookDB } from '../lib/BookDatabase';
import { Book } from '../models/Book';

export const useBookStore = create((set, get) => ({
  books: [],   // List of books
  activeBook: null,  // Currently selected book

  /** 📌 Load books from Dexie into Zustand */
  loadBooks: async () => {
    const booksFromDexie = await BookDB.getAllBooks();
    set({ books: booksFromDexie });
  },

  /** 📌 Set active book */
  setActiveBook: (bookId) => {
    const book = get().books.find(b => b.id === bookId);
    if (book) set({ activeBook: book });
  },

  /** 📌 Add a new book */
  addBook: async (newBookData) => {
    const newBook = new Book(...Object.values(newBookData));
    const id = await BookDB.addBook(newBook);
    set(state => ({ books: [...state.books, { ...newBook, id }] }));
  },

  /** 📌 Update book progress */
  updateBookProgress: async (bookId, newLocation) => {
    const book = get().books.find(b => b.id === bookId);
    if (!book) return;

    book.updateProgress(newLocation);
    await BookDB.updateBookProgress(bookId, newLocation);

    set(state => ({
      books: state.books.map(b => (b.id === bookId ? { ...b, ...book } : b)),
      activeBook: book.id === get().activeBook?.id ? book : get().activeBook
    }));
  }
}));
