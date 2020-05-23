import { Block } from "./Block";

export class Workspace {
  name: string;
  blocks: Array<Block>;

  constructor(name: string, blocks: Array<Block>) {
    this.name = name;
    this.blocks = blocks;
  }
}
