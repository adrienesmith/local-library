// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// find the account based on the given id number 
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

// sort all accounts based on the account holder last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
}

// get the amount of times a given account has made a borrow
function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  // loop through the borrow record for each book
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      // increment the result by 1 if the id in the borrow matches the account id
      if (account.id === borrow.id) result ++;
    });
  });
  return result;
}

// my solution
// see which books a given account currently has borrowed
function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const accountId = account.id;
  // loop though each book to create the borrows and authorId variables
  books.forEach(book => {
    const borrows = book.borrows;
    const authorId = book.authorId;
    // loop through each borrow to created the borrowId and returned variables
    borrows.forEach(borrow =>{
      const borrowId = borrow.id;
      const returned = borrow.returned;
      // check to see if the borrowId matches the accountId
      // and check to see if returned is false
      if (borrowId === accountId && !returned){
        // loop through each author to check for a match to the authorId variable
        authors.forEach(author => {
          if (authorId === author.id){
            // when a match is found, create a new object that 
            // includes the spread book object and the author object
            const finalObject = {...book, author};
            result.push(finalObject);
          }
        });
      }

    });
  });
  return result;
}

// recommended solution
// still loops 3 times, but with advanced methods rather than forEach()
/*
function getBooksPossessedByAccount(account, books, authors) {
const { id } = account; // id = account.id
// filter through books for matching id's
const checkedOutBooks = books.filter((book) => book.borrows[0].id === id); 
// for each book that matches id's
const newBooks = checkedOutBooks.map((book) => { 
  // pull out the first one with matching author id's
  const authored = authors.find((author) => author.id === book.authorId); 
  // run the map again with the next book while combining the book object with matching author object
  return { ...book, author: authored }; 
});
return newBooks;
}
*/

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
