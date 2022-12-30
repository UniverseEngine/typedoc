
import { Vector, Vector2D } from "../shared";
import { IClientEvents } from "./client.interfaces";

export declare function bindKey(key: number): void;
export declare function callServerFunc(name: string, ...args: any): void;
export declare function getDistance(vec1: Vector, vec2: Vector): number;
export declare function getDistance2D(vec1: Vector2D, vec2: Vector2D): number; 

export declare function addEventHandler<K extends keyof IClientEvents>(name: K, func: Function): void;
export declare function addCommandHandler(name: string, func: (cmd: string, text: string) => void): void;