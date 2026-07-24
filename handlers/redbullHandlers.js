export function redBullRaceStartedHandler(event) {
    console.log(
        `Red Bull: Race started at ${event.circuit}. Monitoring both cars.`
    );
}

export function redBullSafetyCarHandler(event) {
    console.log(
        `Red Bull: Safety Car deployed on lap ${event.lap}. Preparing a possible double-stack pit stop.`
    );
}

export function redBullRainHandler(event) {
    console.log(
        `Red Bull: ${event.intensity} rain reported in sector ${event.sector}. Checking tyre temperatures.`
    );
}

export function redBullRedFlagHandler(event) {
    console.log(
        `Red Bull: Red flag declared because of ${event.reason}. Both drivers must return to the pit lane.`
    );
}

export function redBullRaceFinishedHandler(event) {
    console.log(
        `Red Bull: Race finished. Best finishing position: P${event.position}.`
    );
}