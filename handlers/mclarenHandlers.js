export function mclarenRaceStartedHandler(event) {
    console.log(
        `McLaren: Race started at ${event.circuit}. Beginning tyre-management plan.`
    );
}

export function mclarenSafetyCarHandler(event) {
    console.log(
        `McLaren: Safety Car on lap ${event.lap}. Recalculating pit-stop strategy.`
    );
}

export function mclarenCrashHandler(event) {
    console.log(
        `McLaren: Crash reported at ${event.location}. Informing both drivers.`
    );
}

export function mclarenYellowFlagHandler(event) {
    console.log(
        `McLaren: Yellow flag in sector ${event.sector}. Drivers instructed to reduce speed.`
    );
}

export function mclarenRaceFinishedHandler(event) {
    console.log(
        `McLaren: Race complete. ${event.driver} finished in P${event.position}.`
    );
}