import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:3000/api/drugs';

export const fetchPharmacies = createAsyncThunk('pharmacies/fetchAll', async(_, thunkAPI) => {
    try{
        const result = await axios.get('/pharmacies');
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchDrugs = createAsyncThunk('drugs/fetchAll', async(_, thunkAPI) => {
    try{
        const result = await axios.get('/');
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});