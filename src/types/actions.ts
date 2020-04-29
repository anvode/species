import { Species, Region } from './Species';

export const SPECIES_FETCH_REGIONS = 'SPECIES_FETCH_REGIONS';
export const SPECIES_FETCH_SPECIES = 'SPECIES_FETCH_SPECIES';
export const SPECIES_FETCH_LOADING = 'SPECIES_FETCH_LOADING';
export const SPECIES_LOADING_TEXT = 'SPECIES_LOADING_TEXT';
export const SPECIES_FETCH_ERROR = 'SPECIES_FETCH_ERROR';

export interface SetRegionsAction {
    type: typeof SPECIES_FETCH_REGIONS;
    regions: Region[];
    region: string;
}

export interface SetSpeciesAction {
    type: typeof SPECIES_FETCH_SPECIES;
    species: Species[];
}

export interface SetFetchErrorAction {
    type: typeof SPECIES_FETCH_ERROR;
    error: boolean;
}

export interface SetFetchLoadingAction {
    type: typeof SPECIES_FETCH_LOADING;
    loading: boolean;
}

export interface SetLoadingTextAction {
    type: typeof SPECIES_LOADING_TEXT;
    text: string;
}

export type SpeciesActionTypes = SetFetchErrorAction | SetFetchLoadingAction | SetRegionsAction | SetSpeciesAction | SetLoadingTextAction;