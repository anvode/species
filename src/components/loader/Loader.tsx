import * as React from 'react';
import { useContext } from 'react';

import { SpeciesContext } from '../../context/species/SpeciesContext';

import './Loader.scss';

const Loader = () => {
    const { state: {speciesLoadingText} } = useContext(SpeciesContext);

    return (
        <div className="loader__container">
            <h2 className="loader__title">{speciesLoadingText}</h2>
            <div className="loader"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;
