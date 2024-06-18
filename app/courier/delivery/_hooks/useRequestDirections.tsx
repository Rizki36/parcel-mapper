import axios from "axios";
import { DirectionData } from ".";
import { Node } from "../_stores/delivery-store";
import { useState } from "react";

export type RouteProfile = "driving" | "cycling";

const requestDirection = ({
  key,
  origin,
  destination,
  routeProfile,
}: {
  key: string;
  origin: Node;
  destination: Node;
  routeProfile: RouteProfile;
}) => {
  return axios.get<DirectionData>(
    `https://api.mapbox.com/directions/v5/mapbox/${routeProfile}/${origin.lng}%2C${origin.lat}%3B${destination.lng}%2C${destination.lat}?alternatives=false&geometries=geojson&overview=full&steps=false&access_token=pk.eyJ1IjoiZml0cmEzNiIsImEiOiJjbDNmaXU5cGYwMXhrM2pwbTZnam0xZmYyIn0.lHF9zhJy6Zvpec9lzPUFvg`,
    {
      headers: {
        "x-request-key": key,
      },
    }
  );
};

const useRequestDirections = () => {
  const [isLoading, setIsLoading] = useState(false);
  const request = async (nodes: Node[], routeProfile: RouteProfile) => {
    const temp: Record<
      string,
      {
        origin: Node;
        destination: Node;
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
      requests.push(
        requestDirection({ key, origin, destination, routeProfile })
      );
    }

    setIsLoading(true);
    const responses = await Promise.all(requests).catch((error) => {
      console.error(error);
      return [];
    });
    setIsLoading(false);

    return responses.reduce((acc, response) => {
      const key = response.config.headers["x-request-key"];
      const direction = response.data;

      acc[key] = direction;

      return acc;
    }, {} as Record<string, DirectionData>);
  };

  return { request, isLoading };
};

export default useRequestDirections;
