const body = document.querySelector('body');

const article = document.querySelector('article');

let array = [];

let temp = document.createElement('div');


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

const button = document.querySelector('.Add');
button.addEventListener('click', ()=>
{
    let obj = new Book();
    obj.form();
});

Book.prototype.form = function ()
{
    this.outer_form = document.createElement('div');
    this.formm = document.createElement('div');

    this.formm.innerHTML = `<form><label for = "title">Enter the title: </label><input type = "text" id = "title">
    <label for = "author">Enter the author name: </label><input type = "text" id = "author">
    <label for = "no_of_pages">Enter the number of pages: </label><input type = "text" id = "no_of_pages">
    <label for = "status">Enter the status: </label><input type = "text" id = "status">
    <button type = "button" id = "bun">Submit</button></form>`;

    this.outer_form.appendChild(this.formm);

    body.classList.add('body1');
    this.outer_form.classList.add('formEnable');

    body.appendChild(this.outer_form);

    const button1 = document.getElementById('bun');
    button1.addEventListener('click', ()=>
    {
        
    this.info();
    body.classList.remove('body1');
   body.removeChild(this.outer_form);
 
    article.removeChild(temp);
    article.classList.remove('temop');

    });
};

Book.prototype.info = function()
{
    
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.no_of_pages = document.getElementById('no_of_pages').value;
    this.read = document.getElementById('status').value;

    
    array.push([this.title , this.author, this.no_of_pages , this.read]);
    console.log("Title:"+ this.title+ " Author:"+this.author+" No_of_pages:"+this.no_of_pages+" Status:"+this.read);
    
    this.callArray();

}


Book.prototype.callArray= function()
{
    this.temp = document.createElement('div');
    this.temp.classList.add('pluck-card');

    this.outerbun = document.createElement('div');
    this.bun = document.createElement('button');

    this.bun.textContent = 'delete';
    this.bun.classList.add('spec-bun');

        this.tempContent(this.temp);
        this.outerbun.appendChild(this.bun);
        this.temp.appendChild(this.outerbun);
        article.appendChild(this.temp);

        this.bun.addEventListener('click', ()=>{
            console.log(
                array.pop());
            article.removeChild(this.temp);
            check();
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
function check(){
if(array.length == 0 )
{
    article.classList.add('temop');
    temp.textContent= `The shelf is empty`;
    article.appendChild(temp);
}}
check();
console.log(array);