export const selectDrugs = state => state.drugs.items;

export const selectPharmacies = state => state.drugs.pharmacies;

export const selectFavoriteDrugs = state => state.drugsLS.favoriteDrugs;

export const selectDrugsForShop = state => state.drugsLS.orderData.drugsForShop;

export const selectDataUser = state => state.drugsLS.orderData.user;

export const selectFilter = state => state.filter.input;

export const selectFilterPharm = state => state.filter.pharm;

export const selectFilterAlf = state => state.filter.alf;

export const selectFilterPrice = state => state.filter.price;

export const selectFilterDate = state => state.filter.date;


export const selectIsLoading = state => state.drugs.isLoading;

export const selectError = state => state.drugs.error;