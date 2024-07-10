a=5;
var a=9;
console.log(a);
let b=20;
console.log(b);
{
    let b=90;
    console.log(b)
}
console.log(typeof(b));
var st='i am strong'
console.log(typeof(st));
var d=true;
var m;
console.log(typeof(m));
var arr1=['orange','apple',10]
console.log(arr1[0])
console.log(arr1.length);
arr1.push('pineapple');
console.log(arr1)
// Objects in Java script
let person={
   
    name:'mittu',
    age:20,
    location:'konchiravila'
}
console.log(person.age)
let arr2=[{ name:'mittu',
    age:20,
    location:'konchiravila'},
    { name:'ittu',
        age:21,
        location:'tvm'}
    ]
    console.log(arr2)
    console.log(arr2[1].location)
   function add(x,y){
    var sum=x+y;
    return(sum);
    
   }
  var p=add(20,21);
   console.log(p)
   let h=1;
   let j=h++;
   console.log(h);
   console.log(j);
   var e=20;
   var f='30';
  if (e>f) {
    console.log('e is greater than f')
    
  }
  else if(e===f)
  {
    console.log('e is equal to f')
  }
     else {
    console.log('e is less than f')
  }
  //looping 
  var array=[1,2,3,4,5]
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    for (const key in person) 
{
        console.log(person[key])
    }
   for (const i of array) {
    console.log(i)
    
   }
    
  }