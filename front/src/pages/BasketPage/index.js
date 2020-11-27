import React from "react";
import Container from "@material-ui/core/Container";

import { Menu } from "components";

const BasketPage = () => {
  return (
    <>
      <Menu title="Koszyk" />
      <Container maxWidth="md">basket</Container>
    </>
  );
};

export default BasketPage;
