
import { Actor, Blip, Building, Client, Entity, Fire, Marker, MarkerType, RGBA, SpriteType, Vector } from "../shared";
import { IServerEvents } from "./server.interfaces";

export declare function messageClient(name: string, client: Client): void;
export declare function registerRemoteFunc(name: string): void;
export declare function callClientFunc(client: Client, name: string, ...args: any): void;
export declare function addEventHandler<K extends keyof IServerEvents>(name: K, func: Function): void;

export declare function createActor(model: number, position: Vector, heading: number): Actor;
export declare function createBuilding(model: number, position: Vector): Building;
export declare function createBlip(position: Vector, scale: number, color: RGBA, sprite: SpriteType, entity: Entity): Blip;
export declare function createFire(position: Vector, propagation: boolean, strength: number): Fire;
export declare function createMarker(isSet: boolean, type: MarkerType, position: Vector, size: number, rgba: RGBA, pulsePeriod: number, pulseFraction: number, rotateRate: number): Marker;
