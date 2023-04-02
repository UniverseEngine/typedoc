
import { NetworkElementType, EntityStatus, PedType, PickupModel, PickupType, SpriteType, EntityModel } from "./shared.enums";

export class RGBA {
    constructor(r: number, g: number, b: number, a: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    public r: number;
    public g: number;
    public b: number;
    public a: number;
}

export class Vector2D {
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public x: number;
    public y: number;
}

export class Vector {
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public x: number;
    public y: number;
    public z: number;
}

export class Rect {
    constructor(left: number, top: number, right: number, bottom: number) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }

    public left: number;
    public top: number;
    public right: number;
    public bottom: number;
}

export declare class NetworkElement {
    public id: number;
    public elementType: NetworkElementType;
    public owner: number;
    getData(key: string): null|string|boolean|number;
    setData(key: string, value: null|string|boolean|number): void;
    destroy(): boolean;
}

export declare class Transformable extends NetworkElement {
    public position: Vector;
    public heading: number;
}

export declare class Entity extends Transformable {
    public model: EntityModel;
    public status: EntityStatus;
    public usesCollision: boolean;
}

export declare class Building extends Entity {

}

export declare class Physical extends Entity {
    public moveSpeed: Vector;
    public turnSpeed: Vector;
    public moveFriction: Vector;
    public turnFriction: Vector;
}

export declare class Ped extends Physical {
    public pedState: number;
    public health: number;
    public armour: number;
    public rotation: number;
    public vehicle: Vehicle;
    public inVehicle: boolean;
    public pedType: PedType;
    public weapon: number;
    public wepAccuracy: number;
    public kindaStayInSamePlace: boolean;
}

export declare class PlayerPed extends Ped {
    public wantedLevel: number;
    public money: number;
    public infiniteSprint: boolean;
}

export declare class Actor extends Ped {

}

export declare class Vehicle extends Physical {
    public colour1: number;
    public colour2: number;
    public alarm: number;
    public driver: Ped;
    public numPassengers: number;
    public locked: boolean;
    public engineOn: boolean;
    public canBeDamaged: boolean;
    public health: number;
    getPassenger(id: number): Ped;
}

export declare class Blip extends NetworkElement {
    public position: Vector;
    public scale: number;
    public color: RGBA;
    public sprite: SpriteType;
}

export declare class Fire extends NetworkElement {
    public extinguish(): void;
    public position: Vector;
    public propagation: boolean;
    public strength: number;
}

export declare class Marker extends NetworkElement {
    public position: Vector;
    public type: number;
    public size: number;
    public color: RGBA;
    public pulsePeriod: number;
    public pulseFraction: number;
    public rotateRate: number;
}

export declare class Object extends Entity {
    public uprootLimit: number;
    public isPickup: boolean;
    public glassCracked: boolean;
    public glassBroken: boolean;
    public useVehicleColours: boolean;
    public collisionDamageMultiplier: number;
    public collisionDamageEffect: number;
    public specialCollisionResponseCases: boolean;
    public cameraToAvoidThisObject: boolean;
    public endOfLifeTime: number;
    public refModelIndex: number;
    public colour1: number;
    public colour2: number;
}

export declare class Pickup extends NetworkElement {
    public model: PickupModel;
    public position: Vector;
    public type: PickupType;
}

export declare class Client {
    public id: number;
    public name: string;
    public player: PlayerPed;
}