
export enum DisconnectReason {
    DISCONNECTREASON_CONNECTION_TIMEOUT,
    DISCONNECTREASON_CONNECTION_LOST,
    DISCONNECTREASON_CONNECTION_REFUSED,
    DISCONNECTREASON_NETWORK_DATA_ERROR,
    DISCONNECTREASON_CRYPTO_ERROR,
    DISCONNECTREASON_INVALID_DATA,
    DISCONNECTREASON_INVALID_NICKNAME,
    DISCONNECTREASON_INVALID_VERSION,
    DISCONNECTREASON_DISCONNECTED,
    DISCONNECTREASON_SERVER_FULL,
    DISCONNECTREASON_INVALID_PASSWORD,
    DISCONNECTREASON_CRASH,
    DISCONNECTREASON_KICKED,
    DISCONNECTREASON_BANNED
}

export enum SpriteType {
    RADAR_SPRITE_NONE,
    RADAR_SPRITE_ASUKA,
    RADAR_SPRITE_BOMB,
    RADAR_SPRITE_CAT,
    RADAR_SPRITE_CENTRE,
    RADAR_SPRITE_COPCAR,
    RADAR_SPRITE_DON,
    RADAR_SPRITE_EIGHT,
    RADAR_SPRITE_EL,
    RADAR_SPRITE_ICE,
    RADAR_SPRITE_JOEY,
    RADAR_SPRITE_KENJI,
    RADAR_SPRITE_LIZ,
    RADAR_SPRITE_LUIGI,
    RADAR_SPRITE_NORTH,
    RADAR_SPRITE_RAY,
    RADAR_SPRITE_SAL,
    RADAR_SPRITE_SAVE,
    RADAR_SPRITE_SPRAY,
    RADAR_SPRITE_TONY,
    RADAR_SPRITE_WEAPON,
}

export enum EntityStatus {
    STATUS_PLAYER,
    STATUS_PLAYER_PLAYBACKFROMBUFFER,
    STATUS_SIMPLE,
    STATUS_PHYSICS,
    STATUS_ABANDONED,
    STATUS_WRECKED,
    STATUS_TRAIN_MOVING,
    STATUS_TRAIN_NOT_MOVING,
    STATUS_HELI,
    STATUS_PLANE,
    STATUS_PLAYER_REMOTE,
    STATUS_PLAYER_DISABLED
}

export enum EntityTypeStatus {
    ENTITY_TYPE_NOTHING,
    ENTITY_TYPE_BUILDING,
    ENTITY_TYPE_VEHICLE,
    ENTITY_TYPE_PED,
    ENTITY_TYPE_OBJECT,
    ENTITY_TYPE_DUMMY,
}

export enum WeaponType {
    WEAPONTYPE_UNARMED,
    WEAPONTYPE_BASEBALLBAT,
    WEAPONTYPE_COLT45,
    WEAPONTYPE_UZI,
    WEAPONTYPE_SHOTGUN,
    WEAPONTYPE_AK47,
    WEAPONTYPE_M16,
    WEAPONTYPE_SNIPERRIFLE,
    WEAPONTYPE_ROCKETLAUNCHER,
    WEAPONTYPE_FLAMETHROWER,
    WEAPONTYPE_MOLOTOV,
    WEAPONTYPE_GRENADE,
    WEAPONTYPE_DETONATOR,
    WEAPONTYPE_HELICANNON,
    WEAPONTYPE_LAST_WEAPONTYPE,
    WEAPONTYPE_ARMOUR,
    WEAPONTYPE_RAMMEDBYCAR,
    WEAPONTYPE_RUNOVERBYCAR,
    WEAPONTYPE_EXPLOSION,
    WEAPONTYPE_UZI_DRIVEBY,
    WEAPONTYPE_DROWNING,
    WEAPONTYPE_FALL,
    WEAPONTYPE_UNIDENTIFIED,
}

export enum WeaponFireType {
    WEAPON_FIRE_MELEE,
    WEAPON_FIRE_INSTANT_HIT,
    WEAPON_FIRE_PROJECTILE,
    WEAPON_FIRE_AREA_EFFECT,
    WEAPON_FIRE_USE
}

export enum WeaponStateType {
    WEAPONSTATE_READY,
    WEAPONSTATE_FIRING,
    WEAPONSTATE_RELOADING,
    WEAPONSTATE_OUT_OF_AMMO,
    WEAPONSTATE_MELEE_MADECONTACT
}

export enum NetworkElementType {
    INVALID = 0,
    WORLD = 100,
    ACTOR,
    PLAYER,
    VEHICLE,
    AUTOMOBILE,
    BOAT,
    BLIP,
    MARKER,
    PICKUP,
    OBJECT,
    BUILDING,
    FIRE,
}

export enum PedType {
    PEDTYPE_PLAYER1,
    PEDTYPE_PLAYER2,
    PEDTYPE_PLAYER3,
    PEDTYPE_PLAYER4,
    PEDTYPE_CIVMALE,
    PEDTYPE_CIVFEMALE,
    PEDTYPE_COP,
    PEDTYPE_GANG1,
    PEDTYPE_GANG2,
    PEDTYPE_GANG3,
    PEDTYPE_GANG4,
    PEDTYPE_GANG5,
    PEDTYPE_GANG6,
    PEDTYPE_GANG7,
    PEDTYPE_GANG8,
    PEDTYPE_GANG9,
    PEDTYPE_EMERGENCY,
    PEDTYPE_FIREMAN,
    PEDTYPE_CRIMINAL,
    PEDTYPE_UNUSED1,
    PEDTYPE_PROSTITUTE,
    PEDTYPE_SPECIAL,
    PEDTYPE_UNUSED2,
}

export enum ExplosionType {
    EXPLOSION_GRENADE,
    EXPLOSION_MOLOTOV,
    EXPLOSION_ROCKET,
    EXPLOSION_CAR,
    EXPLOSION_CAR_QUICK,
    EXPLOSION_HELI,
    EXPLOSION_MINE,
    EXPLOSION_BARREL,
    EXPLOSION_TANK_GRENADE,
    EXPLOSION_HELI_BOMB
}

export enum RadioStationType {
    HEAD_RADIO,
    DOUBLE_CLEF,
    JAH_RADIO,
    RISE_FM,
    LIPS_106,
    GAME_FM,
    MSX_FM,
    FLASHBACK,
    CHATTERBOX,
    USERTRACK,
    POLICE_RADIO = 10,
    NUM_RADIOS = 10,
    RADIO_OFF = 11,
}

export enum MarkerType {
    MARKERTYPE_ARROW = 1,
    MARKERTYPE_CYLINDER = 4,
}

export enum PickupType {
    PICKUP_NONE,
    PICKUP_IN_SHOP,
    PICKUP_ON_STREET,
    PICKUP_ONCE,
    PICKUP_ONCE_TIMEOUT,
    PICKUP_COLLECTABLE1,
    PICKUP_IN_SHOP_OUT_OF_STOCK,
    PICKUP_MONEY,
    PICKUP_MINE_INACTIVE,
    PICKUP_MINE_ARMED,
    PICKUP_NAUTICAL_MINE_INACTIVE,
    PICKUP_NAUTICAL_MINE_ARMED,
    PICKUP_FLOATINGPACKAGE,
    PICKUP_FLOATINGPACKAGE_FLOATING,
    PICKUP_ON_STREET_SLOW,
}

export enum WeatherType {
    WEATHER_SUNNY,
    WEATHER_CLOUDY,
    WEATHER_RAINY,
    WEATHER_FOGGY
}

export enum EntityModel {

}

export enum PickupModel {

}

export enum SmallMessageType {

}

export enum BigMessageType {

}