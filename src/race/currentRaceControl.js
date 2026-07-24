import createRaceControlEventManager from "../raceControl/createRaceControl.js";
import { redbullSafetyCar } from "../../handlers/redbullHandlers.js";


export const race = createRaceControlEventManager()

race.subscribe("race:started",redbullSafetyCar)

race.emit("race:started",{lap:50})

