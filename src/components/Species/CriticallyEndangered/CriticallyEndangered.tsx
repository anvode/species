import * as React from 'react';

import './CriticallyEndangered.scss';

export interface CriticallyEndangeredProps {}

const CriticallyEndangered: React.FC<CriticallyEndangeredProps> = () => {
    return <div className="critically-endangered">
        <h2 className="critically-endangered__title">Critically Endangered Species</h2>
    </div>;
};

export default CriticallyEndangered;