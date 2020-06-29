import React from "react";
import Card from "./Item";
import Loading from "./Loading";
import { Container, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const SpacesList = ({ dataList = [], loading, onMoreDataClicked }) => {
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
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      isSideSticky={
        !dataList || !dataList.length ? false : partnersStickySideBar
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
      ) : dataList ? (
        <>
          {dataList.map((item, index) => (
            <Card key={index} data={item} />
          ))}
          {dataList.length > 0 && (
            <div className="w-full flex justify-center">
              <Button onClick={onMoreDataClicked}>
                {getValue(partnersPageData, "pagingactiontitle")}
              </Button>
            </div>
          )}
        </>
      ) : null}
    </Container>
  );
};
export default SpacesList;
