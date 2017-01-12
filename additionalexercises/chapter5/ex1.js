function MyBank(){ //create bank
  var bank={};
  function Account(balance){ //create account
    var _balance=balance;
    this.getBalance=function(){
      return _balance;//account balance
    };
    this.deposit = function(money){
      _balance += money;//deposit
    };
    this.withdraw=function(money){
      _balance -= money;
    };
  }
    function AddClient(accountNumber,cash){
      var _cash=cash;
      var _accountNumber = accountNumber;
      bank[accountNumber] = new Account(0);//creates new account for client

      this.deposit = function (clientAccount,money){
      //deposit to account
      if(_cash>money){
        bank[clientAccount].deposit(money);
        console.log("Deposit sucessful");// can not deposit more

      }else {
        console.warn("Deposit can not be made");// can not deposit more
      }
    }
}
      this.withdraw = function (money){
        if (bank[_accountNumber].getBalance() > money){
        bank[_accountNumber].withdraw(money);
         _cash += money;
        console.log("withdraw sucessful");
      }else{
        console.log("Insufficient Funds!");
      }
    };

   this.cash = function () {
     return _cash;
   };
   this.balance = function () {
     return bank[_accountNumber].getBalance();
    };
    this.AddClient = AddClient;
}
var central = new MyBank();
var jess = new central.AddClient(1234,20000);
var lex = new central.AddClient(5989,50000);

jess.deposit(1234,200);
jess.deposit(5989,200);
//only deposit is working
jess.withdraw(200);
jess.cash();
