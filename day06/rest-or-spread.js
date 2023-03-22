
const numbers=[2,4,5,7];

const [first,...restNumbers]=numbers;
console.log("restNumbers:",restNumbers);

const obj1={
    temp1:"34",
    Fname:"azhar",
    Lname:"shaikh",
    height:5.6,
    temp2:"546"

};

// in array case
const {temp1,temp2,...person}=obj1;
console.log(person);

const obj2=obj1;
obj2.color="fair";
console.log("obj2",obj2);
console.log("obj1",obj1);

const newArray=[...numbers];
newArray.push(8);
console.log("newarray",newArray);