import * as React from 'react';
import { useContext, useEffect } from 'react';

import CriticallyEndangered from './CriticallyEndangered';
import Mammals from './Mammals';
import { SpeciesContext } from '../../context/species/SpeciesContext';
import { fetchData } from './species.utils';

export interface SpeciesProps {}

const Species: React.FC<SpeciesProps> = () => {
    const { state, dispatch } = useContext(SpeciesContext);
    console.log(state);

    useEffect(() => {
        fetchData(dispatch);
    }, []);

    return <>
        <CriticallyEndangered></CriticallyEndangered>
        <Mammals></Mammals>
    </>;
};

export default Species;