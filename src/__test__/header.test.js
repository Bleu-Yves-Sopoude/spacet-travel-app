import { render } from '@testing-library/react';
import React from 'react';
import Header from '../components/header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

const links = [
  {
    id: 3,
    path: '/',
    navigationContent: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    navigationContent: 'Missions',
  },
  {
    id: 1,
    path: '/profile',
    navigationContent: 'My Profile',
  },
];

const AppMock = () =>  (
    <BrowserRouter>
      <Header links={links} />
    </BrowserRouter>
  );

describe('test header', () => {
  it('should render all links', () => {
    render(<AppMock />);
    expect(Header).toMatchSnapshot();
  });
});
