import useGlobalState from "hooks/useGlobal/useGlobalState";
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
        {data.phonenumber && (
          <PhoneNumber>
            <IoIosCall className={iconStylePhone} />
            {data.phonenumber}
          </PhoneNumber>
        )}
        {data.email && (
          <Email>
            <IoMdMail className={iconStyle} />
            {data.email}
          </Email>
        )}
        <SocialLinks>
          {data.facebookurl && (
            <IoLogoFacebook
              className={facebookStyle}
              onClick={handleFBClicked}
            />
          )}
          {data.instagramurl && (
            <IoLogoInstagram
              className={instagramStyle}
              onClick={handleInstagramClicked}
            />
          )}
          {data.linkedinurl && (
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
