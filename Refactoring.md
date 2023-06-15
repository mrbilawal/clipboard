# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The implemented refactoring follows the concept of sepration of concerns which means that seprate the perticular functionality in a particular fucntion. That enhance the readability of code and reduce the code complexity. 

1: getCandidate function implements the logic of Creating or returning the candidate based upon the event which have the partition key if ther partition key exits then return that candidate other generate the hash of that candidate

2: encryptCandidate generate the has of given candiate and return thier hash value according to the length provided 
3: deterministicPartitionKey uses both the fucntions "getCandidate" and "encryptCandidate" to return ther candidate for the partition key.
