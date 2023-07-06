## JavaScript Unit Test

### Section 01

##### Types of tests:
- Unit Testing 
  - If all building blocks works, the overall app works
- Integration Testing
  - Even if all units work standalone, the combination could fail
- End-to-End (E2E) Testing
  - Real ursers use your app and its features, not individual units

`All of those type of tests should be combined when is doing tests.`

##### The Testing Pyramid

- E2E Tests
- Integration Tests
- Unit Tests

#### Test-Driven Development (TDD)

A framework / philosophy for writing tests

1. Write a failing test first
2. Implement the code to make the test succeed
3. Refactor

#### Course steps
1. Getting started
2. Project Setup & Required Tools
3. Testing Fundamentals
4. Writing Good Tests
5. Advanced Testing Concepts
6. Mocks & Spies
7. Diving Deeper into Mocks & Spies
8. Tests & The DOM

### Section 02
- Adjusting the Development Environment
  - Required Tools
  - An Example Setup
  - Alternatives

#### Automated Tests
- Test Runner
  - Runs your tests (i.e, the testing code)
  - Automatically detects testing code
  - Displays results
  - e.g., Jest, Karma
  - `Expect results`
- Assertion Library
  - Used to define expected outcomes
  - Checks whether expectations are met
  - Supports all kinds of expectations and modes (sync / async)
  - e.g., Jest, Chai

`ECMAScript on Jest have a experimental support an alternative is Vitest`

### Section 03

#### The Basics
- Understanding Unit Testing Fundamentals
  - Creating Unit Tests
  - AAA - Arrange, Act, Assert
  - What To Test & Organizing Tests

**How it works?**
Write the test function that the first argument is the description of what the test will do and the second one is the test itself.

**Example:**
```javascript
import {it} from 'vitest'

it('the description', () => {})

```

#### The AAA Pattern - Arrange, Act, Assert
- Arrange: Define the testing environment and values
- Act: Run the actual code / function that should be tested
- Assert: Evaluate the produced value / result and compare it to the expected value / result

`Keep Your Tests Simple!`

Writing good tests is an iterative process

*Note*
Technically, expect() _*does not*_ return _*true*_ or _*false*_.
Instead, it throws an error, if the expection is not met.
The test runner treats thrown errors as _*failed*_ tests and tests that do _*not throw*_ as _*passed*_.

It's ok to write more than one test with the same result, but it can be arranged in the same test to avoid repetition.

### Section 04

Important: **ONLY TEST YOUR CODE**

#### How to write good tests
Follow **A**rrange-**A**ct-**A**ssert

- Only test **one thing**
- Focus on essence of a test when arranging
- Keep your number of assertions ("expects") **low**

Splitting functions for easier testing and better code.