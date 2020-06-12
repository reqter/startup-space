export const initialData = {
  partnerDetailStickySideBar: false,
};

export function reducer(state = initialData, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_PAGE_DATA":
      const s = {
        ...state,
        ...payload,
      };
      return s;
    case "SET_DATA":
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case "TOGGLE_PARTNER_DETAIL_STICKY_SIDE_BAR":
      return {
        ...state,
        partnerDetailStickySideBar: payload,
      };
    default:
      state;
  }
}
