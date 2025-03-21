abstract class LibraryItem {
    constructor(
        public title: string,
        public author: string,
        public publication_year: number,
        private item_id: number,
        protected is_available: boolean
    ) {}

    //Methods
    //1. Display_Info - Prints details of the item
    Display_Info(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publication_year}`);
        console.log(`Item ID: ${this.item_id}`);
        console.log(`Is Available: ${this.is_available}`);
    }

    //2. Borrow_Item - Set is_available to false if available otherwise raise an exception
    Borrow_Item(): void{
        if(this.is_available)
        {
            this.is_available = false;
            console.log("Sorry, this book isn't available at the moment :(");
        }
    }

    //3. Return_Item - Sets is_available to true when book is borrowed
    Return_Item(): void{
        if(!this.is_available){
            this.is_available = true;
            console.log("Thank you for returning this book!");
        }
    }
}

class Book extends LibraryItem {
    constructor(
        public genre: string
    ){}
}

class Magazine extends LibraryItem{
    constructor(
        public issue_number: number
    ){}
}

class DVD extends LibraryItem{
    constructor(
        public duration_minutes: number
    ) {}
}

