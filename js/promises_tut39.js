console.log("welcome to tutorial 39")

/* Promises : 1. Resolved
              2. Rejected
              3. Pending */

function func(){
    return new Promise(function(resolve, reject){
        let pass = false;
        if(pass){
            console.log('Function: passed')
            resolve()
        } else{
            console.log('Function: failed')
            reject('Failed failed msg')
        }
    }, 2001)
}

func().then(function(){
    console.log('Divyansh: Thanks for resolving')
}).catch(function (error){
    console.log(`Divyansh: Why did you promise nigga if you can't fullfill `,error)
})