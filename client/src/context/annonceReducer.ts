import { Data } from "./types"

interface Action {
  type: string
  payload: string
}

export const annonceReducer = (state:any, action:Action) => {

  const { type, payload } = action

  switch (type) {
    // Clear Filter is not currently used, in future update
    case "CLEAR_FILTER":
      console.log("CLEAR_FILTER " + payload);
      return {
        ...state
      }
    case "FILTER_ANNONCE":
      console.log("FILTER_ANNONCE " + payload);
      return {
        ...state,
        filterWord: payload,
        listFiltered: [...state.list.data].filter((item:Data) =>
          item.attributes.ville.toLocaleLowerCase().includes(payload.toLocaleLowerCase()))
      }
    case "INIT_DATA":
      console.log("INIT_DATA" + payload);
      return {
        ...state,
        list: payload,
        listFiltered: payload
      }
    default:
      return state
  }
}