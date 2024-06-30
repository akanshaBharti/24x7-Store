import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
   filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all"
   },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //   grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  //list view
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // sorting fn
  const sorting = (event) => {
    let userValue = event.target.value;
     dispatch({type: "GET_SORT_VALUE", payload: userValue });
  };
  
  //  update filter value
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({type: "UPDATE_FILTERS_VALUE", payload:{name, value}})

  };

  // to sort the product
  useEffect(() => {
    dispatch({type: "FILTER_PRODUCTS"})
    dispatch({type: "SORTING_PRODUCTS"});
  }, [state.sorting_value, products, state.filters]);


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

//custom hook
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, FilterContext, useFilterContext };
