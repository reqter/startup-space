import NotFound from "components/Common/NotFoundItem";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";

const ContentNotFound = () => {
  const { notFoundPageInfo, landingData } = useGlobalState();
  const { getHomeData } = useGlobalApi();
  const { includeImageBaseUrl, getValue } = useObjectPropsValue();
  const img =
    notFoundPageInfo && notFoundPageInfo.image
      ? includeImageBaseUrl(notFoundPageInfo.image[0], "image", 500, 500)
      : "";
  function handleClick() {
    if (!landingData || landingData.length === 0) getHomeData();
  }
  return (
    <NotFound
      image={img}
      title={getValue(notFoundPageInfo, "title")}
      description={getValue(notFoundPageInfo, "description")}
      actionText={getValue(notFoundPageInfo, "actionbuttontext")}
      action={handleClick}
      url={"/"}
    />
  );
};
export default ContentNotFound;
