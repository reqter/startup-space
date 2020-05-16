import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link, Router } from "../../../config/Next18Wrapper";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "../../hooks/useGlobal/useGlobalDispatch";
import isServer from "../../utils/isServer";
import {
  Wrapper,
  Content,
  Logo,
  Menu,
  MenuItem,
  Button,
  SearchIcon,
} from "./styles";
import useGlobalApi from "../../hooks/useGlobalApi";

interface IProps {}

const Header: React.FC<IProps> = (): JSX.Element => {
  const { headerData, landingData } = useGlobalState();
  const { getHomeData } = useGlobalApi();
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
    if (!isServer) {
      if (!landingData || landingData.length === 0) {
        getHomeData(
          () => Router.push("/"),
          () => {}
        );
      } else Router.push("/");
    } else Router.push("/");
  };
  return (
    <Wrapper isSticky={isSticky}>
      <Content>
        {isSticky ? (
          <Logo src={headerObj["logo2"]} />
        ) : (
          <Logo src={headerObj.logo1} />
        )}

        <Menu>
          <MenuItem
            selected={router.pathname === "/"}
            isSticky={isSticky}
            onClick={_getHomeData}
          >
            {headerObj.menuitem1text}
          </MenuItem>
          <MenuItem
            selected={router.pathname === `/spaces`}
            isSticky={isSticky}
          >
            <Link href={`/spaces`}>
              <a>{headerObj.menuitem2text}</a>
            </Link>
          </MenuItem>
          <MenuItem isSticky={isSticky}>
            <a>{headerObj.menuitem3text}</a>
          </MenuItem>
          <MenuItem isSticky={isSticky}>
            <a>{headerObj.menuitem4text}</a>
          </MenuItem>
          <MenuItem isSticky={isSticky}>
            <a>{headerObj.menuitem5text}</a>
          </MenuItem>
        </Menu>
        <Button>+{headerObj.action1text}</Button>
        <SearchIcon />
      </Content>
    </Wrapper>
  );
};

export default Header;
