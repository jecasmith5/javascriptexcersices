var account=[
  {accountNumber:"A042718",accountBalance:500.00},
  {accountNumber:"A042719",accountBalance: 1000.00}
];
var balance=account.accountBalance;
var number=account.accountNumber;
console.log(balance);
console.log(number);


// function account(){
//   this.number="";
//   this.balance="";
// }
function deposit(x){
  if(x > balance){
    console.log("deposit can not be made");
  }else{
    balance += x;
    console.log('your balance is' + " " + balance);
  }

}
deposit(400.00);


// A bank that holds client’s information:
// account number;
// balance

// A set of clients where each can:
// hold money of their own;
// deposit money into the bank (to any account);
// retrieve money from the bank (from personal account only);
// view current balance in bank (from personal account only)
// A client cannot deposit more money than what it has;
// A client cannot retrieve more money that what is in its account;
// All financial information must be private
