import { Shape } from './Shape';

export class Triangle extends Shape {
  constructor(point1, point2, point3);
  constructor(point1, point2, point3, color?: string, filled?: boolean) {
      super([point1, point2, point3], color, filled);

    this.points.push(point1, point2, point3);
  }

  getType(): string {
    const AB = this.points[0].distance(this.points[1]);
    const BC = this.points[1].distance(this.points[2]);
    const CA = this.points[2].distance(this.points[0]);

    if(Math.ceil(AB) === Math.ceil(BC) && Math.ceil(BC) === Math.ceil(CA) && Math.ceil(AB) === Math.ceil(CA)) {
      return "equilateral triangle";
    }
    else if(AB !== BC && BC !== CA && AB !== CA) {
      return "scalene triangle";
    } else {
      return "isosceles triangle";
    }
  }

  toString(): string {
    return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
  }
}
