import { Node } from "@/courier/delivery/_stores/delivery-store";

export const permute = (arr: string[]): string[][] => {
  if (arr.length === 1) {
    return [arr];
  }

  const perms = [];

  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    const rest = arr.slice(0, i).concat(arr.slice(i + 1));
    const subPerms = permute(rest);

    for (const subPerm of subPerms) {
      perms.push([first, ...subPerm]);
    }
  }

  return perms;
};

export const generateRandomPassword = () =>
  Math.random().toString(36).slice(-10);

export const generateFlattenRoute = (arr: number[][]) => {
  const result: number[] = [];

  arr.forEach((fromTo, i) => {
    if (i === 0) {
      result.push(fromTo[0]);
    }

    result.push(fromTo[1]);
  });
  return result;
};

/**
 *  input [1,2,3,4,1]
 *  output [1,2],[2,3],[3,4],[4,1]
 */
export const generateGroupedRoute = (arr: number[]) => {
  const result: number[][] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result.push([arr[i], arr[i + 1]]);
  }

  return result;
};

export const mapIndexToId = (indexes: number[], nodes: Node[]) => {
  return indexes.map((index) => nodes[index].id);
};

export const indexToAlphabet = (index: number) => {
  return (index + 9).toString(36).toUpperCase();
};
