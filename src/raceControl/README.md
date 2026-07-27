# Race Control Event Manager

## Overview

The **Race Control Event Manager** is the core component of the Event Management and Notification System. It is implemented as a **factory function** that creates an independent event manager for a specific race. Each instance maintains its own collection of events and handlers, allowing multiple races to operate without sharing state.

The implementation follows the **Factory**, **Module**, **Observer** design patterns while using JavaScript closures to encapsulate internal data.

---

## Key Features

- Subscribe handlers to specific events.
- Unsubscribe previously registered handlers.
- Emit events with optional payload data.
- Register one-time event handlers using `once()`.
- Support multiple handlers for the same event.
- Create isolated event manager instances for different races.

---

## How It Works

The event manager stores event subscriptions using a `Map`, where each event name is associated with a `Set` of handler functions. This structure provides efficient event lookup while preventing duplicate handler registrations.

A closure keeps the internal event registry private, exposing only the public methods required to interact with the event system.

---

## Public API

| Method | Description |
|--------|-------------|
| `subscribe(event, handler)` | Registers a handler for the specified event. |
| `unsubscribe(event, handler)` | Removes a previously registered handler. |
| `emit(event, payload)` | Executes all handlers subscribed to the specified event. |
| `once(event, handler)` | Registers a handler that is automatically removed after its first execution. |
| `race_title` | Stores the name of the race associated with the event manager instance. |

---

## Design Concepts

This implementation demonstrates several concepts covered during the internship:

- **Factory Pattern** – Creates independent event manager instances for different races.
- **Module Pattern (via Closures)** – Uses closures to encapsulate the internal event registry, exposing only the public API while keeping implementation details private.
- **Observer Pattern** – Enables components to subscribe to and respond to events.
- **Closures** – Encapsulate the internal event registry and preserve private state.
- **Private State** – Prevents direct access to the event registry from outside the module.
- **Map & Set** – Provide efficient event storage and ensure handlers remain unique.
