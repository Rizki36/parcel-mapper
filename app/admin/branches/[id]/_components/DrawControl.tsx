import { GetOneBranchData } from "@/api/branch/[id]/route";
import MapboxDraw, {
  DrawCreateEvent,
  DrawDeleteEvent,
  DrawUpdateEvent,
} from "@mapbox/mapbox-gl-draw";
import { Branch } from "@prismaorm/generated/client";
import { FC, useEffect, useState } from "react";
import { useControl } from "react-map-gl";

import type { ControlPosition } from "react-map-gl";

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & {
  position?: ControlPosition;
  onCreate: (_evt: DrawCreateEvent) => void;
  onUpdate: (_evt: DrawUpdateEvent) => void;
  onDelete: (_evt: DrawDeleteEvent) => void;
  branch: GetOneBranchData | undefined;
};

const DrawControl: FC<DrawControlProps> = ({ branch, ...props }) => {
  const [tempBranch, setTempBranch] = useState<Branch | undefined>();

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

  // draw only once when branch is set
  useEffect(() => {
    if (branch && !tempBranch) {
      setTempBranch(branch);
      const coordinate =
        branch?.area?.map?.((area) => {
          return [area.longitude, area.latitude];
        }) || [];

      console.log(coordinate);

      draw.add({
        type: "Polygon",
        coordinates: [coordinate],
      });
    }
  }, [branch, draw, tempBranch]);

  return null;
};

export default DrawControl;
