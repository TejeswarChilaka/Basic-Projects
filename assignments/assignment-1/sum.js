
const sum = (n) => n * (n + 1) / 2;


// function sum(n) { 
//       return n * (n + 1) / 2; 
//     }

const sumSquare =(n) => (n * (n + 1) *(2 * n + 1)) / 6;
const sumCube = (n) => (n * (n + 1) / 2)*(n * (n + 1) / 2)


function operate(n,operation){
    return operation(n);
}

const resultSum = operate(2,sum)
const resultSumSquare = operate(2,sumSquare)
const resultSumCube = operate(2,sumCube)


document.write(resultSum+" ") 
document.write(resultSumSquare+" ")
document.write(resultSumCube)






/*
 function sum(n) { 
        return n * (n + 1) / 2; 
        }
    
function sumSquare(n) { 
    return ((n * (n + 1) *(2 * n + 1)) / 6); 
    } 
function sumCube(n) { 
    return (n * (n + 1) / 2)*(n * (n + 1) / 2); 
    } */
