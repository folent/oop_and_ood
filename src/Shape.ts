import {Point} from "./Point";

export abstract class Shape {
    protected color:string;
    protected filled: boolean;
    points: Point[]

    abstract getType(): string;


}
