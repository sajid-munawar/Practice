class Point {
    x!: number;
    y: number = 0;
};

const pt = new Point();
pt.x = 8;
pt.y = 10;

console.log(pt.x, pt.y);

class Greater {
    x: number;
    y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

let g = new Greater(100)
console.log(g.x);

class Base {
    x?:number;
    constructor(x?:number){
        this.x=x;
    }
}

class Derived extends Base {
    y:number;
    constructor(y:number){
        super();
        this.y=y;
    }

}

let d=new Derived(5);
d.