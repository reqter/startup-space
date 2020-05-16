export const initialData = {};

export function reducer(state = initialData, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_PAGE_DATA":
      return {
        ...state,
        ...payload,
      };
    default:
      state;
  }
}
