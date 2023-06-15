//helper functions
function getCountsOfValues(Object,valueKeyWord){
  let newList = {};
  Object.forEach((Obj)=>{
    if(!newList[Obj[valueKeyWord]]){
  newList[Obj[valueKeyWord]] = 1;
    } else{
      newList[Obj[valueKeyWord]] += 1;
    };
    return newList;
  });
  return newList;
}

//helper function
function shorterTheArray(arr, length=1){
  return arr.slice(0,length);
}

//helper function
function sortDescendArray(arr, key){
  return arr.sort((a,b)=>a[key] < b[key]?1:-1)
};


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
  const genreList = getCountsOfValues(books,'genre');
  let newList = [];
  for(let i in genreList){
    newList.push({"name":i,"count":genreList[i]}) 
  };
  //newList.sort((a,b)=>a.count < b.count?1:-1);
  //return newList.slice(0,5);
  newList = sortDescendArray(newList, 'count');
  return shorterTheArray(newList, 5);
}

function getMostPopularBooks(books) {
  const list = [];
  const bookList = books.map((book)=>{
    const {title, borrows} = book;
    //const title = book.title;
    const num = borrows.length;
    list.push({"name":title, "count":num});
    return list;
  });
  //return list.sort((a,b)=>a.count < b.count?1:-1).slice(0,5);
  return shorterTheArray(sortDescendArray(list,'count'),5)
}

function getMostPopularAuthors(books, authors) {
  const bookCountList = {};
  books.map((book)=>{
    const {title, authorId:auId, borrows} = book;
    // const title = book.title;
    const num = borrows.length;
    // const auId = book.authorId;
    if(!bookCountList[auId]){
      return bookCountList[auId] = num;
    } else{
      return bookCountList[auId] += num
    }
  })
const newList = [];
for(let i in bookCountList){
  const authorName = authors.find((author)=>author.id===Number(i));
  newList.push({"name":`${authorName.name.first} ${authorName.name.last}`, "count":bookCountList[i]})
}
//newList.sort((nameA, nameB)=>nameA.count > nameB.count?-1:1);
//return newList.slice(0,5);
return shorterTheArray(sortDescendArray(newList,'count'),5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
