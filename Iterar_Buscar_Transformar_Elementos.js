const arr = [1,2,3,4,5];

arr.forEach((value, index, arr) =>{
    console.log(`${index}: ${value}, ${arr}`);
});

const arr2 = [1,2,3,4,5];
console.log(arr2.map(value => value * 2));
//[2,4,6,8,10]

const arr3 = [1,2,[3,4]];
console.log(arr3.flat());
//[1,2,3,4]

const idade = [20,34,[35,60,[70,40]]];
const newIdade = idade.flat(2);
console.log(newIdade);

const arr4 = [1,2,3,4];
console.log(arr4.flatMap(value => [value * 2]));
//[2,4,6,8]
console.log(arr4.flatMap(value => [[value * 2]]));
//[[2], [4], [6], [8]]

const arr5 = [1,2,3,4];
const arrIterator = arr5.keys();
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

const arr6 = [1,2,3,4];
const arrIterator2 = arr6.values();
console.log(`\n`);
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());

const arr7 = [1,2,3,4];
const arrIterator3 = arr7.entries();
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());

const arr8 = [1,2,3,4];
const firstGreaterThanTwo = arr8.find(value => value > 2);
console.log(firstGreaterThanTwo);

const arr9 = [1,2,3,4];
const firstGreaterThanTwo_ = arr9.findIndex(value => value > 2);
console.log(firstGreaterThanTwo);//aqui retorna a posição do valor no array

const arr10 = [1,2,3,4];
const allValuesGreaterThanTwo = arr10.filter(value => value > 2);
console.log(allValuesGreaterThanTwo);

const arr11 = [1,3,3,4,3];
const firstIndexOfItem = arr11.indexOf(3);
console.log(firstIndexOfItem); //retorna o primeiro indice passado no indeOf

const arr12 = [1,3,3,4,3];
const lasIndexOfItem = arr11.lastIndexOf(3);
console.log(lasIndexOfItem); // retorna o último indice passado no lastIndexOf

const arr13 = [1,3,3,4,3]; 
const hasItemOne = arr13.includes(1); //verifica se o indice existe no array
// true
const hasItemTwo = arr13.includes(2);
//false

const arr14 = [1,3,3,4,3];
const hasSomeEvenNumber = arr14.some(value => value % 2 === 0);
//true

const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}

];
students.some(student => student.grade >= 7);
students.find(student => student.grade >= 7);
students.findIndex(student => student.grade >= 7);
students.every(student => student.grade >= 7);
students.find(student => student.grade < 7);
students.sort((current, next) => current.grade - next.grade); //ordena os elementos de acordo com a condição
students.reduce((studentsNames,student) => studentsNames += student.name + ' ','');
//"John Jenny Peter"

const arr15 = [1,3,3,4,3];
const allEvenNumbers = arr.every(value => value % 2 === 0);
//false

const arr16 = [1,2,3,4,5];
arr16.reverse();
//[5,4,3,2,1]

const arr17 = [1,2,3,4,5];
arr17.join('-');
//"1-2-3-4-5"

const arr18 = [1,2,3,4,5];
arr18.reduce((total, value) => total += value, 0) / arr18.length// total começa na posição 0 e o value vai pegando cada valor e somando
                                                         //o length aqui vê a média      
