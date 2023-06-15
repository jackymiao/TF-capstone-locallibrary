function findAccountById(accounts, id) {
  return accounts.find((account)=>account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((firstAccount, secondAccount)=>firstAccount.name.last > secondAccount.name.last?1:-1);
};


//can use reduce
//go through books array, get borrows array
// function getTotalNumberOfBorrows(account, books) {
//   const userId = account.id;
//   let total = 0;
//   books.forEach((bookObj)=>{
//     const borrowList =  bookObj.borrows.filter(record=>record.id===userId);
//     const num = borrowList.length;
//     return total += num});
//   return total;
// }
function getTotalNumberOfBorrows({id}, books) {
  return books.reduce((accumulator, element)=>
  accumulator += element.borrows.filter(record=>record.id===id).length
  ,0)
}

//get account id
//loop through books, find borrows array include account id
//get the book
//add author to book
//return bookList directly didn't work
// function getBooksPossessedByAccount(account, books, authors) {
//   const userId = account.id;
//   const bookList = books.filter((book)=>book.borrows.some((borrower)=>borrower.id===userId&&borrower.returned===false));
//   bookList.forEach((bookObj)=>bookObj['author'] = authors.find((author)=>author.id===bookObj.authorId))
//   return bookList;
// }

//book id is not user's id
//cannot return bookList directly
function getBooksPossessedByAccount({id:newId}, books, authors) {
  let bookList = books.filter(book=>book.borrows[0].id===newId && book.borrows[0].returned === false);
  bookList.map((bookObj)=>bookObj['author'] = authors.find((author)=>author.id===bookObj.authorId))
  //console.log(bookList);
  return bookList;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
