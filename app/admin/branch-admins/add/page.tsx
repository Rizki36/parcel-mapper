import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";
import Form from "../_components/Form";

const AddBranchAdminPage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md">Tambah Admin Cabang</Heading>
        </CardHeader>

        <CardBody>
          <Form
            mode="add"
            initialValues={{
              name: "",
              branch: null,
            }}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default AddBranchAdminPage;
