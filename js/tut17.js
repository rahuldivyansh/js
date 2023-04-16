console.log('This is tut 17 and 18')
// Events and events objects

// document.getElementById('button').addEventListener('click', function(e){
//     console.log('You have clicked the button')
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.className)
    // console.log(e.target.id) 
    // console.log(e.offsetX) 
    // console.log(e.clientX) 
    // location.href = '//google.com'
// })

// document.getElementById('button').addEventListener('mouseover', function(e){
//     console.log('You have clicked the button')
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.className)
    // console.log(e.target.id) 
    // console.log(e.offsetX) 
    // console.log(e.clientX) 
    // location.href = '//google.com'
// })

// tut 18 - More on js events

// let btn = document.getElementById('button')
// console.log('The type of variable storing document.something is',typeof btn)

// let submit_btn = document.getElementById('submit-button')
// submit_btn.addEventListener('click', func1)

// function func1(e){
//     console.log('You clicked submit button')  
    
    // as the submit button is inside the form element, so it will move onto next page after submission and the console.log wont work. This is its normal behaviour. To prevent this we us preventDefault() function

//     e.preventDefault()
// }

// document.querySelector('.come-here').addEventListener('mouseenter', func2)
// document.querySelector('.come-here').addEventListener('mouseleave', func3)


// function func2(e){
//     console.log('You entered into the come here button')
// }
// function func3(e){
//     console.log('You left the come here button')
// }

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log('mouse move')
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 250)`
})