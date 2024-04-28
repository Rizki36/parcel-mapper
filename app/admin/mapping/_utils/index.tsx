import { DirectionData } from "@/courier/delivery/_hooks";
import { Node } from "@/courier/delivery/_stores/delivery-store";
import { Area, Branch } from "@prismaorm/generated/client";
import { FeatureCollection } from "geojson";

export const generateBranchAreaGeoJson = (
  branchAreas: (Branch & { area: Area[] })[]
) => {
  const geoJson: FeatureCollection = {
    type: "FeatureCollection",
    features: branchAreas.map((branchArea) => {
      return {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            branchArea.area.map((area) => [area.longitude, area.latitude]),
          ],
        },
        properties: {
          id: branchArea.id,
          name: branchArea.name,
          branchCode: branchArea.branchCode,
          stroke: "#d41c1c",
          "stroke-width": 2,
          "stroke-opacity": 1,
          fill: "#555555",
          "fill-opacity": 0,
        },
      };
    }),
  };

  return geoJson;
};

export const generateDistancesFromDirections = (
  nodes: Node[],
  directions: Record<string, DirectionData>
) => {
  const distances: number[][] = [];

  nodes.forEach((node, rowIndex) => {
    distances.push([]);
    nodes.forEach((_, columnIndex) => {
      if (rowIndex === columnIndex) {
        distances[rowIndex].push(Infinity);
        return;
      }

      const key =
        rowIndex < columnIndex
          ? `${rowIndex}-${columnIndex}`
          : `${columnIndex}-${rowIndex}`;

      const direction = directions[key];

      if (!direction) {
        distances[rowIndex].push(Infinity);
        return;
      }

      distances[rowIndex].push(direction.routes[0].distance);
    });
  });

  return distances;
};

export const meterToKm = (meters: number) => {
  return meters / 1000;
};
