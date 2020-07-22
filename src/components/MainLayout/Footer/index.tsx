import { useState, useEffect } from "react";
import Select from "react-select";
import { i18n, config } from "../../../../config/Next18Wrapper";
import Router from "next/router";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";
import VisibilitySensor from "react-visibility-sensor";
import Section from "components/Common/Section";
import Box from "./Box";
import FeatureItem from "./FeatureItem";
import {
  Container,
  SocialContainer,
  CopyRight,
  socialIconStyle,
  SocialLink,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useGlobalApi from "hooks/useGlobalApi";

const Footer = () => {
  const { dispatch } = useGlobalDispatch();
  const { _getNewOffices } = useGlobalApi();
  const {
    currentLanguage,
    headerData,
    footerData,
    isVisibleFooter,
    curentRouterName,
  } = useGlobalState();
  const [newOfficess, setNewOffices] = useState([]);
  const header = headerData ? headerData[0] : {};
  const footer = footerData && footerData.length ? footerData[0] : {};
  useEffect(() => {
    if (!newOfficess || !newOfficess.length) {
      _getNewOffices(
        (result) => {
          setNewOffices(result);
        },
        () => {}
      );
    }
  }, []);
  const handleChange = (isVisible: boolean) => {
    if (isVisible) {
      dispatch({
        type: "TOGGLE_FOOTER_VISIBILITY",
        payload: true,
      });
    } else {
      if (isVisibleFooter) {
        dispatch({
          type: "TOGGLE_FOOTER_VISIBILITY",
          payload: false,
        });
      }
    }
  };
  function handleLangChanged(lang) {
    const path = window.location.href.replace(currentLanguage, lang.value);
    window.location.href = path;
  }
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility={true}
      offset={{ bottom: curentRouterName === "partners" ? -52 : 52 }}
    >
      <Section bgColor={theme`colors.black`}>
        <Container>
          <Box title={footer.aboutustitle}>
            <span>{footer.aboutusdescription}</span>
            <br />
            <Box title={footer.languagetitle}>
              <Select
                menuPlacement="bottom"
                closeMenuOnScroll={true}
                closeMenuOnSelect={true}
                options={config.allLanguages.map((lang) => {
                  return {
                    value: lang,
                    label: lang,
                  };
                })}
                styles={{
                  option: (base) => ({
                    ...base,
                    color: "black",
                  }),
                }}
                isMulti={false}
                isSearchable={false}
                onChange={handleLangChanged}
                defaultValue={{
                  value: currentLanguage,
                  label: currentLanguage,
                }}
              />
            </Box>
          </Box>
          <Box title={footer.featuredtitle}>
            {newOfficess &&
              newOfficess.map((item, index) => (
                <FeatureItem key={index} data={item} />
              ))}
          </Box>
          <Box title={footer.usefullinkstitle}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${footer.link1url}`}
                >
                  {footer.link1title}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${footer.link2url}`}
                >
                  {footer.link2title}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${footer.link3url}`}
                >
                  {footer.link3title}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${footer.link4url}`}
                >
                  {footer.link4title}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${footer.link5url}`}
                >
                  {footer.link5title}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${footer.link6url}`}
                >
                  {footer.link6title}
                </a>
              </li>
            </ul>
          </Box>
          <Box title={footer.sociallinkstitle}>
            <SocialContainer>
              {header && header.facebookurl && (
                <SocialLink href={header.facebookurl} target="_blank">
                  <IoLogoFacebook className={socialIconStyle} />
                </SocialLink>
              )}
              {header && header.instagramurl && (
                <SocialLink href={header.instagramurl} target="_blank">
                  <IoLogoInstagram className={socialIconStyle} />
                </SocialLink>
              )}
              {header && header.linkedinurl && (
                <SocialLink href={header.linkedinurl} target="_blank">
                  <IoLogoLinkedin className={socialIconStyle} />
                </SocialLink>
              )}
            </SocialContainer>
          </Box>
        </Container>
        <CopyRight>{footer.copyright}</CopyRight>
      </Section>
    </VisibilitySensor>
  );
};
export default Footer;

const CustomOption = ({ innerProps, isDisabled, data }) => {
  if (!isDisabled) {
    return (
      <div {...innerProps} className={"text-sm text-gray-900"}>
        {data.label}
      </div>
    );
  } else return null;
};
