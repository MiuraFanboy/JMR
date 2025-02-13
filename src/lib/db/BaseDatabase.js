import Dexie from 'dexie';

class BaseDatabase {
  constructor() {
    if (!BaseDatabase.instance) {
      this.db = new Dexie('MyAppDatabase');
      this.db.version(1).stores({
        books: '++id, title, author, cover, filepath, last_time_read, latest_location, progress, total_pages, status',  // IndexedDB store for books
        settings: '&key, value'                  // Key-value store for settings
      });

      BaseDatabase.instance = this;  // Singleton pattern
    }
    return BaseDatabase.instance;
  }
}

export const BaseDB = new BaseDatabase();



// WOULD BE LIKE THAT:
let books_data = [
    {
        "title": "Titre du livre",
        "author": "Nom de l'auteur",
        "cover": "url_vers_l_image" || null, // Image de couverture
        "filepath": "chemin/vers/le/fichier.epub", // Chemin du fichier
        "last_time_read": 1707362487, // Timestamp Unix
        "latest_location": "cfi(/6/2!/4/1:0)", // Indicateur précis EPUB (CFI) ou numéro de page
        "progress": 42.5, // Progression en pourcentage (float)
        "total_pages": 250, // Nombre total de pages (optionnel)
        "status": ReadingStatus.READING, // État de la lecture
    },
    // etc...
];
