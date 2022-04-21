// const a = [1,2,4,53,423,2];
// const sum = a.reduce((previous,current)=>{
//     return previous + current;
// },0)
// console.log(sum);
const products=[
    {id:1,name:'alta',price:100},
    {id:2,name:'Chalta',price:200},
    {id:3,name:'khalt',price:300},
    {id:4,name:'bolta',price:400},
    {id:5,name:'malta',price:400}
];
const totalPrice = products.reduce((previous,current)=>{
   return previous+current.price;
},0)
console.log(totalPrice);