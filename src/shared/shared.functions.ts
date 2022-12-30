
import { Client, NetworkElement } from "./shared.classes";

export declare function getElement(id: number): NetworkElement;
export declare function getClient(id: number): Client;
export declare function getClientFromPlayerID(id: number): Client;

export declare function triggerEvent(name: string, ...args: any): void;
export declare function setTimeout(f: Function, timeout: number, ...args: any): void;
export declare function setInterval(f: Function, timeout: number, ...args: any): void;

export declare function message(text: string): void;