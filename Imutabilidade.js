const user ={
    name:'Augusto',
    lastName:'Pontes Cruz e Mello'
};

function getUserWithFullName(user){
    return{
       ...user,
       fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);