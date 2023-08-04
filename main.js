const body = document.querySelector('body');

let array = [];

function Book()
{   let title;
    let author;
    let no_of_pages;
    let read;
    let temp;
    let bun;

    this.info = function()
    {
        console.log("Title:"+ this.title+ " Author:"+this.author+" No_of_pages:"+this.no_of_pages+" Status:"+this.read);
    }
}

Book.prototype.form = function ()
{
    const t = document.createElement('div');
    t.innerHTML = `<form><label for = "title">Enter the title: </label><input type = "text" id = "title">
    <label for = "author">Enter the author name: </label><input type = "text" id = "author">
    <label for = "no_of_pages">Enter the number of pages: </label><input type = "text" id = "no_of_pages">
    <label for = "status">Enter the status: </label><input type = "text" id = "status"></form>`;
    t.classList.add('fornmEnable');
    body.appendChild(t);

   this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.no_of_pages = document.getElementById('no_of_pages').value;
    this.read = document.getElementById('status').value;
};

const article = document.querySelector('article');

Book.prototype.callArray= function()
{
    this. temp = document.createElement('div');
    this.temp.classList.add('pluck-card');

    let outerbun = document.createElement('div');
    this. bun = document.createElement('button');

    this.bun.textContent = 'delete';
    this.bun.classList.add('spec-bun');
        this.tempContent(this.temp);
        outerbun.appendChild(this.bun);
        this.temp.appendChild(outerbun);
        article.appendChild(this.temp);

        this.bun.addEventListener('click', ()=>{
            article.removeChild(this.temp);
        })

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


