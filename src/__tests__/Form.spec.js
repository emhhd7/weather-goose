import React from 'react';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../components/Details'

describe('<Form />', () => {
    let getByTestId;
})

describe('clicking the weather button', () => {
    beforeEach(async () => {
        ({ getByTestId } = render(<Form />));

        await userEvent.type(
            getByTestId('zipcode'),
            '30324',
        );
        userEvent.click(getByTestId('weatherButton'))

        it('clicks', () => {
            expect(getByTestId('zipcode').value).toEqual('30324');
        });

    })
})