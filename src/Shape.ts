import {Point} from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  points: Point[]

  abstract getType(): string;

  constructor(points?: Point[], color?: string, filled?: boolean) {
    if (points?.length > 2 && (color || filled)) {
      this.color = color;
      this.filled = filled;
      this.points = points;
      return;
    }
    if (points?.length > 2 && !color && !filled) {
      this.color = "green";
      this.filled = true;
      this.points = points;
      return;
    }
    throw new Error('Shape has less than 3 points')
  }

  toString() {
    const filledValue = this.filled ? 'filled' : 'not filled';
    const points = this.points.reduce((prevPoint, currPoint, i): string => {
      if (i > 0) {
        return prevPoint + ', ' + currPoint.toString();
      }
      return prevPoint + currPoint.toString();
    }, '');
    return `A Shape with color of ${this.color} and ${filledValue}. Points: ${points}.`
  }

  getPerimeter() {

    const AB = this.points[0].distance(this.points[1]);
    const BC = this.points[1].distance(this.points[2]);
    const CA = this.points[2].distance(this.points[0]);

    return AB + BC + CA;
  }
}
