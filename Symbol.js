const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos 
console.log('Symbol1 é igual a symbol2:', symbol1 === symbol2)

//Previnir conflito entre nomes e propriedades
const namesymbol1 = Symbol('name');
const namesymbol2 = Symbol('name');

const user = {
    [namesymbol1]: 'Augusto',
    [namesymbol2]: 'Outro nome',
    lastname: 'Pontes cruz e Mello'
}

console.log(user);

//Symbols criam propriedades que não são enumerables
for (const key in user) {
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]} `);
    }
}

console.log('Propriedades do objeto user:',Object.keys(user));
console.log('Valores das propriedades do objeto user:',Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP     : Symbol('UP'),
    DOWN   : Symbol('DOWN'),
    LEFT   : Symbol('LEFT'),
    RIGHT  : Symbol('RIGHT'),

};