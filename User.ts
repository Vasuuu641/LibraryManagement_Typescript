import {Library} from "./Library";
import {LibraryItem} from "./LibraryItem";

export class User{
    constructor(
        public name: string,
        public user_id : number,
        private borrowed_items : LibraryItem[]

    ){}
//Borrows item from Library

BorrowItem(Library: Library, item_id: number){
      const item = Library.GetItemById(item_id);

      //Check whether the item exists and is available
      if(item && item.is_available){
          this.borrowed_items.push(item);

          console.log(`{${this.name}} has borrowed ${item}}`);
      }else{
          console.log("Item not found or not available");
      }
    }

    //Returns item to the library
    ReturnItem(item_id: number){
       for(let i = 0; i < this.borrowed_items.length; i++){
           if(this.borrowed_items[i].item_id === item_id){
               this.borrowed_items.splice(i, 1);
           }
       }

    }
}