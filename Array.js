const user = ['Augusto','Pedro','Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Augusto',
        age: 19,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.Man
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
];
//Retorna a quantidade de items de um array
console.log('Items:', persons.length);

//Verificar se é array
console.log('A variável persons é um array:',Array.isArray(persons));

//Iterar os items do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\n Nova lista com homens:', mens);

//Retorna um novo
const personWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
})

console.log('\nPessoas com a adição do course>', personWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) =>{
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas',totalAge);

//Juntando operações
const totalEvenAges = persons 
                        .filter(person => person.age % 2 === 0)
                        .reduce((age,person) => {
                            age += person.age
                            return age;
                        }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par',totalEvenAges);