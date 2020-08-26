import { useEffect, useState } from "react";
import { Link } from "../../../../config/Next18Wrapper";
import { useRouter } from "next/router";
import LayoutBox from "../LayoutBox";
import { ListContainer, Button } from "./styles";
import useGlobalApi from "hooks/useGlobalApi";
import Item from "./Item";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const About = () => {
  const { query } = useRouter();
  const { getOffices } = useGlobalApi();
  const [dataList, setData] = useState<object[]>();
  const [loading, toggleLoading] = useState(true);
  const { cityDetailPage, cityDetail } = useGlobalState();
  const { getValue } = useObjectPropsValue();

  useEffect(() => {
    if ((!dataList || !dataList.length) && cityDetail) {
      getOffices(0, 6, { city: cityDetail?._id }, (data) => {
        setData(data);
        toggleLoading(false);
      });
    }
  }, [cityDetail]);

  function showAll() {}

  return (
    <LayoutBox
      title={getValue(cityDetailPage, "listsectiontitle")}
      actions={() => {
        return (
          <Button onClick={showAll}>
            <Link href={`/offices?city=${cityDetail?._id}`}>
              {getValue(cityDetailPage, "listsectionbuttontext")}
            </Link>
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
