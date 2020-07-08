import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
import VisibilitySensor from "react-visibility-sensor";
import { Button } from "./styles";
import Section from "../../Common/Section";
import List from "./BlogList";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useBlogApi from "hooks/useBlogApi";

const Spaces = () => {
  const { _getBlogsList } = useBlogApi();
  const { landingData, blogsData } = useGlobalState();
  const [blogsList, setBlogs] = React.useState([]);
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  function handleChange(isVisible: boolean) {
    if (isVisible)
      if (!blogsData)
        _getBlogsList(
          3,
          (data) => setBlogs(data),
          () => {}
        );
  }
  return data.isblogenabled ? (
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
        <List data={blogsList} />
        <Button>
          <Link href={`/blogs`}>
            {data && data.blogactiontext ? data.blogactiontext : ""}
          </Link>
        </Button>
      </Section>
    </VisibilitySensor>
  ) : null;
};
export default Spaces;
