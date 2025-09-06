let marks=85;
if(marks>=90)
{
    console.log("A+ grade")
}
else if(marks>=80)
{
    console.log("A grade")
}
else if(marks>=70)
{
    console.log("b grade")
}
else{
    console.log("fail")
}
let choice=3
switch(choice)
{
    case 1:
        console.log("A+ grade")
        break;
        case 2:
            console.log("A grade")
            break;
            case 3:
                console.log("b grade")
                break;
                case 4:
                    console.log("fail")
                    break;
}
let day=5
switch(day)
{
    case 1:
        console.log("monday")
        break;
        case 2:
        console.log("tuesday")
        break;
        case 3:
        console.log("wednesday")
        break;
        case 4:
        console.log("thursday")
        break;
        case 5:
        console.log("friday")
        break;
        case 6:
        console.log("saturday")
        break;
case 7:
        console.log("sunday")
        break;
}
let i,n=50;
for(i=1;i<n;i++)
{
    console.log(i)
}
 let j=1
 while(j<50)
{
console.log(j)
j++
}
k=1
do{
    console.log(k)
    k++
}while(k<5)
let colours=["red","blue","green"]
for(let i=0;i<colours.length;i++)
{
    console.log(colours[i])
}
for (color of colours)
{
    console.log(color)
}
let person={
    name:"sahithya",
    age:18,
    college:"jntugv"
}
for(let key in person)
{
    console.log(`${key} : ${person[key]}`)
}

for(let i=5;i>0;i--)
{
    if(i==3)
    {
        console.log("continue")
    }
    else if(i==2)
    {
        break;
        }

        console.log(i)
    
}