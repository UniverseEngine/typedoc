
import { Client, NetworkElement } from "./shared.classes";

declare function getElement(id: number): NetworkElement;
declare function getClient(id: number): Client;
declare function getClientFromPlayerID(id: number): Client;

declare function triggerEvent(name: string, ...args: any): void;
declare function setTimeout(f: Function, timeout: number, ...args: any): void;
declare function setInterval(f: Function, timeout: number, ...args: any): void;

declare function message(text: string): void;