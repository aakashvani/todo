// import React from 'react';
// import HookForm from "./HookForm";

import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import HookForm from "../components/HookForm";
const SignUp = () => {
  return (
    <>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Box p={4}>
        <HookForm />
      </Box>
    </>
  );
};

export default SignUp;
