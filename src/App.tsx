import * as React from 'react';

import SpeciesProvider from './context/species/SpeciesContext';
import Species from './components/Species';
import PageTitle from './components/PageTitle/Pagetitle';

import './App.scss';

interface AppProps {}

function App(props: AppProps) {
    return (
        <div className="main">
            <SpeciesProvider>
                <PageTitle></PageTitle>
                <div className="container">
                    <Species></Species>
                </div>
            </SpeciesProvider>
        </div>
    );
}

export default App;

