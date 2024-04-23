import React from "react";
import { Select } from "chakra-react-select";
import useSelectBranchData from "../../../_hooks/useSelectBranchData";
import useCustomRouter from "@/_hooks/useCustomRouter";
import useSelectBranchOptions from "../../../_hooks/useSelectBranchOptions";
import useMappingPageQuery from "../_hooks/useMappingPageQuery";

const SelectBranch = () => {
  const { branchOptions } = useSelectBranchOptions();
  const { branchId } = useMappingPageQuery();
  const { branch } = useSelectBranchData({ branchId });
  const { pushReplaceFilter, pushRemoveFilter } = useCustomRouter();

  return (
    <Select
      colorScheme="teal"
      size="sm"
      placeholder="Pilih cabang tujuan"
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
          pushRemoveFilter("/admin/mapping", "branchId");
          return;
        }

        pushReplaceFilter("/admin/mapping", "branchId", value?.value);
      }}
      menuPortalTarget={document.body}
      styles={{
        menuPortal: (styles) => ({
          ...styles,
          zIndex: 9999,
        }),
      }}
    />
  );
};

export default SelectBranch;
