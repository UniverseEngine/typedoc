import { Client, NetworkElement, Vector } from "../shared";
import { DisconnectReason } from "./server.enums";

export interface IServerEvents {
    /* resource */
    OnResourceStart(): void;
    OnResourceStop(): void;
    /* client */
    OnClientConnect(client: Client): void;
    OnClientStartResourcesDownload(client: Client): void;
    OnClientEndResourcesDownload(client: Client): void;
    OnClientCommand(client: Client, cmd: string, text: string): void;
    OnClientDisconnect(client: Client, reason: DisconnectReason): void;
    /* elements */
    OnElementCreate(element: NetworkElement): void;
    OnElementDelete(element: NetworkElement): void;
    /* ped */
    OnPedEnterVehicle(ped: NetworkElement, vehicle: NetworkElement, seat: number): void;
    OnPedEnterVehicleAbort(ped: NetworkElement, vehicle: NetworkElement): void;
    OnPedEnteredVehicle(ped: NetworkElement, vehicle: NetworkElement, seat: number): void;
    OnPedExitVehicle(ped: NetworkElement, vehicle: NetworkElement): void;
    /* misc */
    OnRender(): void;
}

export interface gta {
    spawnPlayer(client: Client, position: Vector, heading: number) : void;
}