import { SpeciesState } from './../../types/Species';
import { SPECIES_FETCH_ERROR, SPECIES_FETCH_LOADING, SPECIES_FETCH_REGIONS, SPECIES_FETCH_SPECIES, SPECIES_LOADING_TEXT, SpeciesActionTypes } from './../../types/actions';

export const speciesReducer = (state: SpeciesState, action: SpeciesActionTypes) => {

    switch (action.type) {

        case SPECIES_FETCH_REGIONS: {
            return {
                ...state,
                region: action.region,
                regions: action.regions
            };
        }

        case SPECIES_FETCH_SPECIES: {
            return {
                ...state,
                species: action.species
            };
        }

        case SPECIES_FETCH_LOADING: {
            return {
                ...state,
                speciesFetchLoading: action.loading
            };
        }

        case SPECIES_LOADING_TEXT: {
            return {
                ...state,
                speciesLoadingText: action.text
            };
        }

        case SPECIES_FETCH_ERROR: {
            return {
                ...state,
                speciesFetchError: action.error
            };
        }

        default:
            return state;
    }
};