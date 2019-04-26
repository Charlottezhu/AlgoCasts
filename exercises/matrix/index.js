// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    var result = new Array();
    for(let i = 0; i<n; i++){
        result[i] = new Array();
    }
    let start_row = 0;
    let end_row = n-1;
    let start_col = 0;
    let end_col = n-1;
    let count = 1;
    while(start_row<=end_row && start_col<=end_col){
        if(start_col ===end_col){
            result[start_row][start_col] = count;
            break;
        }
        for(let i=start_col;i<=end_col;i++){
            result[start_row][i] = count;
            count = count + 1;
        }
        start_row += 1;
        for(let i=start_row;i<=end_row;i++){
            result[i][end_col] = count;
            count = count + 1;
        }
        end_col -= 1;
        for(let i=end_col;i>=start_col;i--){
            result[end_row][i] = count;
            count = count + 1;
        }
        end_row -= 1;
        for(let i=end_row;i>=start_row;i--){
            result[i][start_col] = count;
            count = count + 1;
        }
        start_col += 1;
    }
    return result;
}

module.exports = matrix;
