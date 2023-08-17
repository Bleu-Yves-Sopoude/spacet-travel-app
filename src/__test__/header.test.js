import { render } from '@testing-library/react';
import Header from '../components/header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
const links = [
    {
        id: 3,
        path: '/',
        navigationContent: "Rockets"
    },
    {
        id: 2,
        path: '/missions',
        navigationContent: "Missions"
    },
    {
        id: 1,
        path: '/profile',
        navigationContent: "My Profile",
    },
];

const AppMock = () => {
    return (
        <BrowserRouter>
            <Header links={links} />
        </BrowserRouter>
    )
}

describe("test header", () => {
    it("should render all links",() => {
        render(<AppMock />)
        expect(Header).toMatchSnapshot();
    })
})