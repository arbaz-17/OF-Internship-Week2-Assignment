# Current Race Control

## Overview

The `currentRaceControl.js` file creates and exports the active race-control event manager used by the application demo.

It uses the `createRaceControlEventManager` factory function to create a race instance for the desired race.

```js
export const race = createRaceControlEventManager("Silverstone Grand Prix");
```

## Purpose

This file provides one shared race-control instance that can be imported by different parts of the application. All subscribers, emitted events, and one-time handlers registered through this instance belong to the same race.

Keeping the instance in a separate file also prevents the demo files from repeatedly creating new race managers.

## How It Works

The file:

1. Imports the race-control factory function.
2. Creates a race manager with the title `Silverstone Grand Prix`.
3. Exports the created instance as `race`.
4. Allows the same instance to be reused throughout the demo.

## Singleton-Like Behavior

This file demonstrates a lightweight form of the **Singleton Pattern**.

JavaScript modules are evaluated once and then cached. Because the race instance is created at the module level and exported, every module that imports `race` receives the same instance rather than creating a new one.

This is not a strict Singleton implementation with a dedicated class or instance-checking method, but it provides similar shared-instance behavior through the ES module system.

## Design Concepts

- **Factory Pattern** – The race instance is created using `createRaceControlEventManager`.
- **Singleton-Like Pattern** – One exported race instance is shared across the application.
- **ES Modules** – Imports the factory and exports the active race instance.
- **Shared State** – All demo components interact with the same event registry through the exported race manager.
