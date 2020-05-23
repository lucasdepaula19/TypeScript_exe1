import { blockType } from "./blockType";

export interface Block {
  //name: string;

  add(blockType: blockType ): blockType;
  remove(blockType: blockType ): blockType;
}
