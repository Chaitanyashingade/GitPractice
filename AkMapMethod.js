let obj=[{
    id:1,
    name:"Chaitanya",
    salary:10000
},
{
    id:2,
    name:"UdayKiran",
    salary:20000
},
{
    id:3,
    name:"Avinash",
    salary:30000
},]


let result=obj.map((data ,index)=> data.salary*5)
console.log(result);
