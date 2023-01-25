function FakeUser(){
    this.name = 'Augusto';
    this.lastname = 'Pontes';
}

//Não factory
const user = new FakeUser();

function FakeUser2(customProperties){
    return {
        name:'Augusto',
        lastName: 'Pontes',
        ...customProperties
    }
}

//Factory
const user2 = FakeUser2({name:'Custom Name', age:19});
console.log(user2)


//singleton global
var SETTINGS = {
    api:'http>//localhost',
    trackJsToken: '12345'
}

//Singleton local
function MyApp(){
    if(!MyApp.instance){
        MyApp.instance = this;
    }
    return MyApp.instance;
}

//Esse pattern singleton faz com que no const p quando ele for declaro uma vez, mesmo que você tente declarar sempre vai manter-se a primeira declaração
function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({name:'Augusto'});

const p2 = Pessoa.call({name:'Custom Name'});

console.log(p);

console.log(p2);


//Decorator
let loggedIn = false;

function callIfAuthenticated(fn){
    return !!loggedIn && fn();
}

function sum(a, b){
    return a + b;
}

console.log(callIfAuthenticated(() => sum(2,3)));
loggedIn = true;
console.log(callIfAuthenticated(() => sum(2,3)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum(2,3)));

function readonly(traget,name,descriptor){
    descriptor.writable = false;
    return descriptor;
}

class Job {
    //@readonly
    //title(){ return 'CEO'}
}

class Observable{
    constructor(){
        this.observables = [];
    }
    subscribe(fn){
        this.observables.push(fn);
    }

    notify(data){
    this.observables.forEach(fn => fn(data));
}
    unsubscribe(fn){
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');

//Modeule 

//Antigo
(function($){
    // your plugin here
})(jQuery);

//Novo (ES6)

class Person {
    constructor(name){
        this.name = name;
    }
}

export default Person;

//Utilizar Person

import Person from './models/person';

let name = 'default';

function getName(){
    return name;
}

function setName(newName) {
    name = newName;
}

models.exports = {
    getName,
    setName
};

