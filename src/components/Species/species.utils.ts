import * as React from 'react';
import { setFetchErrorAction, setFetchLoadingAction, setRegionsAction, setSpeciesAction, SetLoadingTextAction } from './../../context/species/species.actions';
import { Species } from './../../types/Species';

export const fetchData = async (dispatch: React.Dispatch<any>): Promise<void> => {

    dispatch(setFetchLoadingAction(true));
    try {
        const {identifier} = await getRegions(dispatch);
        const {result} = await getSpecies(dispatch, identifier);

        dispatch(setFetchLoadingAction(false));
        console.log('result', result);

    } catch (err) {
        dispatch(setFetchErrorAction(err));
    }
    
};

const getRegions = async (dispatch: React.Dispatch<any>): Promise<{identifier: string}> => {
    // get regions
    dispatch(SetLoadingTextAction('Regions'));
    const response = await fetch(`${process.env.REACT_APP_API_URL}/region/list?token=${process.env.REACT_APP_API_TOKEN}`);
    const {results} = await response.json();

    const {name, identifier} = results[results.length -1];

    dispatch(setRegionsAction(results, name));

    return {
        identifier
    };
};

const getSpecies = async (dispatch: React.Dispatch<any>, identifier: string): Promise<{result: Species[]}> => {
    // get species
    dispatch(SetLoadingTextAction('Species'));
    const response = await fetch(`${process.env.REACT_APP_API_URL}/species/region/${identifier}/page/0?token=${process.env.REACT_APP_API_TOKEN}`);
        
    const {result} = await response.json();
    
    dispatch(setSpeciesAction(result));

    return {
        result
    };
};