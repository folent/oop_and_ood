export class Point {
  public x: number;
  public y: number;

  // constructor();
  constructor(x?:number, y?:number) {
    if(x || y) {
      this.x = x;
      this.y = y;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }

  distance(): number;
  distance(other: any): number;
  distance(x: number, y: number): number;
  distance(x?: number, y?: number, other?: Point): number {
    if(other) {
      const X = (Math.abs(other.x) - Math.abs(this.x)) ** 2;
      const Y = (Math.abs(other.y) - Math.abs(this.y)) ** 2;

      const dist = Math.sqrt(X + Y);
      return dist;
    }
    else if (x && y) {
      const X = (Math.abs(x) - Math.abs(this.x)) ** 2;
      const Y = (Math.abs(y) - Math.abs(this.y)) ** 2;

      const dist = Math.sqrt(X + Y);
      return dist;
    } else {
      const dist = Math.sqrt(this.x * this.x + this.y * this.y);
      return dist;
    }
  }

}

let a = new Point();
console.log(a.distance(1,2));
console.log(a.distance());
console.log(a.distance(new Point(1,2)));
