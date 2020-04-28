import * as React from 'react';

import './Mammals.scss';

export interface MammalsProps {}

const Mammals: React.FC<MammalsProps> = () => {
    return <div className="mammals">
        <h2 className="mammals__title">Mammals</h2>
    </div>;
};

export default Mammals;