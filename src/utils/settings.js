// utils/settings.js
  
export const FontSizes = {12 : "12px", 14: "14px", 16 : "16px", 18 : "18px", 20 : "20px"};
    

export const FontFamily = {
    NOTO_SANS_JP : "noto_sans_jp",
    NOTO_SERIF_JP : "noto_serif_jp",
    KOZUKA_MINCHO : "kozuka_mincho",
    YU_MINCHO : "yu_mincho",
}


export const Themes = {
    DARK : "dark-theme",
    LIGHT : "light-theme"
}

export const WritingSense = {
    VERTICAL : "vertical",
    HORIZONTAL : "horizontal"
};

export const DEFAULT_SETTINGS = {
    "theme" : Themes.LIGHT,
    "reader" : {
        "font-family": FontFamily.NOTO_SANS_JP,
        "font-size": FontSizes[16], // Valeur par défaut (float)
        "line-height": 1.5, // Float pour l'interlignage
        "letter-spacing": 0.05, // Espacement des lettres (float, en em)
        "writing-sense": WritingSense.VERTICAL, // Sens de lecture
    }
}



///////////// DIFFERENT IDEAS : 

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

// OTHER FONTS:

// Hiragino Kaku Gothic

// Mplus 1p, Hiragino Sans, Hiragino Kaku Gothic Pro, 游ゴシック, 游ゴシック体, YuGothic, Yu Gothic, ＭＳ ゴシック, and MS Gothic




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let settings = {
    "general": {
        "theme": Themes.values(), // Ajout du mode sépia
    },
    "reader": {
        "font-family": FontFamily.values(),
        "font-size": 16.0, // Valeur par défaut (float)
        "line-height": 1.5, // Float pour l'interlignage
        "letter-spacing": 0.05, // Espacement des lettres (float, en em)
        "writing-sense": ["horizontal-tb", "vertical-rl"], // Sens de lecture
    }
};

