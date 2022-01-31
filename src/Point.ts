export class Point {
  public x: number;
  public y: number;

  // constructor();
  // constructor(x:number, y:number);
  constructor(x?:number, y?:number) {
    if(x && y) {
      this.x = x;
      this.y = y;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  toString() {
    return `(${this.x},${this.y})`
  }

  Distance(): string;
  Distance(other: Point): string;
  Distance(x: number, y: number): string;
  Distance(x?: number, y?: number, other?: Point): string {
    if(other) {
      return `(${other.x}, ${other.y})`
    }
    else if (x && y) {
      return `(${x},${y})`
    } else {
      return `(${this.x},${this.y})`
    }
  }

}

let a = new Point();
console.log(a.Distance(1,2));
console.log(a.Distance());
console.log(a.Distance(new Point(1,2)));
