import * as React from 'react';
import { setFetchErrorAction, setFetchLoadingAction, setRegionsAction } from './../../context/species/species.actions';

export const fetchData = async (dispatch: React.Dispatch<any>) => {

    dispatch(setFetchLoadingAction(true));
    try {
        // get regions
        const response = await fetch(`${process.env.REACT_APP_API_URL}/region/list?token=${process.env.REACT_APP_API_TOKEN}`);
        const {results} = await response.json();
        const region = results[results.length -1].identifier;
        
        // get species
        const speciesResponse = await fetch(`${process.env.REACT_APP_API_URL}/species/region/${region}/page/0?token=${process.env.REACT_APP_API_TOKEN}`);

        const speciesData = await speciesResponse.json();

        console.log('data', results, speciesData, region);

        dispatch(setRegionsAction(results));

    } catch (err) {
        dispatch(setFetchErrorAction(err));
    }
    
};