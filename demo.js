import { race } from "./src/race/currentRaceControl.js";

import { mercedesRaceStartedHandler, redBullRaceStartedHandler } from "./handlers/index.js";


race.subscribe("race:started", redBullRaceStartedHandler)
race.subscribe("race:started",mercedesRaceStartedHandler)

race.emit("race:started",{circuit:"Silverstone"})