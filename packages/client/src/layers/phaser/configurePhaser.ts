import {
  defineSceneConfig,
  AssetType,
  defineScaleConfig,
  defineMapConfig,
  defineCameraConfig,
} from "@latticexyz/phaserx";
import RPGNatureTileset from "../../../public/assets/tilesets/RPGNatureTileset.png";
import { TileAnimations, Tileset } from "../../artTypes/RPGNatureTileset";
import {
  Sprites,
  Assets,
  Maps,
  Scenes,
  TILE_HEIGHT,
  TILE_WIDTH,
  Animations,
} from "./constants";

const ANIMATION_INTERVAL = 200;

const mainMap = defineMapConfig({
  chunkSize: TILE_WIDTH * 64, // tile size * tile amount
  tileWidth: TILE_WIDTH,
  tileHeight: TILE_HEIGHT,
  backgroundTile: [Tileset.Grass],
  animationInterval: ANIMATION_INTERVAL,
  tileAnimations: TileAnimations,
  layers: {
    layers: {
      Background: { tilesets: ["Default"] },
      Foreground: { tilesets: ["Default"] },
    },
    defaultLayer: "Background",
  },
});

export const phaserConfig = {
  sceneConfig: {
    [Scenes.Main]: defineSceneConfig({
      assets: {
        [Assets.Tileset]: {
          type: AssetType.Image,
          key: Assets.Tileset,
          path: RPGNatureTileset,
        },
        [Assets.MainAtlas]: {
          type: AssetType.MultiAtlas,
          key: Assets.MainAtlas,
          // Add a timestamp to the end of the path to prevent caching
          path: `/assets/atlases/atlas.json?timestamp=${Date.now()}`,
          options: {
            imagePath: "/assets/atlases/",
          },
        },
      },
      maps: {
        [Maps.Main]: mainMap,
      },
      sprites: {
        [Sprites.MainCharacter]: {
          assetKey: Assets.MainAtlas,
          frame: "sprites/main-character/base.png",
        },
        [Sprites.Chicken]: {
          assetKey: Assets.MainAtlas,
          frame: "sprites/chicken/0.png",
        },
        [Sprites.Soldier]: {
          assetKey: Assets.MainAtlas,
          frame: "sprites/golem/idle/0.png",
        },
      },
      animations: [
        {
          key: Animations.MainCharacterIdle,
          assetKey: Assets.MainAtlas,
          startFrame: 0,
          endFrame: 3,
          frameRate: 6,
          repeat: -1,
          prefix: "sprites/main-character/idle/",
          suffix: ".png",
        },
        {
          key: Animations.MainCharacterWalk,
          assetKey: Assets.MainAtlas,
          startFrame: 0,
          endFrame: 7,
          frameRate: 6,
          repeat: -1,
          prefix: "sprites/main-character/walk/",
          suffix: ".png",
        },
        {
          key: Animations.MainCharacterAttack,
          assetKey: Assets.MainAtlas,
          startFrame: 0,
          endFrame: 7,
          frameRate: 6,
          repeat: -1,
          prefix: "sprites/main-character/attack/",
          suffix: ".png",
        },
        {
          key: Animations.MainCharacterDeath,
          assetKey: Assets.MainAtlas,
          startFrame: 0,
          endFrame: 7,
          frameRate: 6,
          repeat: -1,
          prefix: "sprites/main-character/death/",
          suffix: ".png",
        },
        {
          key: Animations.ChickenIdle,
          assetKey: Assets.MainAtlas,
          startFrame: 0,
          endFrame: 15,
          frameRate: 6,
          repeat: -1,
          prefix: "sprites/chicken/",
          suffix: ".png",
        },
        {
          key: Animations.SwordsmanIdle,
          assetKey: Assets.MainAtlas,
          startFrame: 0,
          endFrame: 3,
          frameRate: 6,
          repeat: -1,
          prefix: "sprites/golem/idle/",
          suffix: ".png",
        },
      ],
      tilesets: {
        Default: {
          assetKey: Assets.Tileset,
          tileWidth: TILE_WIDTH,
          tileHeight: TILE_HEIGHT,
        },
      },
    }),
  },
  scale: defineScaleConfig({
    parent: "phaser-game",
    zoom: 1,
    mode: Phaser.Scale.NONE,
  }),
  cameraConfig: defineCameraConfig({
    pinchSpeed: 1,
    wheelSpeed: 1,
    maxZoom: 3,
    minZoom: 1,
  }),
  cullingChunkSize: TILE_HEIGHT * 16,
  physics: {
    default: "arcade",
  },
};
