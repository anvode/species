import * as React from 'react';
import {useReducer, createContext} from 'react';

import { speciesReducer } from './species.reducer';
import { SpeciesState } from '../../types/Species';

const initialState: SpeciesState = {
    region: '',
    speciesLoadingText: '',
    speciesFetchLoading: false,
    speciesFetchError: false,
    regions: [],
    species: [],
    criticallyEndangered:[]
};

// Create context
export const SpeciesContext = createContext<{
    state: SpeciesState;
    dispatch: React.Dispatch<any>;
  }>({
      state: initialState,
      dispatch: () => null
  });

const SpeciesProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(speciesReducer, initialState);

    return (
        <SpeciesContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </SpeciesContext.Provider>
    );
};

export default SpeciesProvider;
