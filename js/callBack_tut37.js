console.log("welcome to tut 37");

// Pretend this data is coming from the server.
let students = [
  { name: "Divyansh", age: 21 },
  { name: "Rohan", age: 19 },
];

// the callback function could be given any name.
function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log(`Student ${student.name} has been enrolled.`);
    callback();
  }, 3001);
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
  }, 1000);
}

let student = { name: "Krishna", age: 108 };

// Without using callback function.

// enrollStudent(student);     // This gets completed in 1001ms so while student is getting enrolled, the others are fetched and hence newly enrolled student is not displayed.

// getStudents();              // This gets completed in 1000ms.

//AFTER using callback function
enrollStudent(student, getStudents);    // This will execute enrollStudent and will hold the getStudents until for student is enrolled. after that is calls the callback function which is getStudents. 
