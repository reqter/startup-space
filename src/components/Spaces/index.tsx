import React from "react";
import { withTranslation } from "../../../config/Next18Wrapper";
import { Button } from "./styles";
import Section from "../Common/Section";
import Categories from "./Categories";
import SpacesList from "./SpacesList";

const Spaces = () => {
  return (
    <Section
      bgColor={theme`colors.gray.100`}
      title="فضای کار"
      header="فضای کار اشتراکی"
    >
      <Categories />
      <SpacesList />
      <Button>مکان های بیشتر</Button>
    </Section>
  );
};
export default Spaces;
