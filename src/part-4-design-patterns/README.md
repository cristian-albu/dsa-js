# Part 4: Design patterns

Design patterns are typical solutions to commonly occurring problems in software design. These patterns provide standardized approaches to solving specific issues in object-oriented programming (OOP) and other programming paradigms.

### 1. Creational Design Patterns

Creational patterns are concerned with the process of object creation. They help make the creation process more flexible and reusable.

- **Singleton**: Ensures that a class has only one instance and provides a global point of access to it. `Example: A logging system where you need to have exactly one instance throughout the application.`
- **Factory Method**: Defines an interface for creating an object but lets subclasses alter the type of objects that will be created. `Example: A shape factory that creates different shapes (circle, square) based on input.`
- **Abstract Factory**: Provides an interface for creating families of related or dependent objects without specifying their concrete classes. `Example: A GUI toolkit where you can create windows, buttons, and scrollbars, but the actual creation depends on the underlying platform.`
- **Builder**: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations. `Example: Constructing a car object step by step (engine, wheels, seats) but building different models.`
- **Prototype**: Creates new objects by copying an existing object (prototype) rather than creating new instances from scratch. `Example: A game where units (e.g., soldiers) can be cloned to quickly produce new, similar units. `

### 2. Structural Design Patterns

Structural patterns are concerned with the composition of classes and objects to form larger structures, ensuring that they work together effectively.

- **Adapter (Wrapper)**: Converts one interface into another that a client expects. It allows classes with incompatible interfaces to work together. `Example: Adapting a European plug to work with an American socket.`
- **Bridge**: Decouples an abstraction from its implementation so that the two can vary independently. `Example: A Shape abstraction with Circle and Square that can be drawn using different rendering methods (like vector or raster graphics).`
- **Composite**: Composes objects into tree structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects uniformly. `Example: A file system where files and directories are treated the same way.`
- **Decorator**: Allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class.`Example: Adding scrollbars to a window or adding frosting to a cake.`
- **Facade**: Provides a simplified interface to a complex subsystem, making it easier to use.`Example: A HomeTheaterFacade class that simplifies interactions with subsystems like a DVD player, projector, and sound system.`
- **Flyweight**: Reduces the cost of creating and managing a large number of similar objects by sharing common parts of the state among many objects. `Example: Text rendering, where each character shares the same font and style instead of creating individual objects.`
- **Proxy**: Provides a surrogate or placeholder for another object to control access to it. `Example: A proxy for a remote service or a lazy-loading proxy for an expensive object. `

### 3. Behavioral Design Patterns

Behavioral patterns are concerned with communication between objects, focusing on how they interact and the responsibilities they have.

- **Chain of Responsibility**: Passes a request along a chain of handlers. Each handler can either handle the request or pass it on to the next handler in the chain.`Example: A logging system that passes log entries to different handlers like a file, console, or network logger.`
- **Command**: Encapsulates a request as an object, allowing for parameterization of clients with different requests, queuing of requests, and logging of request operations.`Example: A command pattern for handling undo/redo operations in a text editor.`
- **Interpreter**: Defines a representation for a language’s grammar and an interpreter to deal with this grammar.`Example: A simple calculator that interprets mathematical expressions.`
- **Iterator**: Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.`Example: Iterating over a collection like a list or array.`
- **Mediator**: Defines an object that encapsulates how a set of objects interact. It promotes loose coupling by preventing objects from referring to each other explicitly.`Example: A chat room where participants communicate through a central mediator (the chat room itself).`
- **Memento**: Allows an object to capture and restore its internal state without violating encapsulation.`Example: Saving the state of a game to allow undo or restore functionality.`
- **Observer**: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.`Example: A newspaper subscription system where subscribers are notified when a new edition is released.`
- **State**: Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.`Example: A vending machine that changes behavior based on its current state (idle, dispensing product, out of stock).`
- **Strategy**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. The strategy pattern lets the algorithm vary independently from the clients that use it.`Example: A sorting class that can use different algorithms (e.g., merge sort, quicksort) based on the input.`
- **Template Method**: Defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It allows subclasses to redefine certain steps of an algorithm without changing its structure.`Example: A class for making coffee where the overall process is the same but steps like brewing can be customized.`
- **Visitor**: Represents an operation to be performed on the elements of an object structure. Visitor allows you to define a new operation without changing the classes of the elements on which it operates.`Example: A tax calculator that applies different rules for calculating tax based on the type of object (e.g., food, electronics).`

### 4. Concurrency Design Patterns

These are patterns used in multi-threaded or parallel programming environments.

- **Thread Pool**: Manages a pool of worker threads, allowing for reuse of threads for multiple tasks rather than creating and destroying threads for each task.`Example: A web server that maintains a thread pool to handle incoming requests.`
- **Producer-Consumer**: Separates the work of producing and consuming data by using a shared buffer or queue between producer and consumer threads.`Example: A messaging system where producers add messages to a queue and consumers process those messages.`
- **Observer (Event Listener)**: A variant for concurrent systems where observers (listeners) are notified asynchronously about changes in a subject.`Example: A real-time stock market application where changes in stock prices trigger updates to client applications.`

## Methodology and structure:

1. Read the book [JavaScript Design Patterns](/files/Javascript%20Design%20Patterns.pdf)
2. Fill the files for each pattern with a code example. Mock what you need to replicate an realistic environment.
