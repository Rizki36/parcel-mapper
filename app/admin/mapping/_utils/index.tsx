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
