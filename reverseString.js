function reverseString(str) {
  var array = str.split("");
  var arrayReversed = array.reverse();
  var newStr = arrayReversed.join("");
  return newStr;
}

reverseString("hello");
