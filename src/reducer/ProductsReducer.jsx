const ProductsReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADER" :
        return {
            ...state,
            isLoading:true,
        };
        case "MY_API_DATA" :
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true;

            });
            return {
                ...state,
                isLoading:false,
                products:action.payload,
                featureProducts:featureData,

            }
        case "API_ERROR" :
            return {
                ...state,
                isLoading:false,
                isError:true,
        };
        default: 
        return state;
    }
};

export default ProductsReducer;