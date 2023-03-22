function init(){
    var name="mozilla";// the name is a local variable created by init
    function displayName(){
        // display name () is the inner function, that forms the closure
        console.log(name);// use variable declared in the parent function
    }
    displayName();
}
init();