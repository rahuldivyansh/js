console.log("welcome to ajax tutorial")

let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', fetchBtnListener)

function fetchBtnListener(){

    console.log("you have clicked the fetch button")

    // Instantiate the object
    let xhrObj = new XMLHttpRequest();

    // Open the object
    xhrObj.open('GET', 'message.txt', true)

    // What to do when in progress (optional). We can add loading animation when this is in progress and remove it when it has loaded.
    xhrObj.onprogress = function(){
        console.log("In progress")
    }

    // What to do when response is ready
    xhrObj.onload = function(){
        if(this.status === 200){        // 200 status code means the request is successful.
            console.log(this.responseText)
            
            let elem = document.querySelector('.Hello')
            elem.innerHTML = `<h1>Fetch executed successfully</h1>`
        } else {
            console.log("error while loading the response")
        }
    }

    // sending the request to be fetched
    xhrObj.send()
}

let popBtn = document.getElementById('popBtn')
popBtn.addEventListener('click', popBtnListener)

function popBtnListener(){
    console.log("Hello. Let's start populating.")

    // Instantiate the object
    let obj = new XMLHttpRequest();

    // Open the object
    obj.open('GET', 'https://dummyjson.com/products', true)

    // Onloading function
    obj.onload = function(){
        if(this.status === 200){

            let obj = JSON.parse(this.responseText)
            console.log(obj)

            // Changing the heading text
            let heading = document.querySelector('.Hello')
            heading.innerHTML = `<p> Populated Successfully </p>`

            // Adding list items to page 

            let list = document.getElementById('list')
            
            str = ""

            for(element in obj){
                str += `<li> ${element} </li>`
            }
            list.innerHTML = str
        }
    }

    obj.send()
}
