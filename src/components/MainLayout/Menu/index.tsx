import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link, Router } from "../../../../config/Next18Wrapper";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import { IoMdMenu } from "react-icons/io";
import SidebarMenu from "../SidebarMenu";
import {
  Wrapper,
  Content,
  Logo,
  CenterLogo,
  Menu,
  MenuItem,
  Button,
  PhoneMenuWrapper,
  SearchIcon,
  NavBarIcon,
} from "./styles";
import useGlobalApi from "hooks/useGlobalApi";
import useBlogApi from "hooks/useBlogApi";
import useObjectPropsValue from "hooks/useObjectPropsValue";

interface IProps {}

const Header: React.FC<IProps> = (): JSX.Element => {
  const { getValue } = useObjectPropsValue();
  const { headerData, landingData } = useGlobalState();
  const { _callBlogPageApis } = useBlogApi();
  const {
    getHomeData,
    _getPartnersPageData,
    _getContactUsPageData,
    _getFAQsPageData,
    _getFAQsData,
  } = useGlobalApi();
  const headerObj = headerData ? headerData[0] : {};
  const router = useRouter();
  const [isSticky, setSticky] = useState<boolean>(false);
  const [isOpenSideBar, toggleSideBar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 45) setSticky(false);
      else setSticky(true);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const _getHomeData = async () => {
    Router.push("/");
    if (!landingData || landingData.length === 0) getHomeData();
  };
  function getOfficesData() {
    _getPartnersPageData();
  }
  function handleContactUsClicked() {
    _getContactUsPageData();
  }
  function handleFAQClicked() {
    _getFAQsPageData();
    _getFAQsData();
  }
  function handleBlogsClicked() {
    _callBlogPageApis();
  }

  function checkIsTransparent() {
    return router.pathname === "/";
  }
  function handleClickOnLogo() {
    _getHomeData();
  }
  function handleActionClicked() {
    const url = getValue(headerObj, "firstactionurl");
    if (url) {
      window.open(url, "_blank");
    }
  }
  function openSideBar() {
    toggleSideBar(true);
  }
  function closeSideBar() {
    toggleSideBar(false);
  }
  return (
    <>
      <Wrapper
        className={isSticky || !checkIsTransparent() ? "shadow-md" : ""}
        isSticky={isSticky}
        isTransparent={checkIsTransparent()}
      >
        <Content>
          {router.pathname !== "/" || isSticky ? (
            <Logo
              src={headerObj ? headerObj["logo2"] : null}
              onClick={handleClickOnLogo}
            />
          ) : (
            <Logo
              src={headerObj ? headerObj.logo1 : null}
              onClick={handleClickOnLogo}
            />
          )}
          <PhoneMenuWrapper>
            <NavBarIcon onClick={openSideBar}>
              <IoMdMenu />
            </NavBarIcon>
            <CenterLogo
              onClick={handleClickOnLogo}
              src={
                router.pathname !== "/" || isSticky
                  ? headerObj["logo2"]
                  : headerObj["logo1"]
              }
            />
          </PhoneMenuWrapper>
          <Menu>
            <MenuItem
              selected={router.pathname === "/"}
              isSticky={isSticky}
              onClick={_getHomeData}
              isTransparent={checkIsTransparent()}
            >
              {getValue(headerObj, "menuitem1text")}
            </MenuItem>
            <MenuItem
              selected={router.pathname === `/faq`}
              isSticky={isSticky}
              isTransparent={checkIsTransparent()}
              onClick={handleFAQClicked}
            >
              <Link href={`/faq`}>
                <a>{getValue(headerObj, "menuitem3text")}</a>
              </Link>
            </MenuItem>
            <MenuItem
              selected={router.pathname === `/blogs`}
              isSticky={isSticky}
              isTransparent={checkIsTransparent()}
              onClick={handleBlogsClicked}
            >
              <Link href={`/blogs`}>
                <a>{getValue(headerObj, "menuitem4text")}</a>
              </Link>
            </MenuItem>
            <MenuItem
              selected={router.pathname === `/contact-us`}
              isSticky={isSticky}
              isTransparent={checkIsTransparent()}
              onClick={handleContactUsClicked}
            >
              <Link href={`/contact-us`}>
                <a>{getValue(headerObj, "menuitem5text")}</a>
              </Link>
            </MenuItem>
          </Menu>
          <Button onClick={handleActionClicked}>
            {getValue(headerObj, "action1text")}
          </Button>
          <SearchIcon />
        </Content>
      </Wrapper>
      {isOpenSideBar ? <SidebarMenu handleCloseClicked={closeSideBar} /> : null}
    </>
  );
};

export default Header;
