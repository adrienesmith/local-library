// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function checkLength(items){
  return items.length;
}

function addFiveRecords(allRecords){
  const result = [];
  for (let i = 0; i < 5; i++){
    const oneRecord = allRecords[i];
    result.push(oneRecord);
  }
  return result;
}

function getTotalBooksCount(books) {
  return checkLength(books);
}

function getTotalAccountsCount(accounts) {
  return checkLength(accounts);
}

function getBooksBorrowedCount(books) {
  const returnedBooks = books.filter(book => {
    const borrows = book.borrows;
    return !borrows[0].returned;
  });
  return checkLength(returnedBooks);
}

function getMostCommonGenres(books) {
  const genres = books.map(book => book.genre);
  const genreCountsArray = [];
  const genreCounts = genres.reduce((acc, genre) => {
    return {...acc, [genre]: (acc[genre] || 0) + 1}
}, {});
  for (let key in genreCounts){
    let genreObj = {name: key, count: genreCounts[key]};
    genreCountsArray.push(genreObj);
  }
  const sorted = genreCountsArray.sort((countA, countB) => {
    return countB.count - countA.count;
  })
  return addFiveRecords(sorted);
}

function getMostPopularBooks(books) {
  let allRecords = [];
  books.forEach(book => {
    const name = book.title;
    const count = book.borrows.length;
    const oneRecord = {name, count};
    allRecords.push(oneRecord);
  });
  const allRecordsSorted = allRecords.sort((recordA, recordB) => {
    return recordB.count - recordA.count;
  });
  return addFiveRecords(allRecordsSorted);
}

function getMostPopularAuthors(books, authors) {
  const authorArr = authors.reduce((acc, author) => {
    const {first, last} = author.name;
    const authorName = `${first} ${last}`
    const authorId = author.id;
    const authorObj = {name: authorName, count: 0};
    books.forEach(book => {
      const idNumBook = book.authorId;
      const borrows = book.borrows.length;
      if (authorId === idNumBook){
        authorObj.count += borrows;
      }
    });
    acc.push(authorObj);
    return acc;
  }, []);
  const sorted = authorArr.sort((authorA, authorB) => {
    return authorB.count - authorA.count;
  });
  return addFiveRecords(sorted);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
