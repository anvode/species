import * as React from 'react';
import { useContext, useEffect } from 'react';

import CriticallyEndangered from './CriticallyEndangered';
import Mammals from './Mammals';
import { SpeciesContext } from '../../context/species/SpeciesContext';
import { fetchData } from './species.utils';
import Loader from '../loader/Loader';

import './Species.scss';

export interface SpeciesProps {}

const Species: React.FC<SpeciesProps> = () => {
    const { state: {speciesFetchError, speciesFetchLoading}, dispatch } = useContext(SpeciesContext);

    useEffect(() => {
        fetchData(dispatch);
    }, []);

    if (speciesFetchError) {
        return <div>
            Oops! An Error happens while Fetching:  <strong>{speciesFetchError}</strong>
        </div>;
    }

    if (speciesFetchLoading) {
        return <Loader></Loader>;
    }

    return <>
        <CriticallyEndangered></CriticallyEndangered>
        <Mammals></Mammals>
    </>;
};

export default Species;