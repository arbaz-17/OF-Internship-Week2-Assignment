import { race } from "./src/race/currentRaceControl.js";
import { RACE_EVENTS } from "./raceEvents.js";
import { mercedesRaceStartedHandler, redBullRaceStartedHandler } from "./handlers/index.js";


race.subscribe(RACE_EVENTS.RACE_STARTED, redBullRaceStartedHandler)
race.subscribe(RACE_EVENTS.RACE_STARTED,mercedesRaceStartedHandler)

race.emit(RACE_EVENTS.RACE_STARTED,{circuit:"Silverstone"})