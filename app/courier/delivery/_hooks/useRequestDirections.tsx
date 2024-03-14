import axios from "axios";
import { DirectionData } from ".";

const nodes = [
  {
    id: 1,
    alias: "A",
    lat: -7.551051361760125,
    long: 112.22348813042969,
  },
  {
    id: 2,
    alias: "B",
    lat: -7.552858058777354,
    long: 112.22731316511666,
  },
  {
    id: 3,
    alias: "C",
    lat: -7.555538060549121,
    long: 112.22803409207916,
  },
  {
    id: 4,
    alias: "D",
    lat: -7.557300309104902,
    long: 112.23171116901788,
  },
  {
    id: 5,
    alias: "E",
    lat: -7.5484007257025825,
    long: 112.2284502042292,
  },
  {
    id: 6,
    alias: "F",
    lat: -7.550437801811475,
    long: 112.23595850239968,
  },
];

const requestDirection = ({
  key,
  origin,
  destination,
}: {
  key: string;
  origin: { lat: number; long: number };
  destination: { lat: number; long: number };
}) => {
  return axios.get<DirectionData>(
    `https://api.mapbox.com/directions/v5/mapbox/cycling/${origin.long}%2C${origin.lat}%3B${destination.long}%2C${destination.lat}?alternatives=false&geometries=geojson&overview=full&steps=false&access_token=pk.eyJ1IjoiZml0cmEzNiIsImEiOiJjbDNmaXU5cGYwMXhrM2pwbTZnam0xZmYyIn0.lHF9zhJy6Zvpec9lzPUFvg`,
    {
      headers: {
        "x-request-key": key,
      },
    }
  );
};

const useRequestDirections = () => {
  const request = async () => {
    const temp: Record<
      string,
      {
        origin: { alias: string; lat: number; long: number };
        destination: { alias: string; lat: number; long: number };
        direction?: DirectionData; // filled after request
      }
    > = {};

    for (let fromNode = 0; fromNode < nodes.length; fromNode++) {
      for (let toNode = 0; toNode < nodes.length; toNode++) {
        const sameNode = fromNode === toNode;
        if (sameNode) {
          continue;
        }

        const key =
          fromNode < toNode ? `${fromNode}-${toNode}` : `${toNode}-${fromNode}`;

        if (temp[key]) {
          continue;
        }

        temp[`${fromNode}-${toNode}`] = {
          origin: nodes[fromNode],
          destination: nodes[toNode],
        };
      }
    }

    const requests: ReturnType<typeof requestDirection>[] = [];
    for (const key in temp) {
      const { origin, destination } = temp[key];
      requests.push(requestDirection({ key, origin, destination }));
    }

    const responses = await Promise.all(requests);

    return responses.reduce((acc, response) => {
      const key = response.config.headers["x-request-key"];
      const direction = response.data;

      acc[key] = direction;

      return acc;
    }, {} as Record<string, DirectionData>);
  };

  return { request };
};

export default useRequestDirections;
