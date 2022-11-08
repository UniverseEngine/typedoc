
import { Blip, Client, Entity, Fire, Marker, NetworkElement, RGBA, Vector } from "./shared.classes";
import { MarkerType, SpriteType } from "./shared.enums";

export function getElement(id: NetworkElement) {
    return new NetworkElement;
}

export function createBlip(position: Vector, scale: number, color: RGBA, sprite: SpriteType, entity: Entity): Blip {
    return new Blip;
}

export function createFire(position: Vector, propagation: boolean, strength: number): Fire {
    return new Fire;
}

export function createMarker(isSet: boolean, type: MarkerType, position: Vector, size: number, rgba: RGBA, pulsePeriod: number, pulseFraction: number, rotateRate: number): Marker {
    return new Marker;
}

export function getClient(id: number) : Client { 
    return new Client;
}

export function getClientFromPlayerID(id: number): Client {
    return new Client;
}

export function addEventHandler(name: string, func: Function) {}
export function addCommandHandler(name: string, func: Function) {}
export function triggerEvent(name: string, ...args: any) {}
export function message(text: string) {}