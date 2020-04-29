import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Mammals from '../Mammals';

afterEach(cleanup);

describe('Mammals', () => {
    it('snapshot Mammals', () => {
        const { asFragment } = render(<Mammals />);
        expect(asFragment()).toMatchSnapshot();
    });
});

