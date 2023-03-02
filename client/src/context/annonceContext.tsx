import { createContext, useEffect, useReducer} from "react";
import { API_ROUTE } from "../constant/apiRoute";
import { annonceReducer } from "./annonceReducer";

interface Props {
  children: any;
}

export const InitialState = {
  list: [],
  listFiltered: [],
  filterWord: ""
}

export const AnnonceContext = createContext<any>({})

export const AnnonceProvider = ({children}:Props) => {

  const [state, dispatch] = useReducer(annonceReducer, InitialState)

  // Fetch one time data from back-end API_ROUTE ( Strapi Back-End )
  
  useEffect(() => {

    try {
      async function fetchData(){
        const dataFetch = await fetch(API_ROUTE)
        const res = await dataFetch.json()
        console.log(res);
        
        dispatch({
          type: "INIT_DATA",
          payload: res
        })
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }

  }, [])

  const clearAnnonce = () => {
    dispatch({
      type: "CLEAR_FILTER",
      payload: ""
    })
  }

  const filterAnnonce = (location:string) => {
    dispatch({
      type: "FILTER_ANNONCE",
      payload: location
    })
  }


  const value = {
    list: state.list,
    listFiltered: state.listFiltered,
    filterWord: state.filterWord,
    filterAnnonce,
    clearAnnonce
  }

  return (
    <AnnonceContext.Provider value={value}>
      {children}
    </AnnonceContext.Provider>
  )

}

export default AnnonceProvider