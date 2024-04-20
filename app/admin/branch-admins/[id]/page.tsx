"use client";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";
import Form from "../_components/Form";
import { useParams } from "next/navigation";
import useBranchAdminsQuery from "@/_hooks/queries/useBranchAdminsQuery";

const BranchAdminDetailPage = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const { data, isLoading: loadingParcel } = useBranchAdminsQuery({
    id,
    pageIndex: 0,
    pageSize: 1,
    with: ["branch"],
  });
  const branchAdmin = data?.data?.docs[0];

  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md">Data Admin Cabang</Heading>
        </CardHeader>

        <CardBody>
          {!loadingParcel && branchAdmin ? (
            <Form
              mode="edit"
              id={id}
              initialValues={{
                name: branchAdmin?.name,
                branch: branchAdmin?.branch
                  ? {
                      label: branchAdmin?.branch?.name,
                      value: branchAdmin?.branch?.id,
                    }
                  : null,
                email: branchAdmin?.user?.email ?? "",
              }}
            />
          ) : null}
        </CardBody>
      </Card>
    </div>
  );
};

export default BranchAdminDetailPage;
