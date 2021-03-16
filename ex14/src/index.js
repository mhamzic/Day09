// Write code below this line

function myForLoop1() {
  var evenNumbers = "";
  for (var i = 0; i < 10; i += 2) {
    evenNumbers += i;
    if (i < 8) {
      evenNumbers += ", ";
    }
  }
  return evenNumbers;
}

function myForLoop2() {
  var evenReverseNumbers = "";
  for (var i = 8; i >= 0; i -= 2) {
    evenReverseNumbers += i;
    if (i > 0) {
      evenReverseNumbers += ", ";
    }
  }
  return evenReverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());

// Write code above this line

module.exports = { myForLoop1, myForLoop2 };
