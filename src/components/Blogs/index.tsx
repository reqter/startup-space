import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Button } from "./styles";
import Section from "../Common/Section";
import List from "./BlogList";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
import useGlobalApi from "../../hooks/useGlobalApi";

const Spaces = () => {
  const { getBlogs } = useGlobalApi();
  const { landingData, blogsData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  function handleChange(isVisible: boolean) {
    if (isVisible) if (!blogsData) getBlogs(3);
  }
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility={true}
      offset={{ bottom: -100 }}
    >
      <Section
        bgColor={theme`colors.white`}
        title={data.blogheading}
        header={data.blogtitle}
      >
        <List />
        <Button>{data.blogactiontext}</Button>
      </Section>
    </VisibilitySensor>
  );
};
export default Spaces;
