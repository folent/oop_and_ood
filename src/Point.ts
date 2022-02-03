function getDistance(x1, y1, x2, y2) {
  const X = (x2 - x1) ** 2;
  const Y = (y2 - y1) ** 2;

  return Math.sqrt(X + Y);
}

export class Point {
  public x: number;
  public y: number;

  constructor();
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
  distance(other?: any): number;
  distance(x: number, y: number): number;
  distance(other?: number | Point, xOrY?: number, y?: number): number {

    let workX;
    let workY;
    if(other instanceof Point) {
      workX = other.x;
      workY = other.y;
    }
    else if (!other && !xOrY && !y){
      workX = 0;
      workY = 0;
    } else {
      workX = other;
      workY = xOrY;
    }

    return getDistance(this.x, this.y, workX, workY);
  }

}
