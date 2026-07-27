# Handlers

This directory contains all event handlers used by the **Race Control Event Management System**. Each handler listens for a specific race event and performs the required action for its assigned module, such as Formula 1 teams, emergency services, race marshals, or TV broadcast control. Keeping handlers separated by responsibility makes the system easier to understand, maintain, and extend.

## Folder Structure

```text
handlers/
├── redBullHandlers.js
├── mercedesHandlers.js
├── ferrariHandlers.js
├── emergencyHandlers.js
├── marshalHandlers.js
├── tvControlHandlers.js
└── index.js
```

## Handler Groups

### `redBullHandlers.js`
Contains Red Bull Racing event handlers that manage race strategy and operational decisions during events such as race start, Safety Car deployments, rain, red flags, and race completion.

### `mercedesHandlers.js`
Provides Mercedes-specific handlers responsible for race monitoring, pit strategy decisions, weather responses, debris alerts, and processing the team's race result.

### `ferrariHandlers.js`
Implements Ferrari's event handling logic, including race strategy updates, Safety Car decisions, restart preparation, red flag procedures, and final race reporting.

### `emergencyHandlers.js`
Includes handlers for emergency scenarios such as crashes, fires, driver status updates, red flags, and ending emergency operations after the race.

### `marshalHandlers.js`
Contains handlers used by race marshals to manage on-track incidents, including crash response, debris removal, flag signaling, and confirming track readiness.

### `tvControlHandlers.js`
Manages the television broadcast by updating live graphics and coverage for race starts, incidents, Safety Car periods, flag conditions, and the final race classification.

## Central Export (`index.js`)

The `index.js` file acts as a single entry point for all handlers by re-exporting every handler module. This simplifies imports throughout the project and keeps the codebase organized.

## Handler Convention

All handlers follow a consistent design:

- Accept a `payload` object containing the event data.
- Handle one specific event with a single responsibility.
- Execute only the logic relevant to their assigned module.

