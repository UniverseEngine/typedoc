
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