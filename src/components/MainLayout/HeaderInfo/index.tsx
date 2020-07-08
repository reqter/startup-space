import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import {
  IoIosCall,
  IoMdMail,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";
import {
  Wrapper,
  Content,
  PhoneNumber,
  Email,
  SocialLinks,
  iconStyle,
  iconStylePhone,
  facebookStyle,
  instagramStyle,
  linkedinStyle,
} from "./styles";

const HeaderInfo = () => {
  const { headerData } = useGlobalState();
  const data = headerData ? headerData[0] : {};
  const { getValue } = useObjectPropsValue();

  function handleFBClicked() {
    window.open(data.facebookurl, "_blank");
  }
  function handleInstagramClicked() {
    window.open(data.instagramurl, "_blank");
  }
  function handleLinkedinClicked() {
    window.open(data.linkedinurl, "_blank");
  }

  return (
    <Wrapper>
      <Content>
        {data && data.phonenumber && (
          <PhoneNumber>
            <IoIosCall className={iconStylePhone} />
            {getValue(data, "phonenumber")}
          </PhoneNumber>
        )}
        {data && data.email && (
          <Email>
            <IoMdMail className={iconStyle} />
            {getValue(data, "email")}
          </Email>
        )}
        <SocialLinks>
          {data && data.facebookurl && (
            <IoLogoFacebook
              className={facebookStyle}
              onClick={handleFBClicked}
            />
          )}
          {data && data.instagramurl && (
            <IoLogoInstagram
              className={instagramStyle}
              onClick={handleInstagramClicked}
            />
          )}
          {data && data.linkedinurl && (
            <IoLogoLinkedin
              className={linkedinStyle}
              onClick={handleLinkedinClicked}
            />
          )}
        </SocialLinks>
      </Content>
    </Wrapper>
  );
};
export default HeaderInfo;
