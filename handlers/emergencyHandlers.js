export function emergencyCrashHandler(event) {
    if (!event.medicalAssistanceRequired) {
        console.log(
            `Emergency Unit: Monitoring crash at ${event.location}.`
        );
        return;
    }

    console.log(
        `Emergency Unit: Medical response dispatched to ${event.location}.`
    );
}

export function emergencyRedFlagHandler(event) {
    console.log(
        `Emergency Unit: Red flag acknowledged. Emergency vehicles placed on standby.`
    );
}

export function emergencyFireHandler(event) {
    console.log(
        `Emergency Unit: Fire response dispatched for car ${event.carNumber} at ${event.location}.`
    );
}

export function emergencyDriverStatusHandler(event) {
    console.log(
        `Emergency Unit: Driver ${event.driver} status reported as "${event.status}".`
    );
}

