/**
 Dado un arreglo A, tenemos que encontrar el producto máximo posible con el subconjunto de
elementos presentes en el arreglo. El producto máximo puede ser solo uno de los elementos del
arreglo.
        Ejemplos:
        Input : a[] = -1, -1, -2, 4, 3
        Output : 24

        Explanation : Maximum product will be ( -2 * -1 * 4 * 3 ) = 24
        Input : a[] = -1, 0
        Output : 0

        Explanation : 0 (single element) is maximum product possible
        Input : a[] = 0, 0, 0
        Output : 0
 */
/**
    Si el número de elementos negativos es par, el resultado es, sencillamente, el
    producto de todos los elementos.
    
    Si el número de elementos negativos es impar, el resultado es la
    multiplicación de todos los elementos excepto el número negativo más
    grande.

    Si hay ceros, el resultado el producto de todos los números, excepto los ceros
    con una excepción. La excepción es cuadn hay un número negativo y todos
    los otros números son ceros. En este caso, el resultado es 0
 */

function maxProduct (arr) {
    if(arr.length == 0) {
        return;
    }
    if (arr.length == 1) {
        return arr[0];
    }
    let zeroes = 0;
    let negatives = 0;
    let maxNeg = -999999;
    let product = 1;
    for (num of arr) {
        if (num == 0) {
            zeroes++;
        } else if (num < 0) {
            negatives++;
            maxNeg = Math.max(maxNeg, num);
        } 
        product *= num;
    }
    if (zeroes == arr.length) {
        return 0;
    }
    if (negatives % 2 == 1) {
        if (
            negatives == 1 && 
            zeroes > 0 && 
            negatives + zeroes == arr.length
        ) {
            return 0;
        }
        product = product / maxNeg;
    }
    return product;
}

let arr = [-1, -1, -2, 4, 3];
console.log(maxProduct(arr))
arr = [-1, 0]
console.log(maxProduct(arr))
arr = [0, 0, 0]
console.log(maxProduct(arr))