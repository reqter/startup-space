import React from "react";
import {
  Wrapper,
  Image,
  Content,
  TextContainer,
  Name,
  Location,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const BlogHeader = ({}) => {
  const { currentLanguage } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  // const bg = getValue(data, "images");
  // const img = bg ? includeImageBaseUrl(bg[0], "image", 500, 300) : "";
  return (
    <Wrapper
      target="_blank"
      rel="noopener noreferrer"
      // href={`${currentLanguage}/offices/${data?._id}`}
    >
      <Image
        bgImage={
          "https://originworkspace.co.uk/app/uploads/2020/02/ORIGIN-BLOG-HEADER-5.jpg"
        }
      />
      <Content>
        <TextContainer>
          <Name>رشد استارتاپ ها زیر چتر فضاهای کار اشتراکی</Name>
          <Location>نمایش جزئیات</Location>
        </TextContainer>
      </Content>
    </Wrapper>
  );
};
export default BlogHeader;
