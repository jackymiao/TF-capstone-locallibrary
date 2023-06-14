function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return (books.filter((book)=>book.borrows[0].returned===false)).length;
}

//console.log(books);
//filter different book, put them in object, genre as key
//use key as name, value as count's value for each property
function getMostCommonGenres(books) {
  let genreList = {};
  books.filter((book)=>{
    if(!genreList[book.genre]){
  genreList[book.genre] = 1;
    } else{
      genreList[book.genre] += 1;
    };
    return genreList;
  });
  const newList = [];
  for(let i in genreList){
    newList.push({"name":i,"count":genreList[i]}) 
  };
  newList.sort((a,b)=>a.count < b.count?1:-1);
  return newList.slice(0,5);
}

function getMostPopularBooks(books) {
  const list = [];
  const bookList = books.map((book)=>{
    const title = book.title;
    const num = book.borrows.length;
    list.push({"name":title, "count":num});
    return list;
  });
  return list.sort((a,b)=>a.count < b.count?1:-1).slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  const bookCountList = {};
  books.map((book)=>{
    const title = book.title;
    const num = book.borrows.length;
    const auId = book.authorId;
    if(!bookCountList[auId]){
      return bookCountList[auId] = num;
    } else{
      return bookCountList[auId] += num
    }
  })
console.log(bookCountList);
const newList = [];
for(let i in bookCountList){
  const authorName = authors.find((author)=>author.id===Number(i));
  
  newList.push({"name":`${authorName.name.first} ${authorName.name.last}`, "count":bookCountList[i]})
}
newList.sort((nameA, nameB)=>a.count > b.count?-1:1);
return newList.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
