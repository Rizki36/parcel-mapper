import React from "react";
import { Select } from "chakra-react-select";
import useSelectBranchData from "../../../_hooks/useSelectBranchData";
import useCustomRouter from "@/_hooks/useCustomRouter";
import useSelectBranchOptions from "../../../_hooks/useSelectBranchOptions";
import useCouriersPageQuery from "../_hooks/useCouriersPageQuery";

const SelectBranch = () => {
  const { branchOptions } = useSelectBranchOptions();
  const { branchId } = useCouriersPageQuery();
  const { branch } = useSelectBranchData({ branchId });
  const { pushReplaceFilter, pushRemoveFilter } = useCustomRouter();

  return (
    <Select
      colorScheme="teal"
      size="sm"
      placeholder="Pilih cabang"
      isClearable
      onInputChange={(value) => console.log(value)}
      options={branchOptions}
      value={
        branch
          ? {
              value: branch.id,
              label: `${branch.name} - (${branch.branchCode})`,
            }
          : null
      }
      onChange={(value) => {
        if (!value?.value) {
          pushRemoveFilter("/admin/couriers", "branchId");
          return;
        }

        pushReplaceFilter("/admin/couriers", "branchId", value?.value);
      }}
    />
  );
};

export default SelectBranch;
