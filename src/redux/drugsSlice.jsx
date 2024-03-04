import { createSlice} from "@reduxjs/toolkit";
import { fetchPharmacies, fetchDrugs } from "./opertions";

const drugsInitialState = {
    items: [],
    pharmacies: [],
    isLoading: false,
    error: null
    };

const forPending = (state) => {state.isLoading = true};
const forRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const drugsSlice = createSlice({
    name: 'drugs',
    initialState: drugsInitialState,
    extraReducers: builder => {
        builder
        .addCase(fetchDrugs.pending, forPending)
        .addCase(fetchDrugs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
            .addCase(fetchDrugs.rejected, forRejected)
            .addCase(fetchPharmacies.pending, forPending)
        .addCase(fetchPharmacies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.pharmacies = action.payload;
        })
        .addCase(fetchPharmacies.rejected, forRejected)
    }
});

export const drugsReducer = drugsSlice.reducer;