import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link, Router } from "../../../../config/Next18Wrapper";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import {
  IoMdMenu,
  IoIosGlobe,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import SidebarMenu from "../SidebarMenu";
import SearchInput from "./SearchInput";
import {
  Wrapper,
  Content,
  Logo,
  CenterLogo,
  Menu,
  MenuItem,
  ButtonsContainer,
  Button,
  PhoneMenuWrapper,
  NavBarIcon,
  Translations,
  TranslationButton,
  LanguagesContainer,
  LanguageItem,
} from "./styles";
import useGlobalApi from "hooks/useGlobalApi";
import useBlogApi from "hooks/useBlogApi";
import useObjectPropsValue from "hooks/useObjectPropsValue";

interface IProps {}

const Header: React.FC<IProps> = (): JSX.Element => {
  const { getValue, objectToQuerystring } = useObjectPropsValue();
  const {
    isPartnerDetailPage,
    partnerDetail,
    headerData,
    landingData,
    currentLanguage,
  } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { _callBlogPageApis } = useBlogApi();
  const {
    getHomeData,
    _getPartnersPageData,
    _getContactUsPageData,
    _getFAQsPageData,
    _getFAQsData,
    _getAppLocales,
  } = useGlobalApi();
  const headerObj = headerData ? headerData[0] : {};
  const router = useRouter();
  const [isSticky, setSticky] = useState<boolean>(false);
  const [isOpenSideBar, toggleSideBar] = useState<boolean>(false);
  const [languagesOption, setLanguagesOption] = useState([]);
  const [isOpenLanguagesContainer, toggleLanguagesContainer] = useState(false);

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
  useEffect(() => {
    _getAppLocales(
      (result) => setLanguagesOption(result),
      () => {}
    );
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
  function handleClickTranslations() {
    toggleLanguagesContainer((prev) => !prev);
  }
  function handleLangClicked(item) {
    const path = window.location.href.replace(currentLanguage, item.value);
    window.location.href = path;
  }
  function handleSearchClicked(data) {
    const values = {
      name: data,
    };
    dispatch({
      type: "SET_PARTNERS_QUERY_DATA",
      payload: {
        data: values,
        isNeedConvert: false,
      },
    });
    dispatch({
      type: "TOGGLE_IS_PARTNER_DETAIL_PAGE",
      payload: false,
    });
    const s = objectToQuerystring(values);
    Router.push(`/offices${s && s.length ? s : ""}`);
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
          {!isPartnerDetailPage ? (
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
          ) : (
            <SearchInput
              placeholder={getValue(headerObj, "searchinputtitle")}
              onSearchClicked={handleSearchClicked}
            />
          )}
          <ButtonsContainer
            isPartnerDetailPage={
              isPartnerDetailPage &&
              partnerDetail &&
              partnerDetail.visitingenabled
            }
          >
            <Translations onClick={handleClickTranslations}>
              <TranslationButton>
                <IoIosArrowDown size=".9em" />
                <IoIosGlobe size="1.2em" />
              </TranslationButton>
              {isOpenLanguagesContainer ? (
                <LanguagesContainer>
                  {languagesOption
                    ? languagesOption.map((item, index) => {
                        return (
                          <LanguageItem
                            key={index}
                            onClick={() => handleLangClicked(item)}
                          >
                            {item.label}
                          </LanguageItem>
                        );
                      })
                    : null}
                </LanguagesContainer>
              ) : null}
            </Translations>
            <Button name="partnersPanel" onClick={handleActionClicked}>
              {getValue(headerObj, "action1text")}
            </Button>
            {isPartnerDetailPage &&
            partnerDetail &&
            partnerDetail.visitingenabled ? (
              <Button name="visit" isPartnerDetailPage={isPartnerDetailPage}>
                {getValue(headerObj, "secondactiontext")}
              </Button>
            ) : null}
          </ButtonsContainer>
        </Content>
      </Wrapper>
      {isOpenSideBar ? <SidebarMenu handleCloseClicked={closeSideBar} /> : null}
    </>
  );
};

export default Header;
