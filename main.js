
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
const article = document.querySelector('article');

Book.prototype.callArray= function()
{
    let temp = document.createElement('div');
    temp.classList.add('pluck-card');
    
        this.tempContent(temp);
        article.appendChild(temp);

}

Book.prototype.tempContent= function(temp)
{
    for (let i =0 ; i<4 ; i++)
    {
        
    let divi = document.createElement('p');
        switch(i)
        {
            case 0: 
            divi.textContent = `Title: ${this.title}`;
            break;

            case 1:
            divi.textContent = `Author: ${this.author}`;
            break;

            case 2:
            divi.textContent = `Pages: ${this.no_of_pages} pages`;
            break;

            case 3:
            divi.textContent = `Status: ${this.read}`;
            break;
        }
        temp.appendChild(divi);
    }


}

const button = document.querySelector('.Add');
button.addEventListener('click', ()=>
{
    let obj = new Book();
    obj.form();
    obj.info();
    array.push(obj);
    obj.callArray();
})

