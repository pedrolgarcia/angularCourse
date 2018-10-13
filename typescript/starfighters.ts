import { Spacecraft, Containership } from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Containership { // estendendo classe e implementando interface
    cargoContainers: number // implementando método da interface

    constructor() {
        super('hyperspace')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace() { // reescrevendo método
        if(Math.random() >= 0.5) 
            super.jumpIntoHyperspace() // chamando o método da classe pai
        else 
            console.log('Failed to jump into hyperspace')
    }
}