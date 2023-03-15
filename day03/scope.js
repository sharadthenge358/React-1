function sum(a,b){
    // function scope
    var result=a+b;
}
sum(4,5);
// this will throw reference error
{
    // block scope
}
if (true) {
    // block scope
}
for (var i = 1; i <=10 ; i++) {
    var z = 9;
    // block code
}
console.log("value of I",i);
console.log("Z::",z);
function dosomething(){
    // function scope
    var k=9;
console.log("k",k);

}
dosomething();