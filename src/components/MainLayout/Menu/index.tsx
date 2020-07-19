import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link, Router } from "../../../../config/Next18Wrapper";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import { IoMdMenu } from "react-icons/io";
import {
  Wrapper,
  Content,
  Logo,
  CenterLogo,
  Menu,
  MenuItem,
  Button,
  SearchIcon,
  menuIcon,
} from "./styles";
import useGlobalApi from "hooks/useGlobalApi";
import useBlogApi from "hooks/useBlogApi";

interface IProps {}

const Header: React.FC<IProps> = (): JSX.Element => {
  const { headerData, landingData } = useGlobalState();
  const {
    _getBlogsPageData,
    _getLastBlog,
    _getCategoriesData,
    _getNewestBlogs,
    _getTagsData,
  } = useBlogApi();
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
    // if (!isServer) {
    //   Router.push("/");
    //   if (!landingData || landingData.length === 0) {
    //     getHomeData();
    //   } else Router.push("/");
    // } else Router.push("/");
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
    _getBlogsPageData();
    _getLastBlog();
    _getCategoriesData();
    _getNewestBlogs();
    _getTagsData();
  }
  function checkIsTransparent() {
    return router.pathname === "/";
  }
  function handleClickOnLogo() {
    _getHomeData();
  }
  return (
    <Wrapper isSticky={isSticky} isTransparent={checkIsTransparent()}>
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
        <CenterLogo src={headerObj ? headerObj["logo2"] : null} />
        <IoMdMenu className={menuIcon} />
        <Menu>
          <MenuItem
            selected={router.pathname === "/"}
            isSticky={isSticky}
            onClick={_getHomeData}
            isTransparent={checkIsTransparent()}
          >
            {headerObj ? headerObj.menuitem1text : ""}
          </MenuItem>
          <MenuItem
            selected={router.pathname === `/faq`}
            isSticky={isSticky}
            isTransparent={checkIsTransparent()}
            onClick={handleFAQClicked}
          >
            <Link href={`/faq`}>
              <a>{headerObj ? headerObj.menuitem3text : ""}</a>
            </Link>
          </MenuItem>
          <MenuItem
            selected={router.pathname === `/blogs`}
            isSticky={isSticky}
            isTransparent={checkIsTransparent()}
            onClick={handleBlogsClicked}
          >
            <Link href={`/blogs`}>
              <a>{headerObj ? headerObj.menuitem4text : ""}</a>
            </Link>
          </MenuItem>
          <MenuItem
            selected={router.pathname === `/contact-us`}
            isSticky={isSticky}
            isTransparent={checkIsTransparent()}
            onClick={handleContactUsClicked}
          >
            <Link href={`/contact-us`}>
              <a>{headerObj ? headerObj.menuitem5text : ""}</a>
            </Link>
          </MenuItem>
        </Menu>
        <Button>
          <span>+</span>
          {headerObj ? headerObj.action1text : ""}
        </Button>
        <SearchIcon />
      </Content>
    </Wrapper>
  );
};

export default Header;
