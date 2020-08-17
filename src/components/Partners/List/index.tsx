import React from "react";
import Card from "./Item";
import EmptyList from "components/Common/EmptyList";
import Loading from "components/Common/CardSkeleton";
import { Container, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { isPhone, isTabPort } from "utils";

const SpacesList = ({
  dataList = [],
  showMoreButton,
  loading,
  onMoreDataClicked,
}) => {
  const { partnersPageData, partnersStickySideBar } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const { dispatch } = useGlobalDispatch();
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      if (containerTop <= 100) {
        dispatch({
          type: "TOGGLE_PARTNERS_STICKY_SIDE_BAR",
          payload: true,
        });
      } else {
        dispatch({
          type: "TOGGLE_PARTNERS_STICKY_SIDE_BAR",
          payload: false,
        });
      }
    };
    if (!isTabPort() && !isPhone()) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      isSideSticky={
        !dataList || dataList.length <= 4 ? false : partnersStickySideBar
      }
      ref={containerRef}
    >
      {loading ? (
        <div className="flex w-full flex-wrap">
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      ) : !dataList || !dataList.length ? (
        <EmptyList
          text={partnersPageData.emptylisttext}
          image={partnersPageData.emptylistimage}
          description={partnersPageData.emptylistdescription}
        />
      ) : (
        <>
          {dataList.map((item, index) => (
            <Card key={index} data={item} />
          ))}
          {showMoreButton > 0 && (
            <div className="w-full flex justify-center">
              <Button onClick={onMoreDataClicked}>
                {getValue(partnersPageData, "pagingactiontitle")}
              </Button>
            </div>
          )}
        </>
      )}
    </Container>
  );
};
export default SpacesList;
