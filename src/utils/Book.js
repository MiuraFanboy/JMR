// {
//     "title": "Titre du livre",
//     "author": "Nom de l'auteur",
//     "cover": "url_vers_l_image" || null, // Image de couverture
//     "filepath": "chemin/vers/le/fichier.epub", // Chemin du fichier
//     "last_time_read": 1707362487, // Timestamp Unix
//     "latest_location": "cfi(/6/2!/4/1:0)", // Indicateur précis EPUB (CFI) ou numéro de page
//     "progress": 42.5, // Progression en pourcentage (float)
//     "total_pages": 250, // Nombre total de pages (optionnel)
//     "status": ReadingStatus.READING, // État de la lecture
// };

class Book {
    constructor(title, author, cover, filepath, lastTimeRead = null, latestLocation = 0, progress = 0, totalPages = 0, status = 'unread') {
        this.title = title;
        this.author = author;
        this.cover = cover;
        this.filepath = filepath;
        this.lastTimeRead = lastTimeRead;
        this.latestLocation = latestLocation;
        this.progress = progress;
        this.totalPages = totalPages;
        this.status = status;
    }

    // Method to update progress
    updateProgress(newLocation) {
        this.latestLocation = Math.min(newLocation, this.totalPages);
        this.progress = this.totalPages > 0 ? Math.round((this.latestLocation / this.totalPages) * 100) : 0;
        if (this.progress === 100) this.status = 'finished';
        this.lastTimeRead = new Date().toISOString();
    }

    // Mark as "Finished"
    markAsFinished() {
        this.progress = 100;
        this.latestLocation = this.totalPages;
        this.status = 'finished';
        this.lastTimeRead = new Date().toISOString();
    }

    // ✅ Static method to create a Book instance from a Dexie object
    static fromDexie(bookData) {
        return new Book(
            bookData.title,
            bookData.author,
            bookData.cover,
            bookData.filepath,
            bookData.lastTimeRead,
            bookData.latestLocation,
            bookData.progress,
            bookData.totalPages,
            bookData.status
        );
    }
}

export { Book };
