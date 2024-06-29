import { createContext, useContext, useEffect, useReducer } from "react";
import data from "../../public/data.json"

const CardContext = createContext();

const initialState = {
  filterList: ["React", "JavaScript"],
}

function reducer(state, action) {
  switch (action.type) {
    case 'addFilter':
      return {
        ...state,
        filterList: [
          ...state.filterList,
          action.payload
        ]
      }
    case 'removeFilter':
      return {
        ...state,
        filterList: [
          ...state.filterList.filter((filter) => filter !== action.payload),
        ]
      }
    case 'clearFilterList':
      return {
        ...state,
        filterList: []
      }
  }
}


function CardProvider({ children }) {
  const [{ filterList }, dispatch] = useReducer(reducer, initialState);

  console.log(filterList)

  function addFilter(filter) {
    !filterList.includes(filter) && dispatch({ type: "addFilter", payload: filter })
  }

  function removeFilter(filter) {
    dispatch({ type: "removeFilter", payload: filter })
  }

  function clearFilterList() {
    dispatch({ type: "clearFilterList" })
  }

  return (
    <CardContext.Provider value={{
      filterList,
      data,
      addFilter,
      removeFilter,
      clearFilterList,
    }}>
      {children}
    </CardContext.Provider>
  )
}

function useCards() {
  const context = useContext(CardContext);

  if (context === undefined) throw new Error("CardContext was used outside of CardProvider");

  return context;
}

export { useCards, CardProvider };