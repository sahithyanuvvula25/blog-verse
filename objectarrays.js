let person={
    name:"sahithya",
    age:18
}
console.log(person.name)
console.log(person["name"])
//destructing assignment
const {name,age}=person;
console.log(name)
console.log(age)
let fruits=["banana","apple","mango"]
console.log(fruits[0])
let numbers=[1,2,3,4,5]
let num
let squares=numbers.map((num)=>num*num)
console.log(squares)

let evens=numbers.filter((num)=>num%2==0)
console.log(evens)
let sum=numbers.reduce((present,num)=>present+num,0)
console.log(sum)

let perso1=[{
       name:"sahi",
    marks:85
},{
    name:"sai",
    marks:75
},{

    name:"saketh",
    marks:65
},
{
    name:"sahithya",
    marks:55
}]
for(let p of perso1)
{
    console.log(p)
}
let min=0
let x=0
let nam=""
for (p of perso1)
{x=p.marks

if(p>min)
{
    min=perso1[name]

}

}
console.log(`min is for ${min}`)