/**
 * Un gerente de hotel debe procesar N reservas anticipadas de habitaciones para la
próxima temporada. Su hotel tiene K habitaciones. Las reservas contienen una
fecha de llegada y una fecha de salida. Quiere saber si hay suficientes
habitaciones en el hotel para satisfacer la demanda. 3
 */

class Slot {
    constructor(start, end){
        this.start = start ? start : 0;
        this.end = end ? end : 0;
    }
}

let schedule = [
    new Slot(1,2),
    new Slot(5,9),
    new Slot(3,4),
    new Slot(0,6),
    new Slot(8,9),
    new Slot(5,7)
]

// Arrivals :   [1 3 5]
// Departures : [2 6 8]
// K: 1

function reservations(arrivals, departures, k) {
    arrivals = arrivals.sort();
    departures = departures.sort();
    let i = 0;
    let j = 0;
    let current = 0;
    let required = 0;
    // arrivals = [1, 2, 3];
    // departures = [ 4, 4, 4];
    while ( i < arrivals.length && j < departures.length) {
        if (arrivals[i] < departures[j]) { // un nuevo huesped, o hay un overlap
            current++; // 1
            required = Math.max(current, required); // 1
            i++; // 1
        }
        else { // ya se fue el huesped pasado
            current--;
            j++;
        }
    }
    while (i < arrivals.length) { // por si acabo antes de correr cualquiera de los dos
        current++;
        required = Math.max(current, required);
        i++;
    }
    while (j < departures.length) {
        current--;
        j++;
    }
    return k >= required;
    
}
let arrivals = [1, 2, 2];
let departures = [ 4, 3, 4];
let k = 2; 

console.log(reservations(arrivals, departures, k))