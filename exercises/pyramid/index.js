// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//recursion
function pyramid(n, row = 1, stair = '') {
    if(n < row){
        return;
    }
    if(2*n-1 === stair.length){
        console.log(stair);
        return pyramid(n,row+1);
    }
    if(stair.length >= n-row && stair.length < n+row-1){
        stair += '#';
    }else{
        stair += ' ';
    }
    pyramid(n,row,stair);
}
    


module.exports = pyramid;
//iteration
/*for(let row = 1; row<=n; row++){
    let stair = '';
    for(let col = 1; col<= 2*n-1; col++){
        if(col > n-row && col <= n+row-1){
            stair += '#';
        }else {stair += ' ';}
    }
    console.log(stair);
}*/

// repeat
/* const a = '#';
   const b = ' ';
   for(let i=1; i<=n; i++){
       console.log(b.repeat(n-i) + a.repeat(2*i-1) + b.repeat(n-i));
   }*/
