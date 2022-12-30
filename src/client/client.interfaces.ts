
import { Client, Entity, NetworkElement, Rect, RGBA, Vector, Vector2D } from "../shared/shared.classes";
import { BigMessageType, ExplosionType, SmallMessageType, WeaponType } from "../shared/shared.enums";
import { AudioStream, D3DTexture, RwTexture } from "./client.classes";
import { GarageType, PedPieceType } from "./client.enums";

export interface IClientEvents {
    /* resource */
    OnResourceStart(): void;
    OnResourceStop(): void;
    /* client */
    OnClientConnect(client: Client): void;
    OnClientStartResourcesDownload(): void;
    OnClientEndResourcesDownload(): void;
    OnClientCommand(cmd: string, text: string): void;
    OnClientDisconnect(client: Client): void;
    /* elements */
    OnElementStreamIn(element: NetworkElement): void;
    OnElementStreamOut(element: NetworkElement): void;
    /* ped */
    OnPedEnterVehicle(ped: NetworkElement, vehicle: NetworkElement, seat: number): void;
    OnPedEnterVehicleAbort(ped: NetworkElement, vehicle: NetworkElement): void;
    OnPedEnteredVehicle(ped: NetworkElement, vehicle: NetworkElement, seat: number): void;
    OnPedExitVehicle(ped: NetworkElement, vehicle: NetworkElement): void;
    OnPedInflictDamage(ped: NetworkElement, damagedBy: NetworkElement, method: WeaponType, damage: number, pedPiece: PedPieceType, direction: number, wasDamaged: number): void;
    /* misc */
    OnRender(): void;
    OnWaterCannonExtinguishFire(position: Vector, range: number): void;
    OnKeyDown(key: number): void;
}

export interface audio {
    playFrontEndSound(id: number): void;
    playFrontEndTrack(track: number, flag: number): void;
    stopFrontEndTrack(): void;
    playOneShot(audioEntityId: number, oneShot: number, volume: number): void;
    isMP3RadioChannelAvailable(): boolean;
}

export interface camera {
    restore() : void;
    restoreWithJumpCut(): void;
    setFadeColour(r: number, g: number, b: number): void;
    shake(strength: number, x: number, y: number, z: number): void;
    shakeNoPos(strength: number): void;
    setCamPositionForFixedMode(source: Vector, offset: Vector): void;
}

export interface discord {
    name: string;
    state: string;
    details: string;
}

export interface dx {
    createTextureFromImage(path: string) : D3DTexture;
    drawText(text: string, rect: Rect, scaleX: number, scaleY: number, rgba: RGBA, fontname?: "default", alignX?: "left", alignY?: "top", noClip?: false, wordBreak?: true): void;
    drawRectangle(x: number, y: number, width: number, height: number, rgba: RGBA): void;
    drawTexture(tex: D3DTexture, pos: Vector2D, size: Vector2D, center: Vector2D, rotation: number, color: RGBA): void;
}

export interface font {
    printstring(x: number, y: number, text: string): void;
    printstringFromBottom(x: number, y: number, text: string): void;
    setScale(x: number, y: number): void;
    setSlantRefPoint(x: number, y: number): void;
    setSlant(s: number): void;
    setJustifyOn(): void;
    setJustifyOff(): void;
    setRightJustifyOn(): void;
    setRightJustifyOff(): void;
    setCentreOn(): void;
    setCentreOff(): void;
    setWrapx(x: number): void;
    setCentreSize(s: number): void;
    setBackgroundOn(): void;
    setBackgroundOff(): void;
    setBackgroundOnlyTextOn(): void;
    setBackgroundOnlyTextOff(): void;
    setPropOn(): void;
    setPropOff(): void;
    setFontStyle(style: number): void;
    setRightJustifyWrap(wrap: number): void;
    setAlphaFade(fade: number): void;
    setDropShadowPosition(pos: number): void;
    setColor(rgba: RGBA): void;
    setDropColor(rgba: RGBA): void;
    drawFonts(): void;
}

export interface gta {
    respawnPlayer(pos: Vector, heading: number): void;
    createPickup(model: number, pos: Vector, type: number): void;
    createMarker(isSet: boolean, type: number, pos: Vector, size: number, rgba: RGBA, pulsePeriod: number, pulseFraction: number, rotateRate: number): void;
    removeNearestBuilding(pos: Vector, radius: number, model: number): void;
    restoreNearestBuilding(pos: Vector, radius: number, model: number): void;
    swapNearestBuilding(pos: Vector, radius: number, model: number, newmodel: number): void;
    openGarage(id: GarageType): void;
    closeGarage(id: GarageType): void;
    isBoat(model: number): boolean;
    setWeather(weather: number): void;
    setGameClock(hour: number, min: number): void;
    addExplosion(entity: Entity, culprit: Entity, type: ExplosionType, pos: Vector, lifetime: number): void;
    createTextureFromImage(path: string): RwTexture;
    destroyTexture(tex: RwTexture): void;
    areControlsDisabled(): boolean;
    disableControls(status: boolean): void;
    hideHUD(status: boolean): void;
    getGravity(): number;
    setGravity(gravity: number): void;
}

export interface loader {
    loadVehicleXml(path: string): boolean;
    loadHud(path: string): boolean;
    loadWeaponDat(path: string): boolean;
    loadTimeCycleDat(path: string): boolean;
    loadHandlingCfg(path: string): boolean;
    swapDFF(modelname: string, path: string): boolean;
    swapTXD(modelname: string, path: string): boolean;
    swapCOL(modelname: string, path: string): boolean;
    loadRadarSprite(path: string): boolean;
}

export interface messages {
    pager(msg: string, speed: number, priority: number): void;
    clear(): void;
    clearSmallMessagesOnly(): void;
    small(msg: string, time: number, type: SmallMessageType): void;
    big(msg: string, time: number, style: BigMessageType): void;
}

export interface sound {
    open(path: string): AudioStream;
}

export interface sprite2d {
    drawRect(rect: Rect, rgba: RGBA): void;
}

export interface sprite {
    calcScreenCoors(vec: Vector, farClip: boolean): Object;
    renderOneXLUSprite(vec: Vector, w: number, h: number, rgba: RGBA, intens: number, recipz: number): void;
}

export interface timer {
    getTimeInMilliseconds(): number;
    getPreviousTimeInMilliseconds(): number;
}

export interface world {
    add(ent: Entity): void;
    remove(ent: Entity): void;
    findGroundZFor3DCoord(vec: Vector): number;
    findGroundZForCoord(vec: Vector2D): number;
    processLineOfSight(vec1: Vector, vec2: Vector, checkBuildings: boolean, checkVehicles: boolean, checkPeds: boolean, checkObjects: boolean, checkDummies: boolean, ignoreSeeThrough: boolean, ignoreSomeObjects: boolean): boolean;
    findObjectsInRange(vec: Vector, radius: number, ignoreZ: boolean, checkBuildings: boolean, checkVehicles: boolean, checkPeds: boolean, checkObjects: boolean, checkDummies: boolean): Array<Entity>;
}