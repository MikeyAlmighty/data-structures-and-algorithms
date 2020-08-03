## Recursion

A process ( a function in our case ) that calls itself.

In order for a function to be rucursive: 
* Recursive call with different Input 
* Base Case

### Pure recursion
* For Arrays use slice, ..., concat that make copies of arrays instead of mutation.
* Strings are immutable, so need to use slice, substring to make copies.
* For Objects use Object.assign() or ... to make a copy of said object.

