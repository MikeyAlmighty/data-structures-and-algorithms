# How to improve algorithmic problem solving skills

* Devise - a plan for solving problems
* Master - common problem solving patterns

## Understand the Problem

* Can you restate the question in your own words?
* What are the inputs that go into the problem?
* What are the outputs that should come from the solution to the problem?
* Can the outputs be determined from the inputs? (i.e. Do I have enough Info to solve the problem)
* How should I label the important pieces of data that are part of the problem?

## Explore concrete examples 

Coming up with examples can help you understand the problem better.
Examples also provide sanity checks that your eventual solution works how it should.
(Kind of like test cases/user stories/unit tests)

Rule of thumb examples:
* Simple examples
* More complex examples
* Examples with Empty inputs
* Examples with Invalid inputs

### By Example (pun-intended):

Write a function which takes in a string and returns counts of each character
in the string.

charCount("aaaa") // {a: 4}

Is it case Sensitive? charCount("AaAa") // {a: 2, A:2}
What about spaces? charCount("Hello World")
Empty input? charCount()
Numbers? charCount("My phone number is 123545")
Maybe also show 0 count letters? (Modifies expected output) charCount("aaa") // {a: 3, b: 0,... z:0}


## Break It Down
Explicitly write out the steps you need to take.
(Forces you to think about the code before you write it)
(Don't have to fuss about language syntax)

## Solve or Simplify

Find the core difficulty
Temporarily ignore said difficulty
Write simplified solution
Then incorporate that difficulty back in

## Look back and refactor
Go back analyze, figure out what you could have improved
