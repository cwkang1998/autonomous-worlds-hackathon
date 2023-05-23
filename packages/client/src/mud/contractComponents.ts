/* Autogenerated file. Do not edit manually. */

import { TableId } from "@latticexyz/utils";
import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    Collected: (() => {
      const tableId = new TableId("", "Collected");
      return defineComponent(
        world,
        {
          result: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Crafted: (() => {
      const tableId = new TableId("", "Crafted");
      return defineComponent(
        world,
        {
          result: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Thirsty: (() => {
      const tableId = new TableId("", "Thirsty");
      return defineComponent(
        world,
        {
          result: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Hungry: (() => {
      const tableId = new TableId("", "Hungry");
      return defineComponent(
        world,
        {
          result: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Died: (() => {
      const tableId = new TableId("", "Died");
      return defineComponent(
        world,
        {
          result: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Monster: (() => {
      const tableId = new TableId("", "Monster");
      return defineComponent(
        world,
        {
          monster: RecsType.Number,
          health: RecsType.Number,
          damage: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Encounter: (() => {
      const tableId = new TableId("", "Encounter");
      return defineComponent(
        world,
        {
          monster: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    EncounterTrigger: (() => {
      const tableId = new TableId("", "EncounterTrigger");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Resource: (() => {
      const tableId = new TableId("", "Resource");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Item: (() => {
      const tableId = new TableId("", "Item");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MapConfig: (() => {
      const tableId = new TableId("", "MapConfig");
      return defineComponent(
        world,
        {
          width: RecsType.Number,
          height: RecsType.Number,
          terrain: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Obstruction: (() => {
      const tableId = new TableId("", "Obstruction");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Mineable: (() => {
      const tableId = new TableId("", "Mineable");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    OwnedBy: (() => {
      const tableId = new TableId("", "OwnedBy");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Player: (() => {
      const tableId = new TableId("", "Player");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Position: (() => {
      const tableId = new TableId("", "Position");
      return defineComponent(
        world,
        {
          x: RecsType.Number,
          y: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Movable: (() => {
      const tableId = new TableId("", "Movable");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Stats: (() => {
      const tableId = new TableId("", "Stats");
      return defineComponent(
        world,
        {
          health: RecsType.Number,
          damage: RecsType.Number,
          thirst: RecsType.BigInt,
          hunger: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Inventory: (() => {
      const tableId = new TableId("", "Inventory");
      return defineComponent(
        world,
        {
          wood: RecsType.Number,
          stone: RecsType.Number,
          water: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
  };
}
