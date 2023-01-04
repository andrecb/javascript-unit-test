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
2. Impement the code to make the test succeed
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

`ECMAScript on Jest have a experimental support`
`Alternative: Vitest`

### Section 03

#### The Basics
- Understanding Unit Testing Fundamentals
  - Creating Unit Tests
  - AAA - Arrange, Act, Assert
  - What To Test & Organizing Tests

**How it works?**
`Write the test function that the first argument is the description of what the test will do and the second one is the test itself.`

**Example:**
```javascript
import {it} from 'vitest'

it('the description', () => {})

```