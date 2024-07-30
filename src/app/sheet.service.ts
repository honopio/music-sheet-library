import { Injectable } from '@angular/core';

/**
 * Interface for the sheet object
 */
interface Sheet {
  id: number;
  title: string;
  composer: string;
  instrument: string;
  firstpage: string;
  pdfPath: string;
}

@Injectable({
  providedIn: 'root'
})

export class SheetService {

  private sheets: Sheet[] = [
    { id: 1, title: 'Ballade No.1, Op.23', composer: 'Frédéric Chopin', instrument: 'Piano', firstpage: "assets/sheets/sheet1.jpg", pdfPath: "assets/sheets/sheet1.pdf"},
    { id: 2, title: 'Recuerdos de la Alhambra', composer: 'Francisco Tárrega', instrument: 'Guitar', firstpage: "assets/sheets/sheet2.jpg", pdfPath: "assets/sheets/sheet2.pdf"},
    { id: 3, title: 'Violin Sonata No.9, Op.47', composer: 'Beethoven', instrument: 'Violin', firstpage: "assets/sheets/sheet3.jpg", pdfPath: "assets/sheets/sheet3.pdf"},
    { id: 4, title: 'Partita BWV 1013', composer: 'Johann Sebastian Bach', instrument: 'Flute', firstpage: "assets/sheets/sheet4.jpg", pdfPath: "assets/sheets/sheet4.pdf"},
    { id: 5, title: 'Le nozze di Figaro, K.492', composer: 'Mozart', instrument: 'Voice', firstpage: "assets/sheets/sheet5.jpg", pdfPath: "assets/sheets/sheet5.pdf"},
    { id: 6, title: 'Clarinet Sonata, FP 184', composer: 'Poulenc', instrument: 'Clarinet', firstpage: "assets/sheets/sheet6.jpg", pdfPath: "assets/sheets/sheet6.pdf"},
    { id: 7, title: 'Flute Sonata, FP 164', composer: 'Poulenc', instrument: 'Flute', firstpage: "assets/sheets/sheet7.jpg", pdfPath: "assets/sheets/sheet7.pdf"},
    { id: 8, title: 'Rondo a Capriccio in G major, Op.129', composer: 'Beethoven', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 9, title: 'Piano Concerto No.1, Op.23', composer: 'Tchaikovsky', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 10, title: 'Nocturne in C-sharp minor, Op. posth.', composer: 'Frédéric Chopin', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 11, title: 'Piano Sonata No.14, Op.27', composer: 'Beethoven', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 12, title: 'Asturias', composer: 'Isaac Albéniz', instrument: 'Guitar', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 13, title: 'Cello Suite No.1, BWV 1007', composer: 'Johann Sebastian Bach', instrument: 'Cello', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 14, title: 'Violin Concerto, Op.64', composer: 'Mendelssohn', instrument: 'Violin', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 15, title: 'Ave Maria', composer: 'Schubert', instrument: 'Voice', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 16, title: 'Clarinet Concerto, K.622', composer: 'Mozart', instrument: 'Clarinet', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 17, title: 'Oboe Sonata, FP 185', composer: 'Poulenc', instrument: 'Oboe', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 18, title: 'Sextet, FP 100', composer: 'Poulenc', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 19, title: 'Piano Concerto No.2, Op.21', composer: 'Frédéric Chopin', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 20, title: 'Fantaisie-Impromptu, Op.66', composer: 'Frédéric Chopin', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 21, title: 'Piano Concerto No.3, Op.37', composer: 'Beethoven', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 22, title: 'Piano Sonata No.8, Op.13', composer: 'Beethoven', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 23, title: 'Piano Concerto No.2, Op.44', composer: 'Tchaikovsky', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 24, title: 'Cello Suite No.2, BWV 1008', composer: 'Johann Sebastian Bach', instrument: 'Cello', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 25, title: 'Cello Suite No.3, BWV 1009', composer: 'Johann Sebastian Bach', instrument: 'Cello', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 26, title: 'Piano Concerto No.21, K.467', composer: 'Mozart', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 27, title: 'Piano Sonata No.11, K.331', composer: 'Mozart', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 28, title: 'Clarinet Quintet, K.581', composer: 'Mozart', instrument: 'Clarinet', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 29, title: 'Flute Quartet No.1, K.285', composer: 'Mozart', instrument: 'Flute', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 30, title: 'Piano Sonata No.21, D.960', composer: 'Schubert', instrument: 'Piano', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 31, title: 'String Quartet No.14, D.810', composer: 'Schubert', instrument: 'Violin', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},
    { id: 32, title: 'Trumpet Concerto, Hob.VIIe:1', composer: 'Haydn', instrument: 'Trumpet', firstpage: "assets/sheets/sheet.jpg", pdfPath: "assets/sheets/sheet.pdf"},

  ];

  getSheets() { return this.sheets; }

  getSheetById(id: number) { return this.sheets.find(sheet => sheet.id === id); }

  getComposers() { return this.sheets.map(sheet => sheet.composer).filter((value, index, self) => self.indexOf(value) === index); }

  getInstruments() { return this.sheets.map(sheet => sheet.instrument).filter((value, index, self) => self.indexOf(value) === index); }

  /**
   * @param {string} query - string from the search bar, or clicked instrument
   * @returns an array of sheets that match any of the search terms. The query can have multiple search terms separated by commas.
   */
  searchSheets(query: string) {
    //split the query into terms and trim whitespaces
    const searchTerms = query.split(',').map(term => term.trim().toLowerCase());

    //some method to check if at least one term passes the test
    return this.sheets.filter(sheet =>
      searchTerms.some(term =>
        sheet.title.toLowerCase().includes(term) ||
        sheet.composer.toLowerCase().includes(term) ||
        sheet.instrument.toLowerCase().includes(term)
      )
    );
  }

  /**
   * @param {string} composer - composer name
   * @returns sheets that match the composer. exact match
   */
  searchByComposer(composer: string) { return this.sheets.filter(sheet => sheet.composer === composer); }

  /**
   * @param {string[]} instruments - selected instruments from the dropdown
   * @param composers - selected composers from the dropdown
   * @returns sheets that match the intersection of selected instruments and composers
   */
  intersect(instruments: string[], composers: string[]) {
    return this.sheets.filter(sheet => instruments.includes(sheet.instrument) && composers.includes(sheet.composer));
  }

}
