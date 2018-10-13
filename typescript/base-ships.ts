export class Spacecraft { // criando uma classe es-2015
    /* propulsor: string
    constructor(propulsor: string) {
        this.propulsor = propulsor
    } é igual a */
    constructor(public propulsor: string) {}  // forma enxuta typescript

    jumpIntoHyperspace() { // método, não precisa do function
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

export interface Containership { // definindo interface - contrato entre as classes
    cargoContainers: number
}

// export { Spacecraft, Containership }