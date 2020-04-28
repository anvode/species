import { SpeciesState } from './../../types/Species';
import { SPECIES_FETCH_ERROR, SPECIES_FETCH_LOADING, SPECIES_FETCH_REGIONS, SpeciesActionTypes } from './../../types/actions';

export const speciesReducer = (state: SpeciesState, action: SpeciesActionTypes) => {

    switch (action.type) {

        case SPECIES_FETCH_REGIONS: {
            return {
                ...state,
                speciesLoading: false,
                regions: action.regions
            };
        }

        case SPECIES_FETCH_LOADING: {
            return {
                ...state,
                speciesFetchLoading: action.loading
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