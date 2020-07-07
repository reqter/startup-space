import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link, Router } from "../../../../config/Next18Wrapper";
import useGlobalState from "hooks/useGlobal/useGlobalState";

import {
  Wrapper,
  Content,
  Logo,
  Menu,
  MenuItem,
  Button,
  SearchIcon,
} from "./styles";
import useGlobalApi from "hooks/useGlobalApi";

interface IProps {}

const Header: React.FC<IProps> = (): JSX.Element => {
  const { headerData, landingData } = useGlobalState();
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
  function checkIsTransparent() {
    return router.pathname === "/";
  }
  return (
    <Wrapper isSticky={isSticky} isTransparent={checkIsTransparent()}>
      <Content>
        {router.pathname !== "/" || isSticky ? (
          <Logo src={headerObj["logo2"]} />
        ) : (
          <Logo src={headerObj.logo1} />
        )}

        <Menu>
          <MenuItem
            selected={router.pathname === "/"}
            isSticky={isSticky}
            onClick={_getHomeData}
            isTransparent={checkIsTransparent()}
          >
            {headerObj.menuitem1text}
          </MenuItem>
          <MenuItem
            selected={router.pathname === `/offices`}
            isSticky={isSticky}
            isTransparent={checkIsTransparent()}
            onClick={getOfficesData}
          >
            <Link href={`/offices`}>
              <a>{headerObj.menuitem2text}</a>
            </Link>
          </MenuItem>
          <MenuItem
            selected={router.pathname === `/faq`}
            isSticky={isSticky}
            isTransparent={checkIsTransparent()}
            onClick={handleFAQClicked}
          >
            <Link href={`/faq`}>
              <a>{headerObj.menuitem3text}</a>
            </Link>
          </MenuItem>
          <MenuItem
            selected={router.pathname === `/blogs`}
            isSticky={isSticky}
            isTransparent={checkIsTransparent()}
          >
            <Link href={`/blogs`}>
              <a>{headerObj.menuitem4text}</a>
            </Link>
          </MenuItem>
          <MenuItem
            selected={router.pathname === `/contact-us`}
            isSticky={isSticky}
            isTransparent={checkIsTransparent()}
            onClick={handleContactUsClicked}
          >
            <Link href={`/contact-us`}>
              <a>{headerObj.menuitem5text}</a>
            </Link>
          </MenuItem>
        </Menu>
        <Button>
          <span>+</span>
          {headerObj.action1text}
        </Button>
        <SearchIcon />
      </Content>
    </Wrapper>
  );
};

export default Header;
