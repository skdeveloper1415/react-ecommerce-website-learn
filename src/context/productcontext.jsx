import axios from "axios";
import { useContext, useReducer } from "react";
import { createContext, useEffect } from "react";
import reducer from '../reducer/ProductsReducer';

const Appcontext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const inititalState = {
    isLoading : false,
    isError : false,
    products : [],
    featureProducts: [],
}

const Appprovider =({children }) => {
    const [state, dispatch] = useReducer(reducer, inititalState)
    const getProducts = async (url) => {
        dispatch({ tyep : "SET_LOADER"})
    try {
        const res = await axios.get(url);
        const products = await res.data;
        dispatch({type:"MY_API_DATA", payload: products})
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
    };
    useEffect(() => {
      getProducts(API);
    }, [])
    
    return <Appcontext.Provider value={{ ...state }}>
        {children}
    </Appcontext.Provider>
};

const useProductsContext = () => {
    return useContext(Appcontext);
}

export {Appprovider, Appcontext, useProductsContext};