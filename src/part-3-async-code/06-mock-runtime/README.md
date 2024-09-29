# Mock JavaScript Runtime

1. Call Stack
   Definition: The call stack is a data structure that keeps track of function calls in a program. It follows the Last In, First Out (LIFO) principle.
   Requirements:
   Simulate a stack structure to hold function calls.
   Push a function onto the stack when it is called and pop it off when it completes.
   Log the current state of the call stack each time a function is pushed or popped.
2. Event Loop
   Definition: The event loop is responsible for managing the execution of code, collecting and processing events, and executing queued sub-tasks (macrotasks and microtasks).
   Requirements:
   Create an event loop mechanism that continuously checks if there are tasks in the microtask queue or the macrotask queue.
   Ensure microtasks are processed before macrotasks. When the call stack is empty, the event loop should first process all microtasks, then move on to macrotasks.
3. Macrotasks
   Definition: Macrotasks are larger, more complex tasks scheduled to run at a later time, commonly created using functions like setTimeout() and setInterval().
   Requirements:
   Implement a queue specifically for macrotasks.
   Allow macrotasks to be scheduled and ensure they are executed after all microtasks have completed.
   Use a mechanism (like setTimeout) to delay the execution of macrotasks until the next tick of the event loop.
4. Microtasks
   Definition: Microtasks are smaller tasks that need to be executed as soon as possible after the currently executing script has finished. They include tasks created by Promise.then(), MutationObserver, and process.nextTick() in Node.js.
   Requirements:
   Implement a separate queue for microtasks.
   Ensure that microtasks are executed immediately after the call stack is empty, before any macrotasks.
   Allow for the scheduling of microtasks and track their execution order.
5. Task Execution and Logging
   Definition: Each task (macrotask or microtask) should be executed in a controlled manner, and the execution should be logged to understand the flow of the program.
   Requirements:
   Implement a method to execute a task and manage the call stack during this execution.
   Log each task execution, including what tasks are currently in the call stack and what has just completed.
   Include error handling to catch exceptions thrown by tasks, ensuring that an error in one task does not halt the execution of subsequent tasks.
6. Additional Features for Complexity
   Error Handling: Implement try/catch blocks around task executions to manage any errors without crashing the runtime.
   Task Cancellation: Allow for a mechanism to cancel scheduled macrotasks or microtasks.
   Simulated Delay: Introduce a way to simulate delay in macrotask execution to better mimic real-world scenarios.
   Nested Asynchronous Calls: Implement a mechanism to handle nested calls where a macrotask schedules new microtasks and macrotasks, and observe the order of execution.

### Example Use Cases

To fully realize the capabilities of your mock runtime, consider implementing the following use cases:

- Simple Function Calls: Schedule several functions as macrotasks and microtasks to see how they are executed in relation to each other.
- Promise Resolution: Use Promises to create microtasks and examine their execution order compared to macrotasks.
- Event Simulation: Simulate an event-driven environment where multiple events might trigger different tasks, showcasing the event loop in action.
  Error Simulation: Introduce a function that throws an error to see how the runtime handles exceptions and continues executing other tasks.

Important notes:

- Research how the browser and the node runtime works.
- Implement all the above but give them new names. Promise could be Oath or something.
- Use the native functionality
