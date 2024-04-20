import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";
import Form from "../_components/Form";
import { generateRandomPassword } from "@/_utils";

const AddBranchAdminPage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md">Tambah Admin Cabang</Heading>
        </CardHeader>

        <CardBody>
          <Form
            initialValues={{
              name: "",
              branch: null,
              email: "",
              password: generateRandomPassword(),
            }}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default AddBranchAdminPage;
