# Big O Notation

Prolems can have multiple solutions, Big O: Determines "best" solution for said problem.

Problem with time based performance measuring:

* Different machines record different times.
* Same machines record different times.
* Fast alogrithms speed measurements not precise enough.

Counting operations is more accurate.

## Description:

Formalized fuzzy counting

Formal way to talk about how the runtime of an algorithm grows as the inputs grows.

Describing the relationship of the input size with that of the time relative to said input

Big O tests the worst case scenario or the "Upper bound" for runtime

# Notation:

O(f(n))

* f(n) could be linear (f(n) = n) 
* f(n) could be quadratic (f(n) = n^2)
* f(n) could be constant (f(n) = 1) 
* f(n) could be something else

## Constants Don't Matter

* O(2n) => O(n)
* O(500) => O(1)
* O(13n^2) => O(n^2)


## Smaller Terms Don't Matter 
* O(n + 10) => O(n)
* O(1000n + 50) => O(n)
* O(n^2 + 5n + 8) => O(n^2)

## Shorthands
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, complexity is the length of the loop times complexity of inner loop


Time Complexity | Space Complexity
--------------- | --------------
Analysis of the runtime of an algorithm as the size of the input increases | How much additional memory do we need to allocate in order to run the code in an algorithm

## Auxiliary Space Complexity

Refers to the space required by the algorithm, NOT including the space taken up by the inputs.

### Rules of Thumb:
* Most primitives (booleans, numbers, undefined, null) are constant space
* Strings require O(n) space (n = String length)
* Reference types are generally O(n), n => length (for Arrays) or Number of Keys (for Objects)

## Log
Inverse of exponentiation

Sometimes big O expressions involve more complex mathematical expressions.

i.e: log<sub>2</sub>(8) = 3

log<sub>2</sub>(value) = exponent | 2<sup>exponent<sup> = value
----------------------------------|-----------------------------


## Rule of Thumb

Log of a number, roughly measures the number of times you can divide said number
by 2 **before you get a value that's less than or equal to one.**

(8 /2) 4
(4 /2) 2
(2 /2) 1

log(8) =3

1. Certain **Searching algorithms** have logarithmic time complexity
2. Efficient **Sorting Algorithms** involve logarithms
3. **Recursion** sometimes involves logarithmic space complexity
