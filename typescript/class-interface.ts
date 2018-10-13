import { MillenniumFalcon } from './starfighters'
import { Spacecraft, Containership } from './base-ships'

import * as _ from 'lodash' // importando tudo no namespace _ do lodash
console.log(_.pad('Typescript Examples', 40, '='))

let ship = new Spacecraft('hyperspace')
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)