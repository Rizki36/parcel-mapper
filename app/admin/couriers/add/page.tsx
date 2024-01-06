import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";
import Form from "./_components/Form";

const AddCourierPage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md">Tambah Kurir</Heading>
        </CardHeader>

        <CardBody>
          <Form />
        </CardBody>
      </Card>
    </div>
  );
};

export default AddCourierPage;
