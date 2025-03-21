
import {LibraryItem} from "./LibraryItem";

export class Book extends LibraryItem{
    constructor(
        title: string,
        author: string,
        publication_year: number,
        item_id: number,
        is_available: boolean,
        public genre: string
    ) {
        super(title, author, publication_year, item_id, is_available);
    }
}



