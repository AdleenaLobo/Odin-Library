const body = document.querySelector('body');

let array = [];

function Book()
{   let title;
    let author;
    let no_of_pages;
    let read;
    let temp;
    let bun;
    let formm;
    let outer_form;

}

Book.prototype.form = function ()
{
    this.outer_form = document.createElement('div');
    this.formm = document.createElement('div');
    this.formm.innerHTML = `<form><label for = "title">Enter the title: </label><input type = "text" id = "title">
    <label for = "author">Enter the author name: </label><input type = "text" id = "author">
    <label for = "no_of_pages">Enter the number of pages: </label><input type = "text" id = "no_of_pages">
    <label for = "status">Enter the status: </label><input type = "text" id = "status">
    <button type = "submit" id = "bun">Submit</button></form>`;
    this.outer_form.appendChild(this.formm);
    body.classList.add('body1');
    this.outer_form.classList.add('formEnable');
    body.appendChild(this.outer_form);
    const button1 = document.getElementById('bun');
    button1.addEventListener('click', ()=>
    {
    this.info();
    array.push(this);
    this.callArray();
    });
};

Book.prototype.info = function()
{
    
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.no_of_pages = document.getElementById('no_of_pages').value;
    this.read = document.getElementById('status').value;

    console.log("Title:"+ this.title+ " Author:"+this.author+" No_of_pages:"+this.no_of_pages+" Status:"+this.read);
    

}

const article = document.querySelector('article');

Book.prototype.callArray= function()
{
    let temp = document.createElement('div');
    temp.classList.add('pluck-card');

    let outerbun = document.createElement('div');
    let bun = document.createElement('button');

    bun.textContent = 'delete';
    bun.classList.add('spec-bun');
        this.tempContent(temp);
        outerbun.appendChild(bun);
        temp.appendChild(outerbun);
        article.appendChild(temp);

        bun.addEventListener('click', ()=>{
            article.removeChild(temp);
        });

};


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
});




