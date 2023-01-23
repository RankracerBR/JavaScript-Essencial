"use strict"

/*function Pessoa(name){
    this.name = name;
}

const p = new Pessoa('Augusto');
console.log(p);
*/
/*
function Pessoa(name){
    this.name = name;
    return {
        name: 'Teste'
    };
}
const p2 = new Pessoa('Augusto');
*/
/*
function Animal(qtdePatas){
    this.qtdePatas = qtdePatas;
    this.movimentar = function() { }
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function () {
        console.log("Au! au!");
    }

}
const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
*/

/*
function Animal() { }

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log('Au! au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
console.log(pug);
console.log(pitbull);
*/

/*
class Person{
    constructor(name){
        this.name = name;
    }
}

class PessoaF extends Person {
    constructor(name, cpf){
        super(name);
        this.cpf = cpf;
    }
}
*/
class Animal {
    constructor(){
        this.qtdePatas = 0;
    }
    movimentar(){}
}

class Cachorro extends Animal{
    constructor(morde){
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }
    latir(){
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);


function Person(intialName){
    let name = intialName;

    this.getName = function(){
        return name;
    }
    this.setName = function(newName){
        name = newName;
    }
}

const p = new Person('Augusto');

console.log(p);

p.getName();

p.name;

p.setName('Pontes');
p.getName();


class Person2{
    #name = '';

    constructor(initialName){
        this.#name = initialName;
    }
    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}

 console.log(p);
//Person {}

p.getName();
//Guilherme

p.name;
//undefined
 
p.setName('Pontes');
p.getName();
//Pontes


function Person3() {}

Person3.walk = function() {
    console.log('walking...');
}

console.log(Person.walk());
// "walking..."


class Person4 {
    static walk(){
        console.log('walking...');      
    }
}

console.log(Person3.walk());
//"Walking...";