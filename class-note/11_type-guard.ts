interface TypeGuardDev {
    name : string;
    skill : string;
}

interface TypeGuardPerson {
    name : string;
    age : number;
}

function introduce() : TypeGuardDev | TypeGuardPerson {
    return { name : 'Tony', age : 33, skill : 'Iron Making'}
}

var tony = introduce();

// console.log(tony.skill);

// if((tony as TypeGuardDev).skill) {
//     console.log((tony as TypeGuardDev).skill);
// } else if((tony as TypeGuardPerson).age) {
//     console.log((tony as TypeGuardPerson).age);
// }

function isDeveloper(target : TypeGuardDev | TypeGuardPerson) : target is TypeGuardDev {
    return (target as TypeGuardDev).skill !== undefined;
}

if(isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}