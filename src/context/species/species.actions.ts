import { Region } from './../../types/Species';
import { SPECIES_FETCH_ERROR, SPECIES_FETCH_LOADING, SPECIES_FETCH_REGIONS, SpeciesActionTypes } from './../../types/actions';

export const setRegionsAction =(regions: Region[]): SpeciesActionTypes => {
    return {
        type: SPECIES_FETCH_REGIONS,
        regions
    };
};

export const setFetchErrorAction = (error: boolean): SpeciesActionTypes => {
    return {
        type: SPECIES_FETCH_ERROR,
        error: error
    };
};

export const setFetchLoadingAction = (loading: boolean): SpeciesActionTypes => {
    return {
        type: SPECIES_FETCH_LOADING,
        loading: loading
    };
};
