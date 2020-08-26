import LayoutBox from "../LayoutBox";
import dynamic from "next/dynamic";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalState from "hooks/useGlobal/useGlobalState";
const HtmlViewer = dynamic(() => import("../../Common/TextEditorViewer"), {
  ssr: false,
});
const About = () => {
  const { cityDetailPage, cityDetail } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  return (
    <LayoutBox title={getValue(cityDetailPage, "aboutsectiontitle")}>
      <HtmlViewer content={getValue(cityDetail, "about")} />
    </LayoutBox>
  );
};

export default About;
