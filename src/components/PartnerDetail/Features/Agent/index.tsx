import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import {
  IoLogoWhatsapp,
  IoIosSend,
  IoMdPhonePortrait,
  IoIosPin,
  IoLogoSkype,
  IoMdMailOpen,
  IoIosLink,
  IoLogoInstagram,
} from "react-icons/io";
import LayoutBox from "../../LayoutBox";
import {
  AgentContainer,
  ImageBox,
  ImageInfo,
  Detail,
  Name,
  DetailRow,
  DetailValue,
} from "./styles";
const Agent = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    [partnerDetailPage]
  );
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const img = React.useMemo(() => {
    const val = getValue(partnerDetail, "agent.fields.image");
    if (val && val.length > 0) return includeImageBaseUrl(val[0]);
  }, [partnerDetail]);

  const skypeId = getValue(partnerDetail, "agent.fields.skypeid") as string;
  const email = getValue(partnerDetail, "agent.fields.email") as string;
  const instagramId = getValue(
    partnerDetail,
    "agent.fields.instagram"
  ) as string;
  const wId = getValue(partnerDetail, "agent.fields.whatsapplink") as string;
  const telegramId = getValue(
    partnerDetail,
    "agent.fields.telegramid"
  ) as string;

  return !data.agentvisibility ? null : partnerDetail && partnerDetail.agent ? (
    <LayoutBox title={data.agentboxtitle}>
      <AgentContainer>
        <ImageBox src={img}>
          <ImageInfo>
            {instagramId ? (
              <a
                href={`instagram://media?id=${
                  instagramId
                    ? instagramId.split("@").length > 1
                      ? instagramId.split("@")[1]
                      : instagramId
                    : ""
                }`}
                target="_blank"
              >
                <IoLogoInstagram />
              </a>
            ) : null}
            {wId ? (
              <a href={wId} target="_blank">
                <IoLogoWhatsapp />
              </a>
            ) : null}
            {telegramId ? (
              <a
                href={`https://t.me/${
                  telegramId
                    ? telegramId.split("@").length > 1
                      ? telegramId.split("@")[1]
                      : telegramId
                    : ""
                }`}
                target="_blank"
              >
                <IoIosSend />
              </a>
            ) : null}
          </ImageInfo>
        </ImageBox>
        <Detail>
          <Name>{getValue(partnerDetail, "agent.fields.name")}</Name>
          <DetailRow>
            <IoMdPhonePortrait />
            <DetailValue>
              <a
                href={`tel:${getValue(
                  partnerDetail,
                  "agent.fields.phonenumber"
                )}`}
              >
                {getValue(partnerDetail, "agent.fields.phonenumber")}
              </a>
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <IoIosPin />
            <DetailValue>
              {getValue(partnerDetail, "agent.fields.address")}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <IoLogoSkype />
            <DetailValue>
              <a
                href={`skype:${
                  skypeId
                    ? skypeId.split("@").length > 1
                      ? skypeId.split("@")[1]
                      : skypeId
                    : ""
                }?chat`}
              >
                {skypeId}
              </a>
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <IoMdMailOpen />
            <DetailValue>
              <a href={`mailto:${email}`}>{email}</a>
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <IoIosLink />
            <DetailValue>
              {getValue(partnerDetail, "agent.fields.about")}
            </DetailValue>
          </DetailRow>
        </Detail>
      </AgentContainer>
    </LayoutBox>
  ) : null;
};
export default Agent;
