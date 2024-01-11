export const BranchKeyGenerator = {
  all: "branch-key",

  list: () => [BranchKeyGenerator.all, "list"],
  one: (id: string) => [BranchKeyGenerator.all, id],
};

export const CourierKeyGenerator = {
  all: "courier-key",

  list: () => [CourierKeyGenerator.all, "list"],
  one: (id: string) => [CourierKeyGenerator.all, id],
};

export const ParcelKeyGenerator = {
  all: "parcel-key",

  list: () => [ParcelKeyGenerator.all, "list"],
  one: (id: string) => [ParcelKeyGenerator.all, id],
};
