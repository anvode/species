import { Region, Species } from './../../types/Species';
import { SPECIES_FETCH_ERROR, SPECIES_FETCH_LOADING, SPECIES_FETCH_REGIONS, SPECIES_FETCH_SPECIES, SPECIES_LOADING_TEXT, SPECIES_FILTER, SpeciesActionTypes } from './../../types/actions';

export const setRegionsAction = (regions: Region[], region: string): SpeciesActionTypes => {
    return {
        type: SPECIES_FETCH_REGIONS,
        regions, 
        region
    };
};

export const setSpeciesAction = (species: Species[]): SpeciesActionTypes => {
    return {
        type: SPECIES_FETCH_SPECIES,
        species
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

export const setLoadingTextAction = (text: string): SpeciesActionTypes => {
    return {
        type: SPECIES_LOADING_TEXT,
        text: text
    };
};

export const setSpeciesFilterAction = (filterProperty: string, filterValue: string, setProperty: string): SpeciesActionTypes => {
    return {
        type: SPECIES_FILTER,
        filterProperty: filterProperty,
        filterValue: filterValue,
        setProperty: setProperty
    };
};