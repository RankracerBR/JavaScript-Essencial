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

