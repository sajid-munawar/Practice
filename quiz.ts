
class Animal {
    private name:string;
    constructor(theName:string){this.name=theName}
    move(meters:number){
        alert(this.name+'move'+meters+'m')
    }
}

var a= new Animal('cat').name;
console.log(a)

class Thing {
    protected doSomething(){/*...*/}//line a
}

class MyThing extends Thing {
    public myMethod(){
        this.doSomething();//line b
    }
}

var t=new MyThing();//line C
t.doSomething();//line d

class sample
{
    static x=100;
    static y=150;
}

class newspaper extends sample
{
    static x=1000;
    static main(){
        console.log(sample.x+''+sample.y+newspaper.x)
    }
}
newspaper.main();

class A 
{
    constructor()
    {
        this.MyvirtuallyMethod();
    }
    protected MyvirtuallyMethod():void
    {
        console.log('A')
    }
}
class B extends A 
{
    public MyvirtuallyMethod():void
    {
        console.log('B')
    }
}

let obj:A=new B();

class A 
{
    constructor()
    {
        this.MyvirtuallyMethod();
    }
    protected MyvirtuallyMethod():void
    {
        console.log('A')
    }
}
class B extends A 
{
    private testString:string='B';
    public MyvirtuallyMethod():void
    {
        console.log(this.testString)
    }
}

let obj:A=new B();

abstract class Base {
    foo():number {return this.bar();}
    abstract bar():number;
}

class E extends Base {
    bar(){return 1;}
}

var obj1=new Base();
console.log(obj1.foo())

function printLabel(labelledObj:{label:string}){//line A
    console.log(labelledObj.label)//line B
    }
    
    var myObj={size:10,mylabe:size}

    class Point {//line A
        x:number;
        y:number;
    }
    
    interface Point3d extends Point{//line 2
        z:number;
    }
    
    var Point3d:Point3d={x:1,y:2,z:3};// line c