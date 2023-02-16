"use strict" // strict mode helps to create vivible errors 

//\funciton Declearation!
console.log(birth());
function birthYear(year){
    const age = 2023 - year;
    return age
}
console.log(birth());
const ageCalc = birthYear(1991);
console.log(ageCalc)


function birth(){
    return 2023 -1997
}


// function expression

const areaOfRectangle = function(lenght,breadth){
    return lenght * breadth
}
console.log( areaOfRectangle(3,3));
// arrow fucntion of same 
const areaRec = (lenght,breadth) => lenght*breadth;
console.log(areaRec(2,3));

// retirement caulator

const retirementCalc = (year) => {
    const age = 2023 - year;
    const retYearLeft = 65 - age;
    return retYearLeft
}
console.log(retirementCalc(2010));


const menR = function (len,bread){
    return len * bread
};
console.log(menR(2,3))




function cutFurit(fruit){
    return fruit * 8
}
function fruitProce(appleNumbers, orangeNumbers){
    const newApple = cutFurit(appleNumbers);
    const newOranges = cutFurit(orangeNumbers);
    return `I have used ${newApple} apples and ${newOranges} oranges for this juice`
}
console.log(fruitProce(3,2))

// Retirement Years Left Caculator
//  fucntion calling a fucntion

const ageCaulator = (birthYear) => 2023 - birthYear;

function retCac(birthYear, firstName ,LastName) {
    const age = ageCaulator(birthYear)
    const retLeft = 65 - age

    if(retLeft < 0){
        return `${firstName} has Retired ! 😎`
    }
   else{
    return `${firstName} has ${retLeft} years left 😍`
   }
}
console.log(retCac(1960, "Micheal", "Mike"))

// Gynamstic Challenge 😊


const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;
const aveKoalas = calcAverage(50,20,23);
const aveDolphis = calcAverage(50,20,23);

function checkwinner(aveDolphis, aveKoalas){
    if(aveDolphis > aveKoalas){
        return `Dolphin wins the Competition (${aveDolphis} vs ${aveKoalas})`
    }
    else if(aveDolphis < aveKoalas){
        return `Koalas wins the Competition (${aveKoalas} vs ${aveDolphis})`
    }
    else{
        return `No Winner (${aveKoalas} vs ${aveDolphis})`
    }
   
}
console.log(aveKoalas,aveDolphis);
console.log(checkwinner(aveDolphis, aveKoalas))


// Tip Caculator
const tipCac = function(amountGiven){
    return amountGiven >= 50 && amountGiven <= 300 ? amountGiven*0.15: amountGiven*0.10;
}
function tipGenerator(amount){
    return tipCac(amount);
    
}

// Tip calulator using an array of Data

const tipAmount = [125,555,444];
const tip = [tipGenerator(tipAmount[0]),tipGenerator(tipAmount[1]),tipGenerator(tipAmount[2]),]
const billTip = [tipAmount[0] + tip[0], tipAmount[1] + tip[1], tipAmount[2] + tip[2]]
console.log( tipAmount,tip,billTip)

// Object Data structure

const DeeUzed = {
    firstName: 'Uzoma',
    middleName: "alex",
    Occupation: "Web-Developer",
    birthYear:  1991,
    friends:["mike", "Tunde", "Rachela"," Funmi", "Lima"],
    Phd: false,
    
    // callAge: function(birthYear){
    //     return 2023 - birthYear
    // }

    // callAge: function() {
    //     return 2023 - this.birthYear;
    // }

    callAge: function() {
        this.age =  2023 - this.birthYear;
        return this.age;
    }, 

    ProfileSummary: function(){
        this.summary = `${this.firstName} was born in ${this.birthYear}, so he is ${this.callAge()} years old. his bet friend is ${DeeUzed.friends[2]} and he has ${this.Phd ? 'a' : 'no'} Phd Degree`
    
        return this.summary
    }
    
}

// const nameKey = "Name";
// console.log(DeeUzed['first' + nameKey]);

// const askQuestion = 
// prompt(`What do you waant to know about DeeUzed: firstName, middleName, age, Occupation`)
// if(DeeUzed[askQuestion]){
//     console.log(DeeUzed[askQuestion])
// }else {
//     console.log(`Wrong request`)
// }

DeeUzed.Location = 'Nigeria';
DeeUzed[`maritalStatus`] = "Married";
DeeUzed['HasDriversLicense'] = true;

console.log(DeeUzed.callAge())
console.log(DeeUzed.age)
console.log(DeeUzed.ProfileSummary())
console.log(DeeUzed.summary)


const Damilola = {
    furstName: 'Damilola',
    lastName:'Uzoma-Udoma',
    fullName: function(){
        this.fullName = `${Damilola.furstName} ${this.lastName}`
        return this.fullName
    },
    weight: 90,
    heigth: 1.9,
    BMI:function(){
        this.bmi = this.weight/(this.heigth ** 2)
        return this.bmi

    }



}
const Alexy = {
    furstName: 'Uzoma',
    lastName:'Udoma',
    fullName: function(){
        this.fullName = `${Alexy.furstName} ${this.lastName}`
        return this.fullName
    },
    weight: 70,
    heigth: 1.9,
    BMI:function(){
        this.bmi = this.weight/(this.heigth ** 2)
        return this.bmi

    }



}
console.log(Damilola.fullName());
console.log(Alexy.fullName());
console.log(Damilola.BMI())
       
const bmiChecker = (Damilola.BMI() > Alexy.BMI()) 
    ? `${Damilola.furstName} has BMI of ${Damilola.BMI()} which is greater than ${Alexy.fullName}` 
    : `${Alexy.furstName} has BMI of ${Alexy.BMI()} which is greater than ${Damilola.fullName}`;
console.log(bmiChecker);

for(let run = 1; run <= 10 ; run++){
    console.log(`This is lagos ${run}`)
}

const deUz = [
    'Uzoma',
    'Damilola',
    'Lagos',
    2022 - 1999,
    ['Mike', 'James', 'Hakeem'],
    true,
    'mike'
];

const newAr = []

for(let i = 0; i < deUz.length; i++) {
    // reading the deeZU array
    console.log(deUz[i], typeof deUz[i]);

    // filling a new array
    // newAr[i] = typeof deUz[i]
    newAr.push(typeof deUz[i])
}

console.log(newAr)


// Tip calulator using an array of Data

// const tipAmount = [125,555,444];
// const tip = [tipGenerator(tipAmount[0]),tipGenerator(tipAmount[1]),tipGenerator(tipAmount[2]),]
// const billTip = [tipAmount[0] + tip[0], tipAmount[1] + tip[1], tipAmount[2] + tip[2]]
// console.log( tipAmount,tip,billTip)


const bYear = [1992, 1993, 1995, 1998]

const age = []

for(let i = 0; i< bYear.length; i++){
    age.push(2023 - bYear[i])
}
console.log(age)

// important staments for loop are the continue and break statement
//  continue is to exit the current iteration loop and move to the next
// break is to completely terminate the whole loop
const deUzed = [
    'Uzoma',
    'Damilola',
    'Lagos',
    2022 - 1999,
    ['Mike', 'James', 'Hakeem'],
    true,
    'mike'
];
for(let i = 0; i < deUz.length; i++) {
    console.log(deUzed[i], typeof deUz[i]);
}
for(let i = deUzed.length-1; i >= 0 ; i--){
    console.log(deUzed[i])
}

// while Loop
let i = 0
 while(i < deUz.length){
    console.log(deUzed[i], typeof deUz[i]);
    i++
 }
//  while loop code 

let dice = Math.trunc( Math.random()*6)+1
console.log(dice)


//Project on Tips Caculator

const bills = [50,295,14,23,45,66,87,90,22,345,113,65,78,99,98]

const tips =[]
const total = []

const tipCalc = function(bill){
    return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
    
}

const sumTotal = function(bill){
    return tipCalc(bill) + bill
}

for(let i = 0; i<bills.length; i++){
    tips.push(tipCalc(bills[i]))
    total.push(sumTotal(bills[i]))
}

console.log(bills, tips, total)

// Given an array of one day temperatures of one day, calulate the temperaure amplitude
// Temperature amplitue is max tempt - min temp
// In the array is an error value that should be ignored!

const temperatures = [3, -2, -6, 7, 'Error', 9,5,9,8]

const minMax = function(temps){

    let max = temps[0];
    let min = temps[0];
    let sum = temps[0];

    for(let i = 0; i < temps.length; i++) {
       
        const currrentTemps = temps[i]

        if(typeof currrentTemps !== 'number') continue;
        
       
        if( currrentTemps > max) { 
            max = currrentTemps
        }
        if(currrentTemps < min){
            min = currrentTemps
        }
        
        sum += temps[i];
    }
    return {max, min,sum}
}
console.log(minMax(temperatures))



// Challenge 
// 

const data1 = [23,35,38]
const data2 = [17,16,28]

const printForecast = function(deg){
   
    for(let i = 0; i<deg.lenght; i++){

    }

}

