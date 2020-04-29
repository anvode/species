import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import CriticallyEndangered from '../CriticallyEndangered';

afterEach(cleanup);

describe('CriticallyEndangered Species', () => {
    it('snapshot CriticallyEndangered Species', () => {
        const { asFragment } = render(<CriticallyEndangered />);
        expect(asFragment()).toMatchSnapshot();
    });
});

