import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Link, i18n } from "../../../config/Next18Wrapper";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
import {
  Wrapper,
  Content,
  Logo,
  Menu,
  MenuItem,
  Button,
  SearchIcon,
} from "./styles";
interface IProps {
  t: (key: string) => {};
  data: any;
}
const Header: React.FC<IProps> = ({ data }): JSX.Element => {
  const headerObj = data ? data[0] : {};
  const { currentLanguage } = useGlobalState();
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
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Wrapper isSticky={isSticky}>
      <Content>
        {isSticky ? (
          <Logo
            src={
              currentLanguage &&
              headerObj.fields["logo2"][0][currentLanguage].replace(
                "https://assets.herokuapp.com",
                "https://assets.reqter.com"
              )
            }
          />
        ) : (
          <Logo
            src={
              headerObj.fields &&
              headerObj.fields.logo1[0][currentLanguage].replace(
                "https://assets.herokuapp.com",
                "https://assets.reqter.com"
              )
            }
          />
        )}

        <Menu>
          <MenuItem selected={router.pathname === "/"} isSticky={isSticky}>
            <Link href={`/`}>
              <a>
                {headerObj.fields &&
                  headerObj.fields.menuitem1text[currentLanguage]}
              </a>
            </Link>
          </MenuItem>
          <MenuItem
            selected={router.pathname === `/spaces`}
            isSticky={isSticky}
          >
            <Link href={`/spaces`}>
              <a>
                {headerObj.fields &&
                  headerObj.fields.menuitem2text[currentLanguage]}
              </a>
            </Link>
          </MenuItem>
          <MenuItem isSticky={isSticky}>
            <a>
              {headerObj.fields &&
                headerObj.fields.menuitem3text[currentLanguage]}
            </a>
          </MenuItem>
          <MenuItem isSticky={isSticky}>
            <a>
              {headerObj.fields &&
                headerObj.fields.menuitem4text[currentLanguage]}
            </a>
          </MenuItem>
          <MenuItem isSticky={isSticky}>
            <a>
              {headerObj.fields &&
                headerObj.fields.menuitem5text[currentLanguage]}
            </a>
          </MenuItem>
        </Menu>
        <Button>
          +{headerObj.fields && headerObj.fields.action1text[currentLanguage]}
        </Button>
        <SearchIcon />
      </Content>
    </Wrapper>
  );
};

export default Header;
