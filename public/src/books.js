//helper function
function shorterTheArray(arr, length=1){
  return arr.slice(0,length);
}

function findAuthorById(authors, id) {
  return authors.find((author)=>author.id===id)
}

function findBookById(books, id) {
  return books.find((book)=>book.id===id)
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let returnedIn = [];
  checkedOut = books.filter((book)=>book.borrows[0].returned === false);
  returnedIn = books.filter((book)=>book.borrows[0].returned === true);
  return [checkedOut, returnedIn];
}

//get account by using book borrows array, add status to account object
// function getBorrowersForBook(book, accounts) {
//   let borrowers = book.borrows;
//   let borrowersAccount = [];
//   borrowers.forEach((borrower)=>{
//     let user = accounts.find((account)=>account.id===borrower.id);
//     user['returned'] = borrower.returned;
//     return borrowersAccount.push(user);
//   })

//   return borrowersAccount.slice(0,10);
// }
function getBorrowersForBook({borrows}, accounts=[]) {
  const newBorrowList = borrows.map(({id,returned})=>{
    const foundAccount = accounts.find(account=>account.id===id);
    const newElement = {returned,...foundAccount};
    return newElement;
});
  return shorterTheArray(newBorrowList, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
