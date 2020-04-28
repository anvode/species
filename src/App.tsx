import * as React from 'react';

import SpeciesProvider from './context/species/SpeciesContext';
import Species from './components/Species';

import './App.scss';

interface AppProps {}

function App(props: AppProps) {
    return (
        <div className="main">
            <SpeciesProvider>
                <Species></Species>
            </SpeciesProvider>
        </div>
    );
}

export default App;

