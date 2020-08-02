import { styled } from "linaria/lib/react";

export const CustomForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  @apply justify-between;
  margin-inline-end: ${({ rowColumns }) => (rowColumns > 1 ? "-55px" : 0)};
`;
export const OptionsSingleSelected = styled.div`
  font-size: 14px;
`;
export const OptionsMultiSelected = styled.div`
  font-size: 14px !important;
`;
export const OptionItems = styled.div`
  font-size: 14px !important;
`;
