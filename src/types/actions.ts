import { Species, Region } from './Species';

export const SPECIES_FETCH_REGIONS = 'SPECIES_FETCH_REGIONS';
export const SPECIES_FETCH_LOADING = 'SPECIES_FETCH_LOADING';
export const SPECIES_FETCH_ERROR = 'SPECIES_FETCH_ERROR';

export interface SetRegionsAction {
    type: typeof SPECIES_FETCH_REGIONS;
    regions: Region[];
}

export interface SetFetchErrorAction {
    type: typeof SPECIES_FETCH_ERROR;
    error: boolean;
}

export interface SetFetchLoadingAction {
    type: typeof SPECIES_FETCH_LOADING;
    loading: boolean;
}

export type SpeciesActionTypes = SetFetchErrorAction | SetFetchLoadingAction | SetRegionsAction;