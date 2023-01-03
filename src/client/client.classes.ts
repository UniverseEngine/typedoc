
import { Ped, Vehicle, Entity, Vector, Physical } from "../shared";
import { AudioStreamStatus, PedPieceType } from "./client.enums";

export class AudioStream {
    public status: AudioStreamStatus;
    public position: number;
    play(): void {}
    pause(): void {}
    resume(): void {}
    close(): void {}
    setVolume(volume: number): void {}
}

export class ClientPed extends Ped {
    getWeaponAmmoInClip(weapon: number): void { }
    getWeaponAmmo(weapon: number): void { }
    getWeaponState(weapon: number): void { }
    setWeaponAmmo(weapon: number): void { }
    giveWeapon(weapon: number, ammo: number): void { }
    clearWeapons(): void { }
    enterVehicle(vehicle: Vehicle, driver: boolean): void { }
    removeBodyPart(bodypart: PedPieceType): void { }
    runTo(position: Vector): void { }
    clearObjective(): void { }
    setAnim(group: number, id: number, delta: number): void { }
    pointGunAt(entity: Entity): void { }
    clearPointGunAt(): void { }
}

export class ClientVehicle extends Vehicle {
    isSphereTouchingVehicle(vec: Vector, radius: number): boolean { return false; }
    setHydraulics(status: boolean): void { }
}

export class ClientPhysical extends Physical {
    public audioEntityId: number;
}

export declare class RmlElement {
    getAbsoluteLeft(): number;
    getAbsoluteTop(): number;
    setAttribute(attr: string, value: string): string;
    getAttribute(attr: string): string;
    getNumChildren(): number;
    getChild(n: number): RmlElement;
    isClassSet(cls: string): boolean;
    setClass(cls: string, value: boolean): void;
    getClientHeight(): number;
    getClientLeft(): number;
    getClientTop(): number;
    getClientWidth(): number;
    getFirstChild(): RmlElement;
    getId(): string;
    setId(id: string): void;
    getInnerRML(): string;
    setInnerRML(rml: string): void;
    getLastChild(): RmlElement;
    getNextSibling(): RmlElement;
    getOffsetHeight(): number;
    getOffsetLeft(): number;
    getOffsetParent(): number;
    getOffsetTop(): number;
    getOffsetWidth(): number;
    getOwnerDocument(): RmlDocument;
    getParentNode(): RmlElement;
    getPreviousSibling(): RmlElement;
    getScrollHeight(): number;
    getScrollLeft(): number;
    getScrollTop(): number;
    getScrollWidth(): number;
    getProperty(prop: string): string;
    setProperty(prop: string, value: string): void;
    getTagName(): string;
    blur(): void;
    click(): void;
    focus(): void;
    getElementById(id: string): RmlElement;
    hasAttribute(attr: string): boolean;
    hasChildNodes(): boolean;
    appendChild(element: RmlElement): RmlElement;
    removeChild(element: RmlElement): RmlElement;
    destroy(): void;
}

export declare class RmlDocument extends RmlElement {
    pullToFront(): void;
    pushToBack(): void;
    show(): void;
    hide(): void;
    updateDocument(): void;
    createElement(tag: string): RmlElement;
    createTextNode(text: string): RmlElement;

    title: string;
}