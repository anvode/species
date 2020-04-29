import * as React from 'react';
import { useContext } from 'react';

import { SpeciesContext } from '../../../context/species/SpeciesContext';

import './Mammals.scss';

export interface MammalsProps {}

const Mammals: React.FC<MammalsProps> = () => {
    const { state: {mammals, region} } = useContext(SpeciesContext);

    return <div className="mammals">
        <h2 className="mammals__title">Mammals in {region}</h2>
        {mammals.length > 0 ? (
            <div className="species-results">
                <p>{mammals.length} Species found</p>

                {mammals.map(item => (
                    <div key={item.taxonid} className="species-results__item">
                        <div className={'species-results__name'}>{item.scientific_name}</div>
                        <div className="species-results__value">{item.class_name}</div>
                    </div>
                ))}
            </div>
        ): 'No results'}
    </div>;
};

export default Mammals;