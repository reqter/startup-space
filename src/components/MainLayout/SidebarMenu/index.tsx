import { useRouter } from "next/router";
import { Link, Router } from "../../../../config/Next18Wrapper";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import { IoMdClose } from "react-icons/io";
import {
  Content,
  Header,
  CloseIcon,
  Logo,
  Menu,
  MenuItem,
  Button,
} from "./styles";
import useGlobalApi from "hooks/useGlobalApi";
import useBlogApi from "hooks/useBlogApi";
import useObjectPropsValue from "hooks/useObjectPropsValue";

interface IProps {
  handleCloseClicked: () => void;
}

const SideBarMenu: React.FC<IProps> = ({ handleCloseClicked }): JSX.Element => {
  const { getValue } = useObjectPropsValue();
  const { headerData, landingData } = useGlobalState();
  const { _callBlogPageApis } = useBlogApi();
  const {
    getHomeData,
    _getContactUsPageData,
    _getFAQsPageData,
    _getFAQsData,
  } = useGlobalApi();
  const headerObj = headerData ? headerData[0] : {};
  const router = useRouter();

  const _getHomeData = async () => {
    handleCloseClicked();
    Router.push("/");
    if (!landingData || landingData.length === 0) getHomeData();
  };
  function handleContactUsClicked() {
    handleCloseClicked();
    _getContactUsPageData();
  }
  function handleFAQClicked() {
    handleCloseClicked();
    _getFAQsPageData();
    _getFAQsData();
  }
  function handleBlogsClicked() {
    handleCloseClicked();
    _callBlogPageApis();
  }

  function handleClickOnLogo() {
    handleCloseClicked();
    _getHomeData();
  }
  function handleActionClicked() {
    const url = getValue(headerObj, "firstactionurl");
    if (url) {
      window.open(url, "_blank");
    }
  }
  return (
    <Content>
      <Header>
        <Logo
          src={headerObj ? headerObj.logo2 : null}
          onClick={handleClickOnLogo}
        />
        <CloseIcon onClick={handleCloseClicked}>
          <IoMdClose />
        </CloseIcon>
      </Header>
      <Menu>
        <MenuItem selected={router.pathname === "/"} onClick={_getHomeData}>
          {getValue(headerObj, "menuitem1text")}
        </MenuItem>
        <MenuItem
          selected={router.pathname === `/faq`}
          onClick={handleFAQClicked}
        >
          <Link href={`/faq`}>
            <a>{getValue(headerObj, "menuitem3text")}</a>
          </Link>
        </MenuItem>
        <MenuItem
          selected={router.pathname === `/blogs`}
          onClick={handleBlogsClicked}
        >
          <Link href={`/blogs`}>
            <a>{getValue(headerObj, "menuitem4text")}</a>
          </Link>
        </MenuItem>
        <MenuItem
          selected={router.pathname === `/contact-us`}
          onClick={handleContactUsClicked}
        >
          <Link href={`/contact-us`}>
            <a>{getValue(headerObj, "menuitem5text")}</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleActionClicked}>
          <a>{getValue(headerObj, "action1text")}</a>
        </MenuItem>
      </Menu>
    </Content>
  );
};

export default SideBarMenu;
