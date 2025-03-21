import {LibraryItem} from "../../Documents/GitHub/LibraryManagement_Typescript/LibraryItem";

export class DVD extends LibraryItem{
    constructor(
        title: string,
        author: string,
        publication_year: number,
        item_id: number,
        is_available: boolean,
        public duration_minutes: number
    ) {
        super(title, author, publication_year, item_id, is_available);
    }
}