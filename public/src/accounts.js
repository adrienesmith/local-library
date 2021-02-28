// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;

  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if (account.id === borrow.id) result ++;
    });
  });
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const accountId = account.id;

  books.forEach(book => {
    const borrows = book.borrows;
    const authorId = book.authorId;

    borrows.forEach(borrow =>{
      const borrowId = borrow.id;
      const returned = borrow.returned;
      
      if (borrowId === accountId && !returned){
        authors.forEach(author => {
          if (authorId === author.id){
            const finalObject = {...book, author};
            result.push(finalObject);
          }
        });
      }

    });
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
