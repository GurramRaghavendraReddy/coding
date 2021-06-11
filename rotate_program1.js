function rotate(arr,d,n){
    let div = Math.trunc(d%n);
    let second = arr.slice(0,div);
    let first = arr.slice(div,);
    console.log(first + "," + second );
}

let arr = [1,2,3,4,5];
let d = 2;
let n = arr.length;
rotate(arr,d,n)