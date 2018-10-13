"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spacecraft = /** @class */ (function () {
    /* propulsor: string
    constructor(propulsor: string) {
        this.propulsor = propulsor
    } é igual a */
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    } // forma enxuta typescript
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
// export { Spacecraft, Containership }
