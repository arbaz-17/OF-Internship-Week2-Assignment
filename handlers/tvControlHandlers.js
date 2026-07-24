// handlers/tvControlHandlers.js

export function tvRaceStartedHandler(payload) {
    console.log(
        `TV Control: Live broadcast started for ${payload.circuit}. ` +
        `${payload.totalLaps} laps scheduled.`
    );
}

export function tvSafetyCarHandler(payload) {
    console.log(
        `TV Control: Showing Safety Car graphic on lap ${payload.lap}. ` +
        `Reason: ${payload.reason}.`
    );
}

export function tvCrashHandler(payload) {
    console.log(
        `TV Control: Switching cameras to ${payload.location}. ` +
        `Incident involves car ${payload.carNumber}.`
    );
}

export function tvYellowFlagHandler(payload) {
    console.log(
        `TV Control: Displaying yellow-flag warning for sector ${payload.sector}.`
    );
}

export function tvRedFlagHandler(payload) {
    console.log(
        `TV Control: Displaying red-flag graphic. ` +
        `Race suspended because of ${payload.reason}.`
    );
}

export function tvRaceFinishedHandler(payload) {
    console.log(
        `TV Control: Showing final classification. ` +
        `${payload.winner} wins the ${payload.circuit} race.`
    );
}