console.log("hello")


let x=6
let y=4

let result = x+y;
let name = "pedro";
let age = 15;
let h="hatdog"
console.log(result)


//if else
if(x>y){
    console.log(`the ${x} is greater than ${y}`);

}
else{
    console.log(`false`)
}

//array 
let arr= [3,4,5,6];


console.log(arr)

console.log(typeof arr )
console.log(`my name is ${name} and my age is ${age}`)

console.log(h.toLowerCase(h));
console.log(h.toUpperCase(h));
arr.push(10); //add to last of array
arr.unshift(9); // add to the first of array;
console.log(arr);
console.log(arr.indexOf(10))

arr.splice(0,1); // remove inside the array, (when to start, how many)
console.log(arr)

// object 

const car={
    carname: "mustang",
    model: 2020,
    color: "red",

}
console.log(car)
console.log(car.model)

console.log(`car brand: ${car.carname}`)
console.log(`car mode: ${car.model}`)
console.log(`car color: ${car.color}`)

//for loop
for(let i=0; i<arr.length; i++){
    console.log(i)
}


console.log("-----")
//while loop
let i=0;
while(i<6){
    console.log(i);
    i++;
}
// loop array object

const contact=[
{
    id: 1,
    firstname: "john",
    mobile: 0909
},
{
    id: 2,
    firstname: "jane",
    mobile: 0908
},
{
    id: 3,
    firstname: "jonhny",
    mobile: 0907
}
]

console.log(contact);
for(let i=0; i<contact.length;i++){

    console.log(contact[i].id)
    console.log(contact[i].firstname)
    console.log(contact[i].mobile)

    console.log(`contact id is : ${contact[i].id}`);
    console.log(`contact name is : ${contact[i].firstname}`);
    console.log(`contact mobile is : ${contact[i].mobile}`);
    }

    // function

    //old function

    function getsum(x,y){
        return x+y;
    }
    console.log( getsum(x,y) );

    //es6 new function

    let z= 15;
    const Getsum=(y,z)=>{
        return y+z;
    }
    console.log( Getsum(y,z) );

    //OOP class and constructor

    //class

    class Animal{
       
    constructor(aname,sound,action){
        this.aname= aname;
        this.sound = sound;
        this.action=action;
        
    }

    getanimalname(){
        return `${this.aname}`
    }

    }

    const animal1 = new Animal("cat,meow,catpunch");

console.log(animal1.getanimalname());

// counter

//logic 
//declare variable of count,
 //create a function that select a button
 //make process that decrease,reset or increase
 //update the count

let count = 0; //declare variable

const title = document.querySelector(".title");
const bg = document.querySelector(".box");



document.querySelector("#decrease").onclick=function(){
  count-=1; // minus 1
  document.querySelector("#count").innerHTML=count; //update the label
  title.innerText='Decreasing';
}

document.querySelector("#reset").onclick=function(){
    count=0; //reset the number
  document.querySelector("#count").innerHTML=count; //update the number
  title.innerText='Reset';
}

document.querySelector("#increase").onclick=function(){
    count+=1; // add 1 to number
  document.querySelector("#count").innerHTML=count;//update the number
  title.innerText='Increasing';
}


//change color to red
document.querySelector("#colorbtn").onclick=function(){
    document.body.style.backgroundColor="red";

}

