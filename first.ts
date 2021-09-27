let age:number = 50;
let club: string = 'Real Madrid';
const isFamous: boolean =  false;
let famous: boolean;

function add (num1: number, num2: number){
    return num1 + num2;
}

add(3, 76);
add(45, 98);


interface player {
    club: string,
    name: string,
    salary: number,
    wife?: string,
    isPlaying: boolean
}

const messy: player = {
    name: 'messy',
    club: 'Real Madrid',
    salary: 45876438,
    wife:'some name',
    isPlaying: true
}

const ronaldo:player = {
    name:'Ronaldo',
    club:'liverpool',
    salary:'5100000',
    isPlaying:true

}

function getBonus (player : {salary: number}){
    return player.salary * 0.1;
}
const poorPlayer = {salary: 1000}
getBonus (messy)

function fullName (firstName: string, lastName: string):string{
    return firstName + ' '+ lastName;
     
}

const user = fullName()


