
import { Fire, Marker, MarkerType, NetworkElement, Pickup, RGBA, SpriteType, Vector, Vector2D } from "../shared";
import { IClientEvents } from "./client.interfaces";

export declare function bindKey(key: number): void;
export declare function callServerFunc(name: string, ...args: any): void;
export declare function getDistance(vec1: Vector, vec2: Vector): number;
export declare function getDistance2D(vec1: Vector2D, vec2: Vector2D): number; 

export declare function addEventHandler<K extends keyof IClientEvents>(name: K, func: Function): void;
export declare function addCommandHandler(name: string, func: (cmd: string, text: string) => void): void;

export declare function createBlip(position: Vector, scale: number, color: RGBA, sprite: SpriteType, attachedTo?: NetworkElement): Pickup;
export declare function createMarker(type: MarkerType, position: Vector, size: number, color: RGBA, pulsePeriod: number, pulseFraction: number): Marker;
export declare function createPickup(model: number, position: Vector, type: number): Pickup;
export declare function createFire(position: Vector, propagation: boolean, strength: number): Fire;

export declare function getElement(id: number, isLocal: boolean): NetworkElement;