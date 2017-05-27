function factorialize(num) {
  if (num > 0) {
    for (var i = num-1; i > 0; i--) {
      num *= i;
    }
  } else {
    num = 1;
  }
  return num;
}

factorialize(5);
