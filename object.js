var person={
  name: "wambui Kinyua",
  age: 16,
  gender: "female",
  hobbies:["dancing","reading", "nature trails", "cooking"],
  sibling:{
    name:"mwangi Kinyua",
    age:13,}
};
 
 console.log(person.age);

 person.isAwesome= true;
 console.log(person);
 person.favouriteColour= "Yellow";
 person.eyeColour= "brown";
 console.log(person);

 delete person.eyeColour;
 console.log(person)
console.log(person.sibling.name)

var friends=[{
  name: "Kiro",
  age:15

   },
   {
    name:"Patty",
    age:17,
   },
   {
     name:"Sandy",
     age:14,

   }

]
console.log(person.friends[0])