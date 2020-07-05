import { styled } from "linaria/lib/react";
import { css } from "linaria";
export const Wrapper = styled.div`
  @apply w-full bg-gray-200 shadow-sm;
`;

export const Content = styled.div`
  @apply w-1150 m-auto h-full flex items-center py-3;
`;
export const PhoneNumber = styled.span`
  @apply text-base flex relative;
  margin-inline: 20px;
`;
export const iconStylePhone = css`
  position: absolute;
  left: -20px;
  top: 3px;
`;
export const Email = styled.div`
  @apply text-base relative flex;
  margin-inline: 20px;
`;
export const iconStyle = css`
  position: absolute;
  left: -20px;
  top: 3px;
`;
export const SocialLinks = styled.div`
  @apply flex-1 flex justify-end;
`;
export const facebookStyle = css`
  font-size: 20px;
  color: rgb(59, 89, 152);
  cursor: pointer;
`;
export const instagramStyle = css`
  font-size: 20px;
  color: rgb(251, 57, 88);
  margin-inline-start: 20px;
  cursor: pointer;
`;
export const linkedinStyle = css`
  font-size: 20px;
  color: rgb(14, 118, 168);
  margin-inline-start: 20px;
  cursor: pointer;
`;