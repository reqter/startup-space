import { useEffect, useState } from "react";
import { Link, Router } from "../../../../config/Next18Wrapper";
import { useRouter } from "next/router";
import LayoutBox from "../LayoutBox";
import { ListContainer, Button } from "./styles";
import useGlobalApi from "hooks/useGlobalApi";
import Item from "./Item";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";

const About = () => {
  const { query } = useRouter();
  const { dispatch } = useGlobalDispatch();
  const { getOffices } = useGlobalApi();
  const [dataList, setData] = useState<object[]>();
  const [loading, toggleLoading] = useState(true);
  const { cityDetailPage, cityDetail } = useGlobalState();
  const { getValue, objectToQuerystring } = useObjectPropsValue();

  useEffect(() => {
    if ((!dataList || !dataList.length) && cityDetail) {
      getOffices(0, 6, { city: cityDetail?._id }, (data) => {
        setData(data);
        toggleLoading(false);
      });
    }
  }, [cityDetail]);

  function showAll() {
    const values = {
      city: cityDetail?._id,
    };
    dispatch({
      type: "SET_PARTNERS_QUERY_DATA",
      payload: {
        data: values,
        isNeedConvert: false,
      },
    });
    const s = objectToQuerystring(values);
    Router.push(`/offices${s && s.length ? s : ""}`);
  }

  return (
    <LayoutBox
      title={getValue(cityDetailPage, "listsectiontitle")}
      actions={() => {
        return (
          <Button onClick={showAll}>
            {getValue(cityDetailPage, "listsectionbuttontext")}
          </Button>
        );
      }}
    >
      <ListContainer>
        {dataList
          ? dataList.map((item, index) => <Item key={index} data={item} />)
          : null}
      </ListContainer>
    </LayoutBox>
  );
};

export default About;
