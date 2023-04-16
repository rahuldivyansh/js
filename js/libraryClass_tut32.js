console.log("Welocome to tutorial 32");

class Library {
  constructor(givenBookList) {
    this.bookList = givenBookList;
    this.issuedBooks = {}; // An empty object to store books issued to someone
  }

  getBookList() {
    if (this.bookList.length > 0)
      this.bookList.forEach(function (element) {
        console.log(element);
      });
    else console.log("No book exists");
  }

  issueBook(bookName, userName) {
    if (this.issuedBooks[bookName] == undefined) {
      this.issuedBooks[bookName] = userName;
      console.log(`Book - ${bookName} issued to ${userName}`);
    } else {
      console.log("This book is already issued");
    }
  }
  returnBook(bookName) {
    delete this.issuedBooks[bookName];
  }
}
let bookList = ["java", "cpp", "maths", "art", "philosphy"];
let obj = new Library(bookList);
obj.issueBook("cpp", "Divyansh");
