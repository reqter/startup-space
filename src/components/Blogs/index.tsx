import React from "react";
import { Button } from "./styles";
import Section from "../Common/Section";
import List from "./BlogList";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";

const Spaces = () => {
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  return (
    <Section
      bgColor={theme`colors.white`}
      title={data.blogheading}
      header={data.blogtitle}
    >
      <List />
      <Button>{data.blogactiontext}</Button>
    </Section>
  );
};
export default Spaces;
