import React from "react";
import { Button } from "./styles";
import Section from "../Common/Section";
import List from "./BlogList";

const Spaces = () => {
  return (
    <Section
      bgColor={theme`colors.white`}
      title="اخبار"
      header="آخرین وبلاگ ما"
    >
      <List />
      <Button>وبلاگ های بیشتر</Button>
    </Section>
  );
};
export default Spaces;
