import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { useControl } from "react-map-gl";

import type { ControlPosition } from "react-map-gl";

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & {
  position?: ControlPosition;

  onCreate: (_evt: { features: object[] }) => void;
  onUpdate: (_evt: { features: object[]; action: string }) => void;
  onDelete: (_evt: { features: object[] }) => void;
};

export default function DrawControl(props: DrawControlProps) {
  useControl<MapboxDraw>(
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

  return null;
}

DrawControl.defaultProps = {
  onCreate: () => {},
  onUpdate: () => {},
  onDelete: () => {},
};
