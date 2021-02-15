/**
 * Te dan N actividades con sus tiempos de inicio (Si) y finalización (Fi).
Selecciona el número máximo de actividades que puede realizar una sola persona,
asumiendo que una persona solo puede trabajar en una sola actividad a la vez. 2
Ejemplo:
Input :
start[] = (1, 3, 0, 5, 8, 5)
finish[] = (2, 4, 6, 7, 9, 9)
Output : 4
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

function numActivities(arr) {
    let sorted = arr.sort((a, b) => (a.end > b.end) ? 1 : -1);
    console.log(sorted);
    // i mantiene referencia al la última actividad que seleccioné
    let i = 0;
    // we always select the first one; Its the one that ends earlier
    let res = 1;
    for(let j = 1; j < sorted.length; j++) {
        if(sorted[j].start >= sorted[i].end) 
        {// la nueva actividad debe de empezar después de 
        // que termine la última actividad
            console.log("I select: ");
            console.log(sorted[j])
            res++;
            i = j; // se actualiza la última act que seleccione
        }
    }
    return res;
}
console.log(numActivities(schedule))