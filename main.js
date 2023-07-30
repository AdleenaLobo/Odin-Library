


function Book(title , author , no_of_pages , read)
{
    this.title = title;
    this.author = author;
    this. no_of_pages = no_of_pages;
    this.read = read;
    this.info = function()
    {
        return [title, author, this.no_of_pages, this.read] ;
        //both work the same with the this keyword and without it
    }
}

const TheHobbit = new Book("The Hobbit by" , "J.R.R Tolkien", "295 page" , "not read"); 
const Percy = new Book("Percy jackson by", "JK Rowling", "300 page" , "read");
console.log(TheHobbit.info());


let array = [];
const button = document.querySelector(".Add");
Book.prototype.form = ()=>{
    this.title = prompt("Enter the title");
    this.author = prompt("Enter the author name");
    this.no_of_pages = prompt ("Enter no of page");
    this.read = prompt("ENter status");
    return [title , author, no_of_pages, read];

}
button.addEventListener('click', ()=>{

    let b = form();
    array.push(b);
});




console.log(array);

