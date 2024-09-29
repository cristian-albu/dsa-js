/*
Project: Task Management System with User Roles
Overview
You’ll build a task management system where users can create, assign, and manage tasks. Different user roles (e.g., Admin, Manager, Employee) will have different permissions and functionalities. This project will include task tracking, user role management, and activity logging.

Key Features
Base Classes: User and Task

Define a User class with properties like username, role, and methods to create tasks and view tasks.
Define a Task class with properties like title, description, status, priority, and methods to update task status.
Inheritance for User Roles

Create subclasses for user roles like Admin, Manager, and Employee that inherit from User and override methods to reflect specific permissions (e.g., Admin can delete any task, Manager can assign tasks, Employee can only view tasks).
Encapsulation

Encapsulate the properties of tasks and users, ensuring that sensitive data is not directly accessible.
Use getter and setter methods for managing attributes like task status.
Polymorphism

Implement polymorphic behavior for methods that vary by user role. For instance, an Admin's createTask method might allow for more parameters compared to an Employee's.
Activity Logging

Implement a logging system that records actions taken by users, such as creating or completing tasks. This can be a separate class that tracks changes and maintains a history.
Task Assignment and Notification

Implement functionality for tasks to be assigned to users and notify them when a task is assigned or updated.
*/
