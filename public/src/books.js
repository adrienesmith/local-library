// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const result = [];
  const outOnLoan = [];
  const hereOnShelves = [];

  books.forEach(book => {
    const borrows = book.borrows;
    const isBookHere = borrows.some(borrow => !borrow.returned);
    isBookHere ? outOnLoan.push(book) : hereOnShelves.push(book);
  });
  result.push(outOnLoan);
  result.push(hereOnShelves);
  return result;
}

function getBorrowersForBook(book, accounts) {
  const result = [];
  const allRecords = [];
  const borrows = book.borrows;

  borrows.map(borrow =>{
    const borrowId = borrow.id;
    const returned = borrow.returned;

    accounts.forEach(account =>{
      const accountId = account.id;
      if(accountId === borrowId){
        allRecords.push({...account, returned})
      }
    });
  });

  return addTenRecords(allRecords);
}

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
