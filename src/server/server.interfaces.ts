import { Client, Vector } from "../shared";

export interface gta {
    spawnPlayer(client: Client, position: Vector, heading: number) : void;
};