# OF-Internship-Week2-Assignment
Week 2 assignment submissions and foundational tasks for the OptimusFox Internship Program.
# F1 Event Management and Notification System

## Overview

This project was created as part of a weekly internship assignment focused on JavaScript execution concepts and design patterns.

The assignment required building an **Event Management and Notification System** that supports:

- Subscribing handlers to events
- Unsubscribing handlers
- Emitting events with payload data
- Registering one-time handlers
- Supporting multiple handlers for the same event

To make the system practical and easier to understand, I used a **Formula 1 race-control analogy**. Race events such as crashes, rain, Safety Car deployments, and race completion notify different observers, including racing teams, marshals, emergency services, and TV control.

## What Was Created

The project includes:

- A reusable race-control event manager
- A shared race instance for the desired race grand prix
- Centralized race-event constants
- Separate handler modules for each observer group
- A demo that shows the complete event flow

## Project Structure

```text
project-root/
├── handlers/
│   ├── emergencyHandlers.js
│   ├── ferrariHandlers.js
│   ├── index.js
│   ├── marshalHandlers.js
│   ├── mercedesHandlers.js
│   ├── README.md
│   ├── redBullHandlers.js
│   └── tvControlHandlers.js
├── src/
│   ├── race/
│   │   ├── currentRaceControl.js
│   │   └── README.md
│   └── raceControl/
│       ├── createRaceControl.js
│       └── README.md
├── demo.js
├── raceEvents.js
└── README.md
```

## Core Components

### Race Control Event Manager

`src/raceControl/createRaceControl.js` contains the factory function that creates independent race event managers.

Each manager exposes the following API:

- `subscribe(event, handler)`
- `unsubscribe(event, handler)`
- `emit(event, payload)`
- `once(event, handler)`

The internal event registry is kept private through closures and uses a `Map` with a `Set` of handlers for each event.

### Current Race Instance

`src/race/currentRaceControl.js` creates and exports the shared race instance used by the demo.

```js
export const race =
  createRaceControlEventManager("Silverstone Grand Prix");
```

This provides lightweight **Singleton-like behavior**, because every module importing `race` receives the same module-level instance.

### Race Events

`raceEvents.js` defines the event names used throughout the system in one central object.

The available events include:

- Race started and finished
- Safety Car deployed and withdrawn
- Crash and debris reported
- Red and yellow flags declared
- Rain started
- Pit lane opened and closed
- Fire reported

Using constants keeps event names consistent and reduces the risk of spelling errors.

### Event Handlers

The `handlers` directory contains the observer functions that respond to race events.

Handlers are grouped by responsibility:

- Red Bull Racing
- Mercedes
- Ferrari
- Emergency services
- Race marshals
- TV control

The `handlers/index.js` file re-exports all handlers from one central location.

## Design Patterns and Concepts

This project demonstrates the following JavaScript concepts:

- **Observer Pattern** – Multiple handlers can subscribe and react to the same event.
- **Factory Pattern** – New independent race managers can be created when required.
- **Module Pattern through Closures** – Internal state is hidden while a public API is exposed.
- **Singleton-Like Pattern** – One race instance is shared through an ES module export.
- **Closures** – Public methods retain access to the private event registry.
- **Map and Set** – Events and unique handlers are stored efficiently.

## Running the Demo

The complete system demonstration is available in the root-level `demo.js` file.

The demo shows subscriptions, multiple handlers, event emission, cleanup functions, direct unsubscription, one-time handlers, payload delivery, and safe handling of unknown events.
