function soma(a){
    return function(b){
        return a + b;
    }
    
}

const soma2 = soma(2);

console.log(soma(2));
console.log(soma(3));
console.log(soma(4));
console.log(soma(5));