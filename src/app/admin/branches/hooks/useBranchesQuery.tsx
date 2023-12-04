import { Parcel } from "@/types";
import { faker } from "@faker-js/faker";
import { useQuery } from "@tanstack/react-query";

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Parcel => {
  return {
    id: faker.string.uuid(),
    recipientName: faker.person.firstName(),
    recipientAddress: faker.location.streetAddress(),
    courierId: faker.string.uuid(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    status: faker.helpers.shuffle<Parcel["status"]>([
      "pending",
      "on-the-way",
      "delivered",
    ])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Parcel[] => {
    const len = lens[depth]!;
    return range(len).map((): Parcel => {
      return newPerson();
    });
  };

  return makeDataLevel();
}

const data = makeData(10000);

const fetchData = async (options: {
  pageIndex: number;
  pageSize: number;
  search: string;
  statuses: string[];
}) => {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500));

  let filteredData = data.filter((row) => {
    let isStatusMatch = true;

    if (options.statuses?.length > 0) {
      isStatusMatch = options.statuses.includes(row.status);
    }

    return (
      row.recipientName.toLowerCase().includes(options.search.toLowerCase()) &&
      isStatusMatch
    );
  });

  return {
    rows: filteredData.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize
    ),
    pageCount: Math.ceil(filteredData.length / options.pageSize),
  };
};

const useBranchesQuery = (props: {
  pageIndex: number;
  pageSize: number;
  search: string;
  statuses: string[];
}) => {
  const fetchDataOptions = {
    pageIndex: props.pageIndex,
    pageSize: props.pageSize,
    search: props.search,
    statuses: props.statuses,
  };

  const dataQuery = useQuery({
    queryKey: ["data", fetchDataOptions],
    queryFn: () => fetchData(fetchDataOptions),
  });

  return dataQuery;
};

export default useBranchesQuery;
