// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// helper function to check item length
function checkLength(items){
  return items.length;
}

// helper function to return the first 5 items of an arr
function addFiveRecords(allRecords){
  const result = [];
  for (let i = 0; i < 5; i++){
    const oneRecord = allRecords[i];
    result.push(oneRecord);
  }
  return result;
}

// gets the total count of books in the library
function getTotalBooksCount(books) {
  return checkLength(books);
}

// gets the total count of all accounts in the library
function getTotalAccountsCount(accounts) {
  return checkLength(accounts);
}

// gets the count of all books currently checked out of the library
function getBooksBorrowedCount(books) {
  const returnedBooks = books.filter(book => {
    const borrows = book.borrows;
    return !borrows[0].returned;
  });
  return checkLength(returnedBooks);
}

// get the 5 most common genres among all books
function getMostCommonGenres(books) {
  // creates an array of all book genres
  const genres = books.map(book => book.genre);
  const genreCountsArray = [];
  // creates an object of the genre counts
  const genreCounts = genres.reduce((acc, genre) => {
    // checks to see if the genre already exists as a key
    // if it does, we add 1 to the value
    // the returned object is the spread accumulator
    return {...acc, [genre]: (acc[genre] || 0) + 1}
}, {});
  // loop through the genreCounts object to assign the genreCount key as the value of name
  // and the count key to the genreCount value
  for (let key in genreCounts){
    let genreObj = {name: key, count: genreCounts[key]};
    genreCountsArray.push(genreObj);
  }
  // sort by count in descending order
  const sorted = genreCountsArray.sort((countA, countB) => {
    return countB.count - countA.count;
  })
  // recommended to use sorted.slice(0, 5) here rather than the for loop helper function
  return addFiveRecords(sorted);
}

// get the 5 most popular books
function getMostPopularBooks(books) {
  let allRecords = [];
  // create a new array with objects that contain the book name and borrow count
  books.forEach(book => {
    const name = book.title;
    const count = book.borrows.length;
    const oneRecord = {name, count};
    allRecords.push(oneRecord);
  });
  // sort in descending order based on borrow count
  const allRecordsSorted = allRecords.sort((recordA, recordB) => {
    return recordB.count - recordA.count;
  });
  // recommended to use sorted.slice(0, 5) here rather than the for loop helper function
  return addFiveRecords(allRecordsSorted);
}

// get the 5 most popular authors
function getMostPopularAuthors(books, authors) {
  // reduce through the authors array, creating an object with the authorName and count of 0
  const authorArr = authors.reduce((acc, author) => {
    const {first, last} = author.name;
    const authorName = `${first} ${last}`
    const authorId = author.id;
    const authorObj = {name: authorName, count: 0};
    // loop through each book, checking to see if the authorId numbers match
    books.forEach(book => {
      const idNumBook = book.authorId;
      const borrows = book.borrows.length;
      if (authorId === idNumBook){
        // if the ids match, add the number of borrows for the matching book
        authorObj.count += borrows;
      }
    });
    // push the new authorObj into the acc arr
    acc.push(authorObj);
    return acc;
  }, []);
  // sort in descending order based on borrow count
  const sorted = authorArr.sort((authorA, authorB) => {
    return authorB.count - authorA.count;
  });
  // recommended to use sorted.slice(0, 5) here rather than the for loop helper function
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
