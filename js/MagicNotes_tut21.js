console.log("hello from magic notes");

// Show all the present notes
showNotes();

//  If user adds a node add it to the local Storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxtContent");
  let title = document.getElementById("addTxtTitle");
  let notes = localStorage.getItem("notes");

  // As the getItem() returns string type value so we need to convert it into array to equate it to null
  notes = JSON.parse(notes);
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = notes;
  }

  let myObj = {
    title : title.value,
    text : addTxt.value
  }

  // console.log(typeof notesObj)
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  // Reset the value of textarea after note has been added
  addTxt.value = "";
  // Reset the value of textarea after note has been added
  title.value = "";
  console.log(notesObj);
  showNotes(); // To display the newly created notes on the webpage
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  notes = JSON.parse(notes);
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = notes;
  }

  let html = "";
  if (notes != null) {
    notes.forEach(function (element, index) {
      html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class = "card-text">${element.text}</p>
              <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
          </div>`;
    });
  }

  let notesElem = document.getElementById("notes");
  if (notes != null && notes.length != 0) {
    notesElem.innerHTML = html;               // change the html of notes container to update current notes
  } else {
    notesElem.innerHTML = `<p> No notes available right now. Try adding some new notes. </p>`;
  }
}

// Function to delete a node
function deleteNote(index) {

  index = Number(index);    // As the index passes is string so we convert it into number
  let notes = localStorage.getItem("notes");
  notes = JSON.parse(notes);
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = notes;
  }

  // Delete 1 element starting from index in notesObj array
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  console.log(`Note no ${index + 1} deleted`);
  showNotes();
}


let search = document.getElementById('searchTxt')
search.addEventListener('input', function(){    // When query text entered in search, show results without need of pressing the search button
    
    let inputVal = search.value.toLowerCase()
    
    let noteCards = document.getElementsByClassName('noteCard')   // Get all note's html to search one by one
    
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByClassName("card-text")[0].innerText.toLowerCase()  // To search in note content
        let cardTitle = element.getElementsByClassName("card-title")[0].innerText.toLowerCase() // To search in note title
        // If the note includes what to search then display it
        if(cardTxt.includes(inputVal) || cardTitle.includes(inputVal)){
            element.style.display = "block"
        } 
        // If the note does not include what to search then don't display it
        else {
            element.style.display = "none"
        }
    })
    
})