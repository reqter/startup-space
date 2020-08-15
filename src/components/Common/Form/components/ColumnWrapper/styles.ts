import { styled } from "linaria/lib/react";
const _gutter_horizontal = 2;
const gutter_horizontal = "2%";

export const Wrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: ${({ colSpan, fieldsLength, rowColumns }) => {
    if (fieldsLength === 1) return 100 - _gutter_horizontal + "%";

    switch (rowColumns) {
      case 1:
        return "100%";
      case 2:
        return colSpan === 1
          ? (100 - 2 * _gutter_horizontal) / 2 + "%"
          : 100 - _gutter_horizontal + "%";
      case 3:
        return colSpan === 1
          ? (100 - 2 * (2 * _gutter_horizontal)) / 3 + "%"
          : colSpan === 2
          ? (2 * (100 - 2 * (2 * _gutter_horizontal))) / 3 +
            2 * _gutter_horizontal +
            "%"
          : 100 - _gutter_horizontal + "%";
      case 4:
        if (colSpan === 1)
          return (100 - 3 * (2 * _gutter_horizontal)) / 4 + "%";
        if (colSpan === 2)
          return (
            (2 * (100 - 3 * (2 * _gutter_horizontal))) / 4 +
            2 * _gutter_horizontal +
            "%"
          );
        if (colSpan === 3)
          return (
            (3 * (100 - 3 * (2 * _gutter_horizontal))) / 4 +
            2 * (2 * _gutter_horizontal) +
            "%"
          );
        return 100 - _gutter_horizontal + "%";
      default:
        return 100 - _gutter_horizontal + "%";
    }
  }};
  margin-inline-end: ${({ colSpan, fieldsLength, rowColumns }) => {
    if (fieldsLength === 1) return "0";
    switch (rowColumns) {
      case 1:
        return `0`;
      case 2:
        if (colSpan === 1) return gutter_horizontal;
        if (colSpan === 2) return "0";
      case 3:
        if (colSpan === 1) return gutter_horizontal;
        if (colSpan === 2) return gutter_horizontal;
        if (colSpan === 3) return "0";
      case 4:
        if (colSpan === 1) return gutter_horizontal;
        if (colSpan === 2) return gutter_horizontal;
        if (colSpan === 3) return gutter_horizontal;
        if (colSpan === 4) return "0";
      default:
        return "0";
    }
  }};
  @screen phone {
    width:100%;
    margin-inline-end:0
  }
`;
