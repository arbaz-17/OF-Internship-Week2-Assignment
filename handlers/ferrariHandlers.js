export function ferrariRaceStartedHandler(event) {
    console.log(
        `Ferrari: Race started at ${event.circuit}. Protecting track position.`
    );
}

export function ferrariSafetyCarHandler(event) {
    console.log(
        `Ferrari: Safety Car on lap ${event.lap}. Comparing pit stop against staying out.`
    );
}

export function ferrariSafetyCarWithdrawnHandler(event) {
    console.log(
        `Ferrari: Safety Car withdrawn. Preparing drivers for restart on lap ${event.restartLap}.`
    );
}

export function ferrariRedFlagHandler(event) {
    console.log(
        `Ferrari: Red flag declared. Reviewing tyres and car setup during suspension.`
    );
}

export function ferrariRaceFinishedHandler(event) {
    console.log(
        `Ferrari: Race finished. ${event.driver} recorded position P${event.position}.`
    );
}