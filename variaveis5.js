const name = 'Augusto';

// não podemos alterar o valor
//name = 'Augusto'

const user = {
    name: 'Augusto'
};
//Mas se for d eum objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" par aoutro lugar
/*user = {
    name: 'Augusto'
}; */

const persons = ['Augusto','Pedro','Jennifer'];

//Podemos adicionar novos itens
persons.push('João');

//Podemos remover algum item
persons.shift();

//Podemos  alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações', persons);