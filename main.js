
class BaseOf
{
    constructor()
    {
        
    this.body = document.querySelector('body');
    this.article = document.querySelector('article');
    this.array=[];
    this.temp = document.createElement('div');
    }
    getbod()
    {
        return this.body;
    }

    getarticle()
    {
        return this.article;
    }

    getarray()
    {
        return this.array;
    }

    gettemp()
    {
        return this.temp;
    }

    check()
    {
        if(this.array.length == 0 )
        {
            this.article.classList.add('temop');
            this.temp.textContent= `The shelf is empty`;
            this.article.appendChild(this.temp);
        }

    }

    remove_empty_shelf()
    {
        this.temp = document.querySelector('.temop>div');
        if(this.temp != undefined)
        {
        console.log(this.temp);
        this.article.removeChild(this.temp);
        this.article.classList.remove('temop');
        }

    }
}


class book extends BaseOf
{
    constructor(title , author, no_of_pages , read)
    {
        
        super();
        this.title = title;
        this.author = author;
        this.no_of_pages = no_of_pages;
        this.read = read; 
        this.pusharry();
        this.add();
        this.bun.addEventListener('click', this.remove.bind(this));
    }

    add()
    {
    this.temp = document.createElement('div');
    this.temp.classList.add('pluck-card');

    this.outerbun = document.createElement('div');
    this.bun = document.createElement('button');
    this.tempContent();
    this.bun.textContent = 'delete';
    this.bun.classList.add('spec-bun');

        
        this.outerbun.appendChild(this.bun);
        this.temp.appendChild(this.outerbun);
        this.article.appendChild(this.temp);

    }

    remove()
    {
        this.temp= document.querySelector('.pluck-card');
        this.temp.classList.remove('pluck-card');
       this.article.removeChild(this.temp);
        this.array= this.getarray();
        this.array.pop();
        this.check();
    }

    pusharry()
    {
        
    this.array.push([this.title , this.author, this.no_of_pages , this.read]);
    }

    tempContent()
    {
        this.temp.innerHTML = `Title: ${this.title}<br><br>
        Author: ${this.author} <br><br>
        No of pages: ${this.no_of_pages}<br><br>
        Status: ${this.read}<br><br>`;
    }

}

class form extends BaseOf
{
    constructor()
    {
        super();
        this.remove_empty_shelf();
        this.createMod();
        this.addText();
        this.appendMod();
        this.body = this.getbod();
        console.log(this.body);
        document.getElementById('bun').addEventListener('click' ,this.makeobjbook.bind(this));
        /*this.body.classList.remove('body1');
        this.body.removeChild(this.outer_form);
        this.article.removeChild(this.temp);
        this.article.classList.remove('temop');
    */}

    createMod()
    {        
    this.outer_form = document.createElement('div');
    this.formelem = document.createElement('div');
    }

    addText()
    {

        this.formelem.innerHTML = `<form><label for = "title">Enter the title: </label><input type = "text" id = "title">
        <label for = "author">Enter the author name: </label><input type = "text" id = "author">
        <label for = "no_of_pages">Enter the number of pages: </label><input type = "text" id = "no_of_pages">
        <label for = "status">Enter the status: </label><input type = "text" id = "status">
        <button type = "button" id = "bun">Submit</button></form>`;
    }

    appendMod()
    {
        
        this.outer_form.appendChild(this.formelem);
    
        this.body.classList.add('body1');
        this.outer_form.classList.add('formEnable');
    
        this.body.appendChild(this.outer_form);

    }
    
    removeElem()
    {
        this.outer_form.removeChild(this.formelem);
        this.outer_form.classList.remove('formEnable');
        this.body.classList.remove('body1');
        this.body.removeChild(this.outer_form);
    }

    makeobjbook()
    {

         this.book1 = new book(document.getElementById('title').value ,document.getElementById('author').value
        ,document.getElementById('no_of_pages').value, document.getElementById('status').value );
        
        this.outer_form = document.querySelector('.formEnable');
        this.body.classList.remove('body1');
        this.body.removeChild(this.outer_form);
    }

}

let StartPage =
( 
     init = (function()
     {
    this.button = document.querySelector('.Add')
    })(),

    form1 = function()
    {
        formobj = new form();
    },
    
    callBO =(function()
    {
        bobj= new BaseOf().check();
    })(),

    this.button.addEventListener('click' , form1)
    
);