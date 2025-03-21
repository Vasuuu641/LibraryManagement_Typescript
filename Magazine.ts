import {LibraryItem} from "./LibraryItem";

export class Magazine extends LibraryItem{
    constructor(
        title: string,
        author: string,
        publication_year: number,
        item_id: number,
        is_available: boolean,
        public issue_number: number
    ) {
        super(title, author, publication_year, item_id, is_available);
    }
}