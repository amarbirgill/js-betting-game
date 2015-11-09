$(function(){
  var startingCash = 100;
  var minBet = 5;
  var maxBet = 10;
  var minGuess = 1;
  var maxGuess = 10;

  $('#money').val(startingCash);
  $('#guess-button').on('click', guess);
  $('#reset-button').on('click', reset);

  function reset() {
    $('#money').val(startingCash);
    $('#guess').val(5);
    $('#bet').val(5);
    $('the-number').val('');
  }

  function guess(){
    if (checkValidValues()){
      alert("Invalid");
      return;
    }
    var randomNumber = Math.ceil(Math.random() * maxGuess);
    $('#the-number').val(randomNumber);

    profit = makeBet(randomNumber)
    currentMoney = parsInt($('#money').val(), 10);
  };

  function makeBet(randomNumber){
    bet = parsInt($('#bet').val(), 10);
    guess = parsInt($('#guess').val(), 10);
    var howClose = Math.abs(randomNumber - guess);
    switch(howClose){
      case 0: 
      return bet * 2;
      break;
      case 1:
      return 0;
      break;
      default:
      return 0 - bet;
      break;
    }
  };

  function checkValidValues(){
    bet = parsInt($('#bet').val(), 10);
    guess = parsInt($('#guess').val(), 10);
    money = parsInt($('#moeny').val(), 10);
    if ((bet <= money ) & (bet >= minBet) & (bet <= maxBet) & (guess >= minGuess) & (guess <= maxGuess)){
      return true;
    }
    return false;
  };
}); 