function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0;
  } else if (a === 0 || b === 0) {
    return 1;
  } else if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN; // Handle non-number inputs
  } else {
    return a + b; // Correct handling for other cases
  }
}