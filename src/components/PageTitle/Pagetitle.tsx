import * as React from 'react';
import { useContext } from 'react';

import { SpeciesContext } from '../../context/species/SpeciesContext';

const PageTitle = () => {
    const { state: {region} } = useContext(SpeciesContext);

    return (
        <>
            <h1 className="main__title">IUCN Red List of Threatened Species<strong>{region ? `: ${region}` : ''}</strong></h1>
        </>
    );
};

export default PageTitle;
