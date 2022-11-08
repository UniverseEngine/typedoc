
import { Actor, Building, Client, Vector } from "../shared";

export function messageClient(name: string, client: Client): void { }
export function callClientFunc(client: Client, name: string, ...args: any): void { }

export function createActor(model: number, position: Vector, heading: number): Actor { return new Actor }
export function createBuilding(model: number, position: Vector): Building { return new Building }
