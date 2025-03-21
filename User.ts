import {LibraryItem} from "./LibraryItem";

export class User{
    constructor(
        public name: string,
        public user_id : number,
        private borrowed_items : LibraryItem[]

    ){}
}