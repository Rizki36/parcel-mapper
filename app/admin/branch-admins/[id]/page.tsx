"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "next/navigation";
import useBranchAdminsQuery from "@/_hooks/queries/useBranchAdminsQuery";
import UpdateForm from "../_components/UpdateForm";
import UpdatePasswordForm from "@/admin/couriers/[id]/_components/UpdatePasswordForm";

const BranchAdminDetailPage = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const { data, isLoading: loadingParcel } = useBranchAdminsQuery({
    id,
    pageIndex: 0,
    pageSize: 1,
    with: ["branch", "user"],
  });
  const branchAdmin = data?.data?.docs[0];

  return (
    <Flex h="100vh" flexDir="column">
      <Grid gridTemplateColumns="1fr 1fr" columnGap={6}>
        <GridItem h="100%">
          <Card h="100%">
            <CardHeader>
              <Heading size="md">Data Admin Cabang</Heading>
            </CardHeader>

            <CardBody>
              {!loadingParcel && branchAdmin ? (
                <UpdateForm
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
        </GridItem>
        <GridItem h="100%">
          <Card h="100%">
            <CardHeader>
              <Heading size="md">Ubah Password</Heading>
            </CardHeader>

            <CardBody>
              <UpdatePasswordForm userId={branchAdmin?.userId ?? ""} />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default BranchAdminDetailPage;
