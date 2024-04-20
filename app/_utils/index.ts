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
