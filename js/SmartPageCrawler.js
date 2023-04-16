console.log('Hello from tut 19 ')

// This is Smart Page Crawler
let str = 'python'
let links = document.links

Array.from(links).forEach(function(element){
    href = element.href
    if(href.includes(str)){
        console.log(href)
    }
});

// If we put this code inside any website's console, it returns all links which contains the word python.