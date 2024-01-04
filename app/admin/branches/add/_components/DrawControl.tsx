import MapboxDraw, {
  DrawCreateEvent,
  DrawDeleteEvent,
  DrawUpdateEvent,
} from "@mapbox/mapbox-gl-draw";
import { FC, useEffect, useState } from "react";
import { useControl } from "react-map-gl";

import type { ControlPosition } from "react-map-gl";
import { AreaLocation } from "../page";

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & {
  areas: AreaLocation[];
  position?: ControlPosition;
  onCreate: (_evt: DrawCreateEvent) => void;
  onUpdate: (_evt: DrawUpdateEvent) => void;
  onDelete: (_evt: DrawDeleteEvent) => void;
};

const DrawControl: FC<DrawControlProps> = ({ areas, ...props }) => {
  const [tempAreas, setTempAreas] = useState<AreaLocation[]>();

  const draw = useControl<MapboxDraw>(
    () => new MapboxDraw(props),
    ({ map }) => {
      map.on("draw.create", props.onCreate);
      map.on("draw.update", props.onUpdate);
      map.on("draw.delete", props.onDelete);
    },
    ({ map }) => {
      map.off("draw.create", props.onCreate);
      map.off("draw.update", props.onUpdate);
      map.off("draw.delete", props.onDelete);
    },
    {
      position: props.position,
    }
  );

  // draw only once when areas is set
  useEffect(() => {
    if (areas.length && !tempAreas?.length) {
      setTempAreas(areas);

      draw.add({
        type: "Polygon",
        coordinates: [areas.map((area) => [area.longitude, area.latitude])],
      });
    }
  }, [areas, draw, tempAreas]);

  return null;
};

export default DrawControl;
