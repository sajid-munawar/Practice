class Point {
    x;
    y = 0;
}
;
const pt = new Point();
pt.x = 8;
pt.y = 10;
console.log(pt.x, pt.y);
class Greater {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
let g = new Greater(100);
console.log(g.x);
export {};
