// Euler problem 1
// ===============

function multiples(num) {
  var sum = 0;
  for (i = 0;i < num; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Euler problem 2
// ===============
