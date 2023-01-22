class Account {
  constructor(username) {
    this.username = username;
    this.balance = 100;
  }
  commit(transaction) {
    this.balance += transaction.value;
  }
}

class Withdrawal {
  // Pass in the account that the withdrawal this for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  get value() {
    return -this.amount;
  }
}

class Deposit {
  // Pass in the account that the deposit this for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  get value() {
    return this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

const t1 = new Withdrawal(50.25, myAccount);
myAccount.commit(t1);
console.log('Transaction 1:', t1);

const t2 = new Withdrawal(9.99, myAccount);
myAccount.commit(t2);
console.log('Transaction 2:', t2);

const t3 = new Deposit(120.00, myAccount);
myAccount.commit(t3);
console.log('Transaction 3:', t3);

console.log('Balance:', myAccount.balance);
