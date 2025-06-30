import axios from "axios";
import { createContext, useEffect } from "react";

const Appcontext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const Appprovider =({children }) => {
    const getProducts = async (url) => {
        const res = await axios.get(url);
        const products = await res.data;
    };
    useEffect(() => {
      getProducts(API);
    }, [])
    
    return <Appcontext.Provider value={{ myData : "Home Context Data"}}>
        {children}
    </Appcontext.Provider>
};

export {Appprovider, Appcontext};