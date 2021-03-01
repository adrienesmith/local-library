// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// locates an author based on a given id
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

// located a book based on a given id
function findBookById(books, id) {
  return books.find(book => book.id === id);
}

// returns a new array, containing 2 arrays
// one with books in the library
// one with books that are out on loan
function partitionBooksByBorrowedStatus(books) {
  const result = [];
  const outOnLoan = [];
  const hereOnShelves = [];

  // loop through each book
  books.forEach(book => {
    const borrows = book.borrows;
    // checks to see if even 1 of the books is still out on loan
    const isBookHere = borrows.some(borrow => !borrow.returned);
    // if out on loan, push to outOnLoan arr
    // else push to hereOnShelves arr
    isBookHere ? outOnLoan.push(book) : hereOnShelves.push(book);
  });
  //add the 2 arrays to the main result array
  result.push(outOnLoan);
  result.push(hereOnShelves);
  return result;
}

// see which accounts have borrowed a given book
function getBorrowersForBook(book, accounts) {
  const result = [];
  const allRecords = [];
  const borrows = book.borrows;
  // loop through each borrow within the book create the borrowId and returned variables
  borrows.map(borrow =>{
    const borrowId = borrow.id;
    const returned = borrow.returned;
    // loop through each account
    accounts.forEach(account =>{
      const accountId = account.id;
      // if the accountId matches the borrowId, make an object containing 
      // the spread account object and the returned value, and push to result arr
      if(accountId === borrowId){
        allRecords.push({...account, returned})
      }
    });
  });
  // recommended to use result.slice(0, 10) rather than my for loop helper function
  return addTenRecords(allRecords);
}

// helper function to add only 10 records to an array
function addTenRecords(allRecords){
  const result = [];
  for (let i = 0; i < 10; i++){
    const oneRecord = allRecords[i];
    result.push(oneRecord);
  }
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
