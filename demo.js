import { race } from "./src/race/currentRaceControl.js";
import { RACE_EVENTS } from "./raceEvents.js";

import {
    redBullRaceStartedHandler,
    redBullSafetyCarHandler,
    redBullRainHandler,
    redBullRaceFinishedHandler,

    mercedesRaceStartedHandler,
    mercedesSafetyCarHandler,
    mercedesRainHandler,
    mercedesRaceFinishedHandler,

    ferrariSafetyCarHandler,

    emergencyCrashHandler,
    marshalCrashHandler,
    marshalDebrisHandler,

    tvRaceStartedHandler,
    tvSafetyCarHandler,
    tvCrashHandler,
    tvRaceFinishedHandler,
} from "./handlers/index.js";

console.log("===================================");
console.log(`F1 EVENT SYSTEM: ${race.race_title}`);
console.log("===================================");

/*
 * 1. Subscribe observers
 */

// Race start observers
race.subscribe(
    RACE_EVENTS.RACE_STARTED,
    redBullRaceStartedHandler
);

race.subscribe(
    RACE_EVENTS.RACE_STARTED,
    mercedesRaceStartedHandler
);

race.subscribe(
    RACE_EVENTS.RACE_STARTED,
    tvRaceStartedHandler
);

// Safety Car observers
race.subscribe(
    RACE_EVENTS.SAFETY_CAR_DEPLOYED,
    redBullSafetyCarHandler
);

const stopMercedesSafetyCarNotifications = race.subscribe(
    RACE_EVENTS.SAFETY_CAR_DEPLOYED,
    mercedesSafetyCarHandler
);

race.subscribe(
    RACE_EVENTS.SAFETY_CAR_DEPLOYED,
    ferrariSafetyCarHandler
);


race.subscribe(
    RACE_EVENTS.SAFETY_CAR_DEPLOYED,
    tvSafetyCarHandler
);

// Rain observers
race.subscribe(
    RACE_EVENTS.RAIN_STARTED,
    redBullRainHandler
);

race.subscribe(
    RACE_EVENTS.RAIN_STARTED,
    mercedesRainHandler
);

// Crash observers
race.subscribe(
    RACE_EVENTS.CRASH_REPORTED,
    emergencyCrashHandler
);

race.subscribe(
    RACE_EVENTS.CRASH_REPORTED,
    marshalCrashHandler
);

race.subscribe(
    RACE_EVENTS.CRASH_REPORTED,
    tvCrashHandler
);

// Debris observer
race.subscribe(
    RACE_EVENTS.DEBRIS_REPORTED,
    marshalDebrisHandler
);

// A race-finished announcement should run only once.
race.once(
    RACE_EVENTS.RACE_FINISHED,
    tvRaceFinishedHandler
);

race.subscribe(
    RACE_EVENTS.RACE_FINISHED,
    redBullRaceFinishedHandler
);

race.subscribe(
    RACE_EVENTS.RACE_FINISHED,
    mercedesRaceFinishedHandler
);

/*
 * 2. Start the race
 */

console.log("\n--- 1. RACE STARTED ---");

race.emit(RACE_EVENTS.RACE_STARTED, {
    circuit: "Silverstone",
    totalLaps: 52,
    weather: "dry",
    startTime: "14:00",
});

/*
 * 3. Rain begins
 */

console.log("\n--- 2. RAIN STARTED ---");

race.emit(RACE_EVENTS.RAIN_STARTED, {
    circuit: "Silverstone",
    lap: 12,
    intensity: "light",
    sector: 2,
});

/*
 * 4. A crash occurs
 */

console.log("\n--- 3. CRASH REPORTED ---");

race.emit(RACE_EVENTS.CRASH_REPORTED, {
    circuit: "Silverstone",
    lap: 18,
    carNumber: 27,
    driver: "Driver 27",
    location: "Turn 7",
    severity: "high",
    medicalAssistanceRequired: true,
});

/*
 * 5. Debris is found
 */

console.log("\n--- 4. DEBRIS REPORTED ---");

race.emit(RACE_EVENTS.DEBRIS_REPORTED, {
    circuit: "Silverstone",
    lap: 18,
    location: "Turn 7",
    debrisType: "front-wing",
    trackObstruction: true,
});

/*
 * 6. Safety Car is deployed
 */

console.log("\n--- 5. SAFETY CAR DEPLOYED ---");

race.emit(RACE_EVENTS.SAFETY_CAR_DEPLOYED, {
    circuit: "Silverstone",
    lap: 19,
    reason: "Crash and debris at Turn 7",
    sector: 2,
});

/*
 * 7. Remove only Mercedes from future Safety Car notifications.
 *
 * subscribe() returned this cleanup function.
 */

console.log(
    "\nMercedes unsubscribes from Safety Car notifications."
);

stopMercedesSafetyCarNotifications();

/*
 * 8. Safety Car is deployed again.
 *
 * Mercedes should not react this time.
 */

console.log("\n--- 6. SECOND SAFETY CAR DEPLOYMENT ---");

race.emit(RACE_EVENTS.SAFETY_CAR_DEPLOYED, {
    circuit: "Silverstone",
    lap: 35,
    reason: "Stopped car at Turn 3",
    sector: 1,
});

/*
 * 9. Demonstrate direct unsubscribe().
 */

console.log(
    "\nRed Bull unsubscribes from rain notifications."
);

const wasRedBullRemoved = race.unsubscribe(
    RACE_EVENTS.RAIN_STARTED,
    redBullRainHandler
);

console.log(
    `Red Bull rain handler removed: ${wasRedBullRemoved}`
);

console.log("\n--- 7. RAIN STARTED AGAIN ---");

race.emit(RACE_EVENTS.RAIN_STARTED, {
    circuit: "Silverstone",
    lap: 40,
    intensity: "heavy",
    sector: 3,
});

/*
 * 10. Finish the race
 */

const raceResult = {
    circuit: "Silverstone",
    winner: "Driver 1",
    winningTeam: "Red Bull",
    driver: "Driver 1",
    position: 1,
    totalLaps: 52,
    finishTime: "15:32",
};

console.log("\n--- 8. RACE FINISHED ---");

race.emit(
    RACE_EVENTS.RACE_FINISHED,
    raceResult
);

/*
 * Emit race:finished again to demonstrate once().
 *
 * The TV handler should not run again, while normal subscribers will.
 */

console.log(
    "\n--- 9. RACE FINISHED EMITTED AGAIN ---"
);

race.emit(
    RACE_EVENTS.RACE_FINISHED,
    raceResult
);

/*
 * 11. Unknown events safely do nothing.
 */

console.log("\n--- 10. UNKNOWN EVENT ---");

race.emit("driver:celebrating", {
    driver: "Driver 1",
});

console.log("Unknown event was ignored safely.");

console.log("\n===================================");
console.log("DEMO COMPLETED");
console.log("===================================");