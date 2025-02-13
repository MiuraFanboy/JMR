import { Book } from '../../utils/Book';
import { BaseDB } from './BaseDatabase';

class BookDatabase {
  constructor() {
    this.db = BaseDB.db;  // Reuse existing Dexie instance
  }

  async addBook(book) {
    return await this.db.books.add(book);
  }

  async getBookById(id) {
    const bookData = await this.db.books.get(id);
    return bookData ? Book.fromDexie(bookData) : null;
  }

  async getAllBooks() {
    const booksData = await this.db.books.toArray();
    return booksData.map(Book.fromDexie);
  }

  async updateBookProgress(id, newLocation) {
    const book = await this.getBookById(id);
    if (!book) return null;
    
    book.updateProgress(newLocation);
    return await this.db.books.put({ id, ...book });
  }

  async deleteBook(id) {
    return await this.db.books.delete(id);
  }
}

export const BookDB = new BookDatabase();
