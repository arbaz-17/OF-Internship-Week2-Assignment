export function marshalCrashHandler(event) {
    console.log(
        `Marshals: Attending crash at ${event.location}.`
    );
}

export function marshalDebrisHandler(event) {
    console.log(
        `Marshals: Clearing ${event.debrisType} from ${event.location}.`
    );
}

export function marshalYellowFlagHandler(event) {
    console.log(
        `Marshals: Displaying yellow flags in sector ${event.sector}.`
    );
}

export function marshalRedFlagHandler(event) {
    console.log(
        `Marshals: Displaying red flags around the circuit because of ${event.reason}.`
    );
}

export function marshalSafetyCarWithdrawnHandler(event) {
    console.log(
        `Marshals: Safety Car withdrawn. Track status is ${event.trackStatus}.`
    );
}