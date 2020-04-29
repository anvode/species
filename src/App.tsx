import * as React from 'react';

import SpeciesProvider from './context/species/SpeciesContext';
import Species from './components/Species';

import './App.scss';

interface AppProps {}

function App(props: AppProps) {
    return (
        <div className="main">
            <SpeciesProvider>
                <h1 className="main__title">IUCN Red List of Threatened Species</h1>
                <div className="container">
                    <Species></Species>
                </div>
            </SpeciesProvider>
        </div>
    );
}

export default App;

