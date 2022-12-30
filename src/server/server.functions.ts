
import { Actor, Blip, Building, Client, Entity, Fire, Marker, MarkerType, RGBA, SpriteType, Vector } from "../shared";
import { IServerEvents } from "./server.interfaces";

declare function messageClient(name: string, client: Client): void;
declare function registerRemoteFunc(name: string): void;
declare function callClientFunc(client: Client, name: string, ...args: any): void;
declare function addEventHandler<K extends keyof IServerEvents>(name: K, func: Function): void;

declare function createActor(model: number, position: Vector, heading: number): Actor;
declare function createBuilding(model: number, position: Vector): Building;
declare function createBlip(position: Vector, scale: number, color: RGBA, sprite: SpriteType, entity: Entity): Blip;
declare function createFire(position: Vector, propagation: boolean, strength: number): Fire;
declare function createMarker(isSet: boolean, type: MarkerType, position: Vector, size: number, rgba: RGBA, pulsePeriod: number, pulseFraction: number, rotateRate: number): Marker;
