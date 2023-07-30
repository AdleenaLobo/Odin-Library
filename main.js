
let array = [];

function Book()
{   let title;
    let author;
    let no_of_pages;
    let read;
    this.form = function ()
    {
       this.title = prompt("Enter the title");
        this.author = prompt("Enter the author name");
        this.no_of_pages = prompt ("Enter no of page");
        this.read = prompt("ENter status");
    };
    this.info = function()
    {
        console.log("Title:"+ this.title+ " Author:"+this.author+" No_of_pages:"+this.no_of_pages+" Status:"+this.read);
    }
}

const button = document.querySelector('.Add');
button.addEventListener('click', ()=>
{
    let obj = new Book();
    obj.form();
    obj.info();
    array.push(obj);
    console.log(array);
})
