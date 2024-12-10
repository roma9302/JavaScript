//number  1
function array_iter(arr, ind = arr.length) {
    if (ind === 0) {
        return 0;
    }
    
    console.log(arr[ind - 1]);  
    
    array_iter(arr, ind - 1);
}

array_iter([11, 4, 8, 6, 3]);


//number 2
function sum_iter(arg1) {
    if (arg1 < 10) {
        return arg1;
    }
    
    var sum = 0;
    while (arg1 > 0) {
        sum += arg1 % 10; 
        arg1 = Math.floor(arg1 / 10); 
    }
    return sum_iter(sum);
}

console.log(sum_iter(11177));

//number 3
function mul(n,m){
    return n*m
}

console.log(mul(3,3))

//number 4
function repeat(str = '', n = 2) {
    return str.repeat(n); 
}

console.log(repeat('fddggr', 3));

//number 5
function rgb(arg1=0,arg2=0,arg3=0) {
    return `rgb(${arg1},${arg2},${arg3})`; 
}

console.log(rgb(76,32))

//number 6
function operation(m, n, o) {
    return eval((`${m} ${o} ${n}`));
}

console.log(operation(4, 4, '**'));

//number 7
function mul(n,m){
    return n*m
}

function log(arg1){
    console.log(arg1)
}

function m(a,b){
    log(mul(a,b));
}

m(2,7)
