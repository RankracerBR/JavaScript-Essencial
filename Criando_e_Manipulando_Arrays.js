const arr = [1,2,3];
const arr2 = new Array(1,2,3);


const persons = Array.of('John','Cris','Jenny');
console.log(persons)

const numberAndStrings = Array.of(1,2,'strings','texto');
console.log(numberAndStrings);

const arr3 = Array(3);
console.log(arr3)
// [empty x 3]
const arr4 = Array(3,2);
console.log(arr4)
//[3,2]

//node list
/*const divs = document.querySelectorAll('div');
const divArray = Array.from(divs);
const arr5 = Array.from(divs);          
console.log(arr5)
*/

//pop
const frutas = ['melancia','banana'];
const frutasLength = frutas.push('acerola');
console.log(frutasLength);
console.log(frutas);

const arr6 =  ['banana','melancia','abacate'];
const removedItem = arr6.pop();
console.log(removedItem);
//abacate
console.log(arr6);
//['banana', 'melancia']

const arr7 = ['banana','melancia','abacate'];
const arrLength = arr7.unshift('acerola');
console.log(arrLength);
//4
console.log(arr7);
// ['acerola','banana','melancia','abacate'];

const arr8 = ['banan','melancia','abacate'];
const removedItem2 = arr.shift();
console.log(removedItem2);
// 'banana'
console.log(arr8);
//['melancia','abacate'];

const salgados = ['coxinha','kibe','empada'];
const alimentos = frutas.concat(salgados);
console.log(alimentos);

const arr9 = [1,2,3,4,5];
arr9.slice(0, 2);
// [1,2]
arr9.slice(2);
// [3,4,5]
arr9.slice(-1);
//[5]
arr9.slice(-3);
//[3,4,5]

const arr10 = [1,2,3,4,5];
arr10.splice(2);
//[3,4,5]
console.log(arr10);
//[1,2]
arr.splice(0,0,'first');
//[]
console.log(arr10);
//['first',1,2]