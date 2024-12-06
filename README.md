# JavaScript + operator unexpected behavior with numbers and strings
This example demonstrates an uncommon but easily encountered bug in JavaScript related to the '+' operator's behavior with numbers and strings.
The function `foo` is designed to add two numbers. However, it fails to handle cases where:
1. Only one argument is passed.
2. One of the arguments is a string. In this case, the '+' operator performs string concatenation instead of numerical addition.
The `bugSolution.js` file shows how to properly handle this situation using type checking and explicit type conversions.