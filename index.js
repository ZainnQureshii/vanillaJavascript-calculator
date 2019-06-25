var buttons = document.querySelectorAll('.btn');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    var currBtn = this;
    var currBtnValue = currBtn.innerHTML;
    var currSign = currBtnValue == '+' || currBtnValue == '-' || currBtnValue == '/' || currBtnValue == '*' || currBtnValue == '.';
    var currEqual = currBtnValue == '=';
    var square = currBtnValue == 'x2';
    var clear = currBtnValue == 'C';
    var del = currBtnValue == 'Del';
    var result = document.querySelector('.result');

    var semiResult =  result.innerHTML;
    var lastValue = semiResult.slice(-1)

    if (currSign) {
      if(lastValue == "+" || lastValue == "-" || lastValue == "/" || lastValue == "*") {
        result.innerHTML += '';
        var lastInnerHTML = result.innerHTML.slice(0, -1);
        result.innerHTML = lastInnerHTML + "" + currBtnValue;
      } else if(currBtnValue == ".") {
          if(semiResult.includes(".")) {
            console.log(semiResult.substr(0, semiResult.indexOf('+')[0]));
            result.innerHTML += '';
          } else {
            result.innerHTML += currBtnValue;
          }
      } else {
        result.innerHTML += currBtnValue;
      }
    } else if(square) {
        if(lastValue == "+" || lastValue == "-" || lastValue == "/" || lastValue == "*") {
          alert('Please Provide Another Value');
          return false;
        }
          var squareResult = result.innerHTML;
          var finalSquare = eval(squareResult)
          result.innerHTML = eval(finalSquare * finalSquare)
    } else if(del) {
        result.innerHTML = result.innerHTML.slice(0, -1);
    } else if(currEqual){
        if(lastValue == "+" || lastValue == "-" || lastValue == "/" || lastValue == "*") {
          alert('Please Provide Another Value');
          return false;
        } else if (result.innerHTML.slice(-1) == '.') {
            alert("Please Provide Valid Value");
            return false;
        }
        result.innerHTML = eval(result.innerHTML);
    } else if(clear) {
        result.innerHTML = '';
    } else {
        result.innerHTML += currBtnValue;
    }
  })
}
