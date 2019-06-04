// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memorize(fn){
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this,args);
        cache[args] = result;
        return result;
    };
}
function slowFib(n){
    if(n<2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}
const fib = memorize(slowFib);
module.exports = fib;

/*let result = 0;
    let temp = [0,1];
    if(n === 0){
        result = 0;
    }
    if(n === 1){
        result = 1;
    }
    for(let i=2;i<=n;i++){
        result = temp[0]+temp[1];
        temp[0]= temp[1];
        temp[1]= result;
    }
    return result;
*/

/*function fib(n) {

    if(n === 1){
        return 1;
    }
    if(n === 0){
        return 0;
    }
    if(n >= 2){
        return fib(n-2)+fib(n-1)
    }
    


}*/