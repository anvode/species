import * as React from 'react';
import { setFetchErrorAction, setFetchLoadingAction, setRegionsAction, setSpeciesAction, setLoadingTextAction, setSpeciesFilterAction } from './../../context/species/species.actions';
import { Species } from './../../types/Species';

export const fetchData = async (dispatch: React.Dispatch<any>): Promise<void> => {

    dispatch(setFetchLoadingAction(true));
    try {
        const {identifier} = await getRegions(dispatch);
        const SpeciesAddCriticallyEnd = await getSpeciesAddCriticallyEnd(dispatch, identifier);

        dispatch(setSpeciesFilterAction('category', 'CR','criticallyEndangered' ));

        dispatch(setSpeciesFilterAction('class_name', 'MAMMALIA','mammals' ));

        dispatch(setFetchLoadingAction(false));

    } catch (err) {
        dispatch(setFetchErrorAction(err.message));
    }
    
};

const getRegions = async (dispatch: React.Dispatch<any>): Promise<{identifier: string}> => {
    // get regions
    dispatch(setLoadingTextAction('Regions'));
    const response = await fetch(`${process.env.REACT_APP_API_URL}/region/list?token=${process.env.REACT_APP_API_TOKEN}`);
    const {results} = await response.json();
    const randomRegion = Math.floor(Math.random()*results.length);

    const {name, identifier} = results[randomRegion];

    dispatch(setRegionsAction(results, name));

    return {
        identifier
    };
};

const getSpeciesAddCriticallyEnd = async (dispatch: React.Dispatch<any>, identifier: string): Promise<void> => {
    // get species
    dispatch(setLoadingTextAction('Species'));
    const response = await fetch(`${process.env.REACT_APP_API_URL}/species/region/${identifier}/page/0?token=${process.env.REACT_APP_API_TOKEN}`);
        
    const {result} = await response.json();
    
    const fetchMeasure = result.map(async (species: Species) => {
        if (species.category !== 'CR') {
            species['measures'] = null;
        } else {
            const responseMeasures = await fetch(`${process.env.REACT_APP_API_URL}/measures/species/id/${species.taxonid}/region/${identifier}?token=${process.env.REACT_APP_API_TOKEN}`);

            dispatch(setLoadingTextAction(`Measures of ${species.scientific_name}`));

            const resultMeasures = await responseMeasures.json();
            const concatMeasureText = resultMeasures.result.map((text: {code: string, title: string}) => text.title).join('. ');
            species['measures'] = concatMeasureText;

        }
        return species;
    } );

    const resultMeasure: Species[] = await Promise.all(fetchMeasure);

    dispatch(setSpeciesAction(resultMeasure));
};