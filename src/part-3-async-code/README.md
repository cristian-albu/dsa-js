# Part 3: Async code

Asynchronous code refers to a programming paradigm that allows a program to execute tasks concurrently, without blocking the execution flow while waiting for a task to complete. This is particularly useful in situations where operations may take an unpredictable amount of time, such as network requests, file I/O, or timers.

Key Concepts of Asynchronous Code

- **Non-blocking Behavior**:

  In asynchronous programming, the execution of code doesn’t pause while waiting for tasks to finish. Instead, the program can continue executing other code. For example, while waiting for a web request to complete, the program can handle user input or perform other tasks.

- **Callbacks**:

  A common way to handle asynchronous code is through callbacks, which are functions passed as arguments to be executed later, once the asynchronous task is complete.

- **Promises**:

  Promises provide a cleaner alternative to callbacks, allowing you to represent asynchronous operations as objects that can be in one of three states: pending, fulfilled, or rejected.

- **Async/Await**:

  async and await are syntactic sugar built on top of Promises, making asynchronous code easier to read and write. The async keyword is used to define an asynchronous function, while await is used to pause the execution until the Promise is resolved.

## Methodology and structure:

1. Do the 6 exercises
2. Use the async methods alongside some best async code best practices such as error handling, concurrency, parallelism, debouncing, throttling, fallbacks, cleanups, limits, etc.
3. Where you can mock things that are not directly async related you should. If you can do it in the terminal.
