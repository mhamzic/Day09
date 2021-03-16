// Write code below this line

function myDoWhile() {
  var myNumbers = "";
  var i = 0;
  do {
    myNumbers += i;
    if (i < 9) {
      myNumbers += ", ";
    }
    i++;
  } while (i < 10);

  return myNumbers;
}

// Write code above this line
console.log(myDoWhile());

// console.log(inverseWhile());

module.exports = myDoWhile;
