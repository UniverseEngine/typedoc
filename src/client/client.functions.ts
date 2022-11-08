
import { Vector, Vector2D } from "../shared";
import { Browser } from "./client.classes";

export function bindKey(key: number): void {}
export function callServerFunc(name: string, ...args: any): void {}
export function getDistance(vec1: Vector, vec2: Vector): number { return 0; }
export function getDistance2D(vec1: Vector2D, vec2: Vector2D): number { return 0; }

export function createBrowser(w: number, h: number): Browser { return new Browser }