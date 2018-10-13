// Funções
let isEnoughToBeatMF = function (parsecs: number): boolean { // dizemos o tipo do parâmetro e o tipo do retorno
    return parsecs < 12
}
let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`) // o mesmo em arrow function
call('R2')

function inc(speed: number, inc: number = 1): number { // funções com valores padrões
    return speed + inc
}
console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)