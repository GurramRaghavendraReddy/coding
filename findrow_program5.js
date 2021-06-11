function findRow(matrix){
    var row=0;
    var rowLength,colLength;
    if(matrix.length===0){
        return 0;
    }
    noOfRows = matrix.length;
    noOfCols = matrix[0].length;
    for(let i=0;i<noOfRows;i++){
        for(let j=0;j<noOfCols;j++){
            if(matrix[j][i]===1){
                return j;
            }
        }
    }
    return row;
}

let matrix=[[0,1,1,1], [0,0,1,1], [1,1,1,1],[0,0,0,0]]

console.log(findRow(matrix))