function foo(a, b) {
  // Check if both arguments are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    // Handle the case where arguments aren't numbers
    console.error('Error: Arguments must be numbers');
    return NaN; // Or throw an error
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1)); //Error: Arguments must be numbers NaN
console.log(foo(1, "2")); //Error: Arguments must be numbers NaN