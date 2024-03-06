import { createSlice} from "@reduxjs/toolkit";

const drugsLSInitialState = {
    favoriteDrugs: [],
    drugsForShop: []
};
    
const drugsLSSlice = createSlice({
    name: 'drugsLS',
    initialState: drugsLSInitialState,
    reducers: {
        addFavoriteDrugs: (state, action) => {
            if (!state.favoriteDrugs.includes(action.payload)){
                state.favoriteDrugs.push(action.payload)
            }
        },
        delFavoriteDrugs: (state, action) => {
            const index = state.favoriteDrugs.indexOf(action.payload);
            if(index === -1){
                return null
            };
            state.favoriteDrugs.splice(index, 1);
        },
        addDrFShop: (state, action) => {
                state.drugsForShop.push(action.payload)

        },
        delDrFShop: (state, action) => {
            const index = state.drugsForShop.findIndex(d => d.id === action.payload.id);
            if(index === -1){
                return null
            };
            state.drugsForShop.splice(index, 1);
        },
        setQuantityShop: (state, action) => {
            const index = state.drugsForShop.findIndex(d => d.id === action.payload.id);
            if(index === -1){
                return null
            };
            state.drugsForShop[index].quantity = action.payload.quantity;
        }
    }
});

export const {
    addFavoriteDrugs,
    delFavoriteDrugs,
    addDrFShop,
    delDrFShop,
    setQuantityShop
} = drugsLSSlice.actions;

export const drugsLSReducer = drugsLSSlice.reducer;

