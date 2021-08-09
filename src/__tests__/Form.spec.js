import React from 'react';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../components/Details'




describe('clicking the weather button', () => {

    let getByTestId;
    beforeEach(async () => {
        ({ getByTestId } = render(<Form />));

        await userEvent.type(
            getByTestId('zipcode'),
            '30324',
        );
    })

    it('clicks', () => {
        // userEvent.click(getByTestId('weatherButton'))
        const actual = getByTestId('zipcode').value;
        const expected = '30324';
        expect(actual).toEqual(expected);
    });

})