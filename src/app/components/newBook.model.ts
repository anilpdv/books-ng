export interface NewBook {
  id: string;
  author: string;
  title: string;
  publisher: string;
  year: string;
  pages: string;
  language: string;
  size: string;
  extension: string;
  isbns: string[];
}

export interface Meta {
  results: string;
  start: string;
  end: string;
}

export interface NewBookData {
  books: NewBook[];
  meta: Meta;
}

export interface LibgenBook {
  id: string;
  title: string;
  author: string;
  language: string;
  filesize: string;
  extension: string;
  download: string;
  bookImage: string;
  isbn: string[];
}
