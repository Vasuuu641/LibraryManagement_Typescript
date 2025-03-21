import {LibraryItem} from "./LibraryItem";

export class Library {

    private items: LibraryItem[] = []; //Attribute items to store new items to be added to LibraryItem

    //Methods
    //Add item to LibraryItem
    AddItem(item: LibraryItem){
        this.items.push(item);
        console.log(`${item.title} added to library!`);
    }

    //RemoveItem according to item_id
    RemoveItem(item_id: number){
        if(this.items == null){
            console.log("Nothing to remove! The library is empty.");
            return;
        }else{
            this.items = this.items.filter(item => item.item_id != item_id);
            console.log(`${item_id} removed from library!`);
        }
    }

    //Listing Available Items

    ListAvailableItems(){
        this.items = this.items.filter(item => item.is_available == true);
        console.log(`${this.items} are the available items in the library!`);
    }

}
