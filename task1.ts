interface NodeList {
  map<U, TNode extends Node>(
    callbackfn: (value: TNode, index: number, array: TNode[]) => U,
    thisArg?: any
  ): U[];
}
NodeList.prototype.map = Array.prototype.map;
