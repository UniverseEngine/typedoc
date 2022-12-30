
import { Vector, Vector2D } from "../shared";
import { IClientEvents } from "./client.interfaces";

declare function bindKey(key: number): void;
declare function callServerFunc(name: string, ...args: any): void;
declare function getDistance(vec1: Vector, vec2: Vector): number;
declare function getDistance2D(vec1: Vector2D, vec2: Vector2D): number;

export function addEventHandler<K extends keyof IClientEvents>(name: K, func: Function) {}
export function addCommandHandler(name: string, func: (cmd: string, text: string) => void) {}