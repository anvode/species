import * as React from 'react';
import { useContext } from 'react';

import { SpeciesContext } from '../../../context/species/SpeciesContext';

import './CriticallyEndangered.scss';

export interface CriticallyEndangeredProps {}

const CriticallyEndangered: React.FC<CriticallyEndangeredProps> = () => {
    const { state: {criticallyEndangered, region} } = useContext(SpeciesContext);

    return <div className="critically-endangered">
        <h2 className="critically-endangered__title">Critically Endangered Species in {region}</h2>
        {criticallyEndangered.length > 0 ? (
            <div className="species-results">
                <p>{criticallyEndangered.length} Species found</p>
                {criticallyEndangered.map(item => (
                    <div key={item.taxonid} className="species-results__item">
                        <div className={'species-results__name'}>{item.scientific_name}</div>
                        <div className="species-results__value">{item.measures && item.measures.length > 0 ? item.measures: 'empty field'}</div>
                    </div>
                ))}
            </div>
        ): 'No results'}
    </div>;
};

export default CriticallyEndangered;