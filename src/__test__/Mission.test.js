import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/Mission';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);
describe('MyMissions', () => {
  it('render Rockets Components', () => {
    render(<Mission />);
    expect(Mission).toMatchSnapshot();
  });
});
