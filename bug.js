function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct behavior
  }
  if (a === 0 || b === 0) {
    return 1; // Correct behavior
  }
  return a + b; //Incorrect behavior, should handle other cases
}