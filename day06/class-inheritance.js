class person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}

class students extends person{
    constructor(name,level){
        super(name);
        this.level=level;
    }
    greet(){
        console.log(`hello ${this.name}from ${this.level}`)
    }
}
const o1=new person("Azhar");
const o2=new students("Sharad","BCS final year");
o1.greet();
o2.greet();