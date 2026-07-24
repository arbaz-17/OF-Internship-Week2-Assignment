export function mercedesRaceStartedHandler(event) {
    console.log(
        `Mercedes: Race started at ${event.circuit}. Monitoring race pace.`
    );
}

export function mercedesSafetyCarHandler(event) {
    console.log(
        `Mercedes: Safety Car deployed on lap ${event.lap}. Evaluating a pit stop.`
    );
}

export function mercedesRainHandler(event) {
    const tyre =
        event.intensity === "heavy" ? "wet" : "intermediate";

    console.log(
        `Mercedes: Preparing ${tyre} tyres for rain in sector ${event.sector}.`
    );
}

export function mercedesDebrisHandler(event) {
    console.log(
        `Mercedes: Debris reported at ${event.location}. Warning both drivers.`
    );
}

export function mercedesRaceFinishedHandler(event) {
    console.log(
        `Mercedes: ${event.driver} finished the race in P${event.position}.`
    );
}