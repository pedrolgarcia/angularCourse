"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var starfighters_1 = require("./starfighters");
var base_ships_1 = require("./base-ships");
var _ = __importStar(require("lodash")); // importando tudo no namespace _ do lodash
console.log(_.pad('Typescript Examples', 40, '='));
var ship = new base_ships_1.Spacecraft('hyperspace');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
