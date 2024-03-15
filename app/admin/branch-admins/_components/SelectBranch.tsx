import React from "react";
import { Select } from "chakra-react-select";
import useCustomRouter from "@/_hooks/useCustomRouter";
import useSelectBranchData from "@/_hooks/useSelectBranchData";
import useSelectBranchOptions from "@/admin/couriers/_hooks/useSelectBranchOptions";
import useBranchAdminsPageSearchParams from "../_hooks/useBranchAdminsPageSearchParams";

const SelectBranch = () => {
  const { branchOptions } = useSelectBranchOptions();
  const { branchId } = useBranchAdminsPageSearchParams();
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
          pushRemoveFilter("/admin/branch-admins", "branchId");
          return;
        }

        pushReplaceFilter("/admin/branch-admins", "branchId", value?.value);
      }}
    />
  );
};

export default SelectBranch;
