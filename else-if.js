/*

if (condition) {
    //code
}else if (condtion) {
    //code
}
*/

const array = [2,3,4,5,6,8,10,15];

console.log('\nelse if');
array.forEach(item => {  //aqui só vai cair em uma condição específica pois tem o else if 
    if(item % 2 ===0){
        console.log(`O número ${item} é divisível por 2.`);
    } else if ( item % 3 === 0){
        console.log(`O número ${item} é divisível por 3.`);
    } else if(item % 5 === 0){
        console.log(`O número ${item} é divisível por 5.`);
    }
});

console.log('\nif');
array.forEach(item => { // aqui cada if vai mostrar se o valor é divisível por mais de um número
    if(item % 2 === 0){
        console.log(`O número ${item} é divisível por 2.`);
    }
    if(item % 3 === 0){
        console.log(`O número ${item} é divisível por 3`);
    }
    if(item % 5 === 0){
        console.log(`O número ${item} é divisível por 5.`);
    }
});