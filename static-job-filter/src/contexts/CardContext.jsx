import { createContext, useContext, useReducer } from "react";
import data from "../../public/data.json"


const CardContext = createContext();

const initialState = {
  filterList: [],
  data,
}

function reducer(state, action){

}

function CardProvider({children}){
  const [{filterList}, dispatch] = useReducer(reducer, initialState);

  return(
    <CardContext.Provider value={{
      filterList,
      data,
    }}>
      {children}
    </CardContext.Provider>
  )
}

function useCards(){
  const context = useContext(CardContext);

  if(context === undefined) throw new Error("CardContext was used outside of CardProvider");

  return context;
}

export {useCards, CardProvider};